"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Layers3Icon, Loader2Icon } from 'lucide-react'
import React, { useCallback } from 'react'
import { useState } from 'react'
import CustomDialogHeader from '@/components/CustomDilaogHeader'
import { createWorkflowSchema, createWorkflowSchemaType } from '@/schema/workflow'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useMutation } from '@tanstack/react-query'
import { CreateWorkflow } from '@/actions/workflows/createWorkflows'
import { toast } from 'sonner'

function CreateWorkflowDialog({triggerText}:{triggerText?:string}) {
    const [open,setOpen]=useState(false)
    const form =useForm<createWorkflowSchemaType>({
      resolver:zodResolver(createWorkflowSchema),
      defaultValues:{},
    })
    const {mutate,isPending}=useMutation(
      {
        mutationFn:CreateWorkflow,
        onSuccess:()=>{toast.success("Workflow Created",{id:"create-workflow"})},
        onError:()=>{toast.error("Failed to Create Workflow",{id:"create-workflow"})},
      }
    );
    const onSubmit=useCallback((
      values:createWorkflowSchemaType
    )=>{
      toast.loading("Creating Workflow ...",{id:"create-workflow"});
      mutate(values);
    },[mutate])
  return (
    <Dialog 
      open={open} 
      onOpenChange={open => {
        form.reset();
        setOpen(open);
      }}
    >
        <DialogTrigger asChild>
            <Button>{triggerText ?? "Create Workflow"}</Button>
        </DialogTrigger>
        <DialogContent className='px-0'>
          <CustomDialogHeader icon={Layers3Icon} title="Create Workflow" subTitle="Build your Workflow"/>
          <div className='p-6'>
            <Form {...form}>
              <form className='space-y-8 w-full' onSubmit={form.handleSubmit(onSubmit)}>
                <FormField 
                  control={form.control}
                  name='name'
                  render={({field})=>(
                    <FormItem>
                      <FormLabel className='flex gap-1 items-center'>
                        <span className='text-black dark:text-amber-500'>Name</span>
                        <p className='text-xs text-muted-foreground'>(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input {...field}/>
                      </FormControl>
                      <FormDescription>
                        Choose a Unique name
                      </FormDescription>
                      <FormMessage/>
                    </FormItem>
                  )}/>
                  <FormField 
                  control={form.control}
                  name='description'
                  render={({field})=>(
                    <FormItem>
                      <FormLabel className='flex gap-1 items-center'>
                        <span className='text-black dark:text-amber-500'>Description</span>
                        <p className='text-xs text-muted-foreground'>(optional)</p>
                      </FormLabel>
                      <FormControl>
                        <Textarea className='resize-none'{...field}/>
                      </FormControl>
                      <FormDescription>
                        Describe the Workflow
                      </FormDescription>
                      <FormMessage/>
                    </FormItem>
                  )}/>
                  <Button type='submit' className='w-full' disabled={isPending}>
                    {!isPending && "Continue"}
                    {isPending && <Loader2Icon className='animate-spin'/>}
                  </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
    </Dialog>
  )
}

export default CreateWorkflowDialog