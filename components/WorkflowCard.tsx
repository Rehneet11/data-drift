"use client"
import { Workflow } from '@prisma/client'
import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { WorkflowStatus } from '@/types/workflow'
import { FileType2Icon, MoreVerticalIcon, PencilIcon, PlaySquareIcon, Trash2Icon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants,Button } from './ui/button'
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger } from './ui/dropdown-menu'
import TooltipWrapper from './TooltipWrapper'
import DeleteWorkflowDialog from '@/app/(dashboard)/workflows/_components/DeleteWorkflowDialog'

const statusColors={
    [WorkflowStatus.DRAFT]:"bg-green-300 text-green-700",
    [WorkflowStatus.PUBLISHED]:"bg-amber-300 text-amber-900"
}

function WorkflowCard({workflow}:{workflow:Workflow}) {
    const isDraft=workflow.status === WorkflowStatus.DRAFT
  return (
    <Card className='border border-seperate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-amber-200'>
        <CardContent className='p-4 flex items-center justify-between h-[100px]'>
            <div className='flex items-center justify-end space-x-3'>
                <div className={cn('w-10 h-10 rounded-full flex items-center justify-center',statusColors[workflow.status as WorkflowStatus])}>
                    {isDraft ? <FileType2Icon className='h-5 w-5'/>:<PlaySquareIcon className='h-5 w-5'/>}
                </div>
                <div>
                    <h3 className='text-base font-bold text-muted-foreground flex items-center'>
                        <Link href={`/workflow/editor/${workflow.id}`} className='flex items-center hover:underline text-xl'>{workflow.name}</Link>
                        {isDraft && <span className='ml-2 px-2 py-0.5 text-xs font-medium bg-green-300 text-green-700 rounded-lg'> DRAFT</span>}
                    </h3>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <Link href={`/workflow/editor/${workflow.id}`} 
                className={cn(
                buttonVariants({
                variant:"outline",
                size:"sm"
                }),
                    "flex items-center gap-2"
                )}>
                    <PencilIcon size={16}/>
                    EDIT
                </Link>
                <WorkflowActions workflowName={workflow.name} workflowId={workflow.id}/>
            </div>
        </CardContent>
    </Card>
  )
}

interface Props{
    workflowName:string;
    workflowId:string;
}
function WorkflowActions({workflowName,workflowId}:Props){
    const[showDeleteDialog,setShowDeleteDialog]=useState(false);
    return (
        <>
        <DeleteWorkflowDialog open={showDeleteDialog} setOpen={setShowDeleteDialog} workflowName={workflowName} workflowId={workflowId}/>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} size={'sm'}>
                    <TooltipWrapper content={'More Actions'}>
                        <div className='flex items-center justify-center w-full h-full'>
                            <MoreVerticalIcon size={18}/>
                        </div>
                    </TooltipWrapper>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem className='flex items-center text-destructive gap-2' onSelect={()=>setShowDeleteDialog((prev)=>!prev)}>
                    <Trash2Icon size={16}/>
                    DELETE
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    )
}

export default WorkflowCard