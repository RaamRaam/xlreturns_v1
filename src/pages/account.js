import React,{useEffect,useRef ,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import copy from "copy-to-clipboard"; 
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function account() {

// fetch comes here
const [data, setData] = useState(null)
// useEffect(() => {
//   setLoading(true)
//   fetch('api/profile-data')
//     .then((res) => res.json())
//     .then((data) => {
//       setData(data)
      
//     })
// }, [])

  let apivalue = useRef("")
    const copyToClipboard = () => {
       alert(`You have copied "${apivalue.current.value}"`);
    }
  return (
    <div className="bg-slate-200 h-full">
       <Navbar /> 
       <main className='w-full lg:flex space-y-5 md:space-y-0 md:space-x-7 py-5 px-5 md:px-14 '>
           {/* api reset and copy and request free tier */}
         <div className='flex-1 bg-white rounded-lg  '>
           jfhdjf
          </div> 
          {/* Right credit and api key revel*/}
          <div className='flex-col space-y-5 '>
            <div className='bg-green-400 p-5 rounded-lg space-y-4'>
              <div className='flex items-center justify-between'>
                <p className='text-lg font-bold'>Credits Balance</p>
                <p className='text-lg font-bold'>5</p>
              </div>
              
              <div className='flex space-x-3 text-lg '>
                <p>API's</p>
                <input type="number" className='w-40 md:w-full px-2 outline-none'></input>
              </div>
              <div className=''>
                <button className='px-7 py-2 bg-red-300 rounded-lg md:px-9' >Buy More</button>
              </div>
              <div className='flex space-x-3 text-lg'>
                <p>Total Price</p>
                <p className='font-bold '>₹ 300</p>
              </div>
            </div>
            {/* bottom api revel */}
            <div className='flex-col bg-white rounded-lg p-5  space-y-3  '>
                  <div className=" flex justify-between text-xs items-center	 md:text-sm lg:text-lg">
                    <div className="flex-nowrap">
                      <p>Api Key </p>
                    </div>
                     <div className='self-center  text-xs px-1 md:text-md lg:text-lg border-solid border-2 border-slate-500 mx-2 rounded-lg'> 
                      <input ref={apivalue}  value="adlfkdkfskdfsdfd" className="cursor-pointer outline-none focus:outline-none" disabled/>
                     </div> 
                    <div className='cursor-pointer '>
                     <ContentCopyIcon className='text-sm' onClick={copyToClipboard}/>
                   </div>
                  </div>
                     
                  <div className=''>
                     <button className=' bg-blue-200 px-5 rounded-md md:px-7 py-2 '>Reset</button>
                   </div>
                 
                
                 
                 <div>
                   <p>Last Accessed 12/03/2022</p>
                 </div>
            </div>
          </div>
           
           

       </main>
       <Footer />
    </div>
  )
}
