import React, { useEffect } from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';
import { signIn,providers,getProviders,getSession,csrfToken ,useSession} from 'next-auth/react'
export default function login({providerss}) {
  const { data: session, status } = useSession()
  const router = useRouter()
  console.log("google",providerss.github);
  console.log(session)
  
   if(session){
     router.push("/")
   } 
   return(
    <div className='flex-col h-screen '>
        
      <div className="flex justify-start sm:flex-shrink-0 p-4 bg-white">
          <Image src="/../public/01.png" width={150} height={50} objectFit="contain" />
      </div>
      <div className=' w-max mx-auto my-10  space-y-5 '>
        <div>
          <button onClick={() =>signIn(providerss.google.id)} className='py-2  w-56 bg-red-300 '>sign in with Google</button>
        </div>
        <div>
          <button  onClick={() =>signIn(providerss.facebook.id)} className='py-2  w-56 bg-blue-600 text-white'>sign in with Facebook</button>
        </div>
        <div>
          <button  onClick={() =>signIn(providerss.github.id)} className=' py-2 w-56 bg-black text-white '>sign in with Github</button>
        </div>
          
      </div>
      
  
    </div>
  )
}
login.getInitialProps=async(context)=>{
  const {req,res} = context
  const session = await getSession({req})
  // if(session && res && session.accessToken) {
  //   console.log(session)
  //   res.writeHead(302,{
  //     Location:"/",
  //   });
  //   res.end()
  //   return
  // }
 return{
  providerss:await getProviders(context),
  
 }

 
  
 }




