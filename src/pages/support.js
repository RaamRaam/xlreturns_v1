import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useSession } from 'next-auth/react'
export default function support() {
  const {data:session} = useSession()

  // collect user query
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
};
  const [userquery,setUserquery] = useState({})
  useEffect(() => {
    
    fetch('api/profile-data',requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setUserquery(userquery)
        
      })
  }, [])
  return (
    <div className='bg-slate-200 h-auto'>
        <Navbar />
        <main className='p-5 md:flex justify-between space-y-3' >
            {/* left two div and FAQ */}
            <div className='space-y-3'>
              {/* two cards */}
              <div className=' md:flex md:space-x-5 space-y-3 md:space-y-0 '>
                <div className='bg-white w-60  h-32 py-4 rounded-lg text-center '>
                  <h1>Technical Support</h1>
                  <Link href="/docs">
          		      <a>Go to Docs</a>
        	        </Link>
                  <p><a href="mailto:tech@xlreturns.com">tech@xlreturns.com</a></p>
                </div>
                <div className='bg-white w-60 h-32 py-4 rounded-lg text-center '>
                  <h1>Sales Support</h1>
                  <p><a href="mailto:sales@xlreturns.com">sales@xlreturns.com</a></p>
                </div>
              </div>
              {/* FAQ */}
              <div className='space-y-2'>
                  <h1>FAQ</h1>
                  <div>
                    <p className='font-bold'>Q. what is credits mechanism ?</p>
                    <p>Typically, 1 credit is used for 1 day's data. The price of credit is determined from time to time. For more, please visit pricing page	</p>
                  </div>
                  <div>
                    <p className='font-bold'>Q. what is credits mechanism ?</p>
                    <p>Typically, 1 credit is used for 1 day's data. The price of credit is determined from time to time. For more, please visit pricing page	</p>
                  </div>
                  <div>
                    <p className='font-bold'>Q.what is credits mechanism ?</p>
                    <p>Typically, 1 credit is used for 1 day's data. The price of credit is determined from time to time. For more, please visit pricing page	</p>
                  </div>
                  <div>
                    <p className='font-bold'>Q.what is credits mechanism ?</p>
                    <p>Typically, 1 credit is used for 1 day's data. The price of credit is determined from time to time. For more, please visit pricing page	</p>
                  </div>
              </div>
            </div>
            {/* Right contact div */}
            <div className='bg-white w-full md:w-80 space-y-4 rounded-lg md:p-5 p-1 text-sm md:text-md ' >
              <form className='space-y-5'>
                <div className='flex items-center'>
                  <label for="name" className='w-1/4'>Name</label>   
                  <input type="text" id="name" value={session ? session.user.name : "" } className='w-3/4 p-2 focus:outline-none border border-solid border-black'  />               
                </div>
                <div className='flex items-center'>
                  <label className='w-1/4' for="email">Email Id</label>   
                  <input type="text" id="name" value={session ? session.user.email : ""} className='p-2 w-3/4 focus:outline-none border border-solid border-black '/>
                </div>
                <div className='flex items-center'>
                <label className='w-1/4' for="class">Subject</label>
                <select id="country" name="country" className='w-3/4 p-2 focus:outline-none border border-solid border-black'>
                  <option value="Data Grant for Research">Data Grant for Research</option>
                  <option value="New Indicators Suggested">New Indictors Suggested</option>
                  <option value="Sales Enquiry">Sales Enquiry</option>
                  <option value="Partner Programme">Partner Programme</option>
                </select>
                </div>
                <div className='flex '>
                  <label className='w-1/4' for="message">Message</label>
                  <textarea id="subject" name="message" placeholder="Write something.." className='h-32 p-2 resize-none w-3/4 focus:outline-none border border-solid border-black rounded-lg'></textarea>
                </div>
                <div>
                  <button className='bg-logo_blue-light text-white px-6 py-2 rounded-lg'>Send</button>
                </div>
              </form>
            </div>
        </main>
        <Footer />
    </div>
  )
}
