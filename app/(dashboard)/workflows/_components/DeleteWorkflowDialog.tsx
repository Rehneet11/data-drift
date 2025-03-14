"use client"
import { DeleteWorkflow } from '@/actions/workflows/deleteWorkflow';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input';
import { Toast } from '@/components/ui/toast';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { toast } from 'sonner';

interface Props{
    open:boolean;
    setOpen:(open:boolean)=>void;
    workflowName:string;
    workflowId:string;
}

function DeleteWorkflowDialog({open,setOpen,workflowName,workflowId}:Props) {
    const[confirmText,setConfirmText]=useState("")
    const deleteMutation = useMutation({
        mutationFn:DeleteWorkflow,
        onSuccess:()=>{toast.success("Workflow deleted",{id:workflowId});
                        setConfirmText("")},
        onError:()=>{toast.error("Error while deleting Workflow",{id:workflowId})},
    })
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action will permamnently delete the workflow.
                    <div className='flex flex-col py-2 gap-2'>
                        <p>Confirm by typing :  {workflowName} </p>
                        <Input value={confirmText} onChange={e=>setConfirmText(e.target.value)}/>
                    </div>
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={()=>setConfirmText("")}>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction 
                disabled={confirmText!==workflowName || deleteMutation.isPending} 
                className='bg-destructive text-destructive-foreground hover:bg-destructive/90' 
                onClick={()=>{
                    toast.loading("Deleting Workflow",{id:workflowId});
                    deleteMutation.mutate(workflowId)
                }}>
                    Delete
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteWorkflowDialog