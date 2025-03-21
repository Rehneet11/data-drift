import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import React from 'react'
import Editor from '../../_components/Editor';

async function page({params}:{params:{workflowId:string}}) {
    const {workflowId}=params;
    const {userId}= await auth()
    if(!userId){
        return <div className='text-6xl text-red-500'>Unauthenticated</div>
    }
    const workflow = await prisma.workflow.findUnique({
        where:{
            id:workflowId,
            userId,
        }
    });
    if(!workflow){
        return <div className='text-6xl text-red-500'>Workflow Not Found</div>
    }
  return (
    <Editor workflow={workflow}/>
  )
}

export default page