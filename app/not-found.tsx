import { ArrowBigLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function NotFoundPage() {
  return (
    <div className='flex items-center flex-col justify-center min-h-screen p-4'>
        <div className='text-center'>
            <h1 className='text-8xl font-bold text-red-600 mb-4'>404</h1>
            <h2 className='text-3xl font-semibold mb-4'>Page Not Found</h2>
            <div className='text-muted-foreground mb-8 max-w-md'>Oops! Lost in the Digital Void.
            <br />
            Looks like the page you’re searching for has vanished or never existed. 🚀
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                <Link href={'/'} className='flex items-center justify-center max-w-60 px-4 py-2 bg-black dark:bg-white dark:text-black text-white rounded-md hover:bg-green-500 dark:hover:bg-green-500 transition-colors'>
                    <ArrowBigLeft className='w-4 h-4 mr-2'/>
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage