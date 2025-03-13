import { Separator } from '@/components/ui/separator'
import React, { ReactNode } from 'react'
import {BigSidebar} from '@/components/Sidebar'
import BreadCrumbHeader from '@/components/BreadCrumbHeader'
import { ModeToggle } from '@/components/ThemeModeToggle'
import { SignedIn, UserButton } from '@clerk/nextjs'

function layout({children}:{children:ReactNode}) {
  return (
    <div className='flex h-screen'>
        <div className='flex flex-col flex-1 min-h-screen'>
            <header className='flex items-center justify-between py-4 h-[50px] container'>
            <BreadCrumbHeader/>
                <div className='gap-2 flex items-center'>
                    <ModeToggle/>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </div>
            </header>
            <Separator/>
            <div className='overflow-auto'>
                <div className='flex-1 container py-4 text-accent-foreground'>
                    {children}
                </div>
            </div>
        </div>
        <BigSidebar/>
    </div>
  )
}

export default layout