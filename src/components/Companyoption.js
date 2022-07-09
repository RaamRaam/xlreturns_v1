import React from 'react'
import Link from 'next/link'

export default function Companyoptions() {
  return (
    <div className="relative md:absolute md:top-20">
		<main className='flex-col space-y-1 w-max h-max bg-slate-300 p-3 rounded-xl'>
			<div className='flex items-center space-x-4 text-md '>
				
				<p>About</p>
			</div>
			<div className='flex items-center space-x-5 text-md '>
				
				<p>Blog</p>
			</div>
			<div className='flex items-center space-x-5 text-md '>
				
				<p>Data FAQ</p>
			</div>
			<div className='flex items-center space-x-5 text-md '>
			<Link href="/">
          		<a>Support</a>
        	</Link>
				
			</div>
			
		</main>
	</div>
  )
}
