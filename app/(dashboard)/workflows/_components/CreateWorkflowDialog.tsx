"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import { useState } from 'react'

function CreateWorkflowDialog({triggerText}:{triggerText?:string}) {
    const [open,setOpen]=useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button>{triggerText ?? "Create Workflow"}</Button>
        </DialogTrigger>
        <DialogContent className='px-0'></DialogContent>
    </Dialog>
  )
}

export default CreateWorkflowDialog