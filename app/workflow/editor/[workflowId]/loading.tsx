import { Loader2Icon } from 'lucide-react'
import React from 'react'

function loading() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
        <Loader2Icon size={45} className='animate-spin dark:stroke-amber-500 stroke-black'/>
    </div>
  )
}

export default loading