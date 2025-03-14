import { cn } from '@/lib/utils';
import { WorkflowIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Logo({fontSize='text-2xl',iconSize=20}:{
    fontSize?:string;
    iconSize?:number
}) {
  return (
    <Link href='/' className={cn("text-2xl font-extrabold flex items-center gap-2", fontSize)}>
        <div className='rounded-xl bg-gradient-to-r from bg-amber-500 to-amber-800 p-2'>
            <WorkflowIcon size={iconSize} className='stroke-white'/>
        </div>
        <div>
            <span className='bg-gradient-to-r from bg-amber-500 to-amber-800 bg-clip-text text-transparent'>
                Data
            </span>
            <span className='text-stone-900 dark:text-stone-300'>
                Drift
            </span>
        </div>
    </Link>
  )
}

export default Logo