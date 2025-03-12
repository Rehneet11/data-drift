import { GetWorkflowsForUser } from '@/actions/workflows/getWorkflowsForUser'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { loading } from '@/lib/helper/loading'
import { AlertCircle, InboxIcon } from 'lucide-react'
import React, { Suspense } from 'react'
import CreateWorkflowDialog from './_components/CreateWorkflowDialog'

function page() {
  return (
    <div className='flex-1 flex-col h-full '>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-4xl font-bold pb-2'>Workflows</h1>
                <p className='text-muted-foreground'>Workflow Management Dashboard</p>
            </div>
            <CreateWorkflowDialog triggerText='Create Workflow'/>
        </div>
        <div className='h-full py-6'>
            <Suspense fallback={<UserWorkflowSkeleton />}>
                <UserWorkflows/>    
            </Suspense>
        </div>
    </div>
  )
}

function UserWorkflowSkeleton(){
    return (
        <div className='space-y-2'>
            {
                [1,2,3,4].map((i)=>(
                    <Skeleton key={i} className='h-32 w-full'/>
                ))
        
            }
        </div>
    )
}

async function UserWorkflows(){
    const workflows= await GetWorkflowsForUser();
    if(!workflows){
        return (
            <Alert variant={"destructive"}>
                <AlertCircle className='w-4 h-4'/>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went Wrong. Please try again later</AlertDescription>
            </Alert>
        )
    }
    if(workflows.length===0){
        return (
            <div className='flex flex-col gap-4 h-full items-center justify-center'>
                <div className='rounded-full bg-accent w-20 h-20 flex items-center justify-center'>
                    <InboxIcon size={40} className='stroke-amber-500'/>
                </div>
                <div className='flex flex-col gap-1 text-center'>
                    <p className='font-bold'>No Workflow Created yet</p>
                </div>
                <CreateWorkflowDialog triggerText='Create One Now'/>
            </div>
        )
    }
    return (
        <div></div>
    )

}

export default page