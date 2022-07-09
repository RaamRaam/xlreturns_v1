import React, { useState,useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { useRouter } from 'next/router'
import Image from "next/image";
import Productoptions from "./Productoptions";
import Serviceoptions from "./Serviceoption";
import Codersoptions from "./Codersoption";
import Companyoptions from "./Companyoption";
import logo from "./../../public/01.png"
import { signIn,signOut,useSession } from 'next-auth/react'
import Avatar from 'react-avatar';



export default function Navbar() {
	const { data: session } = useSession()
	// console.log(session.user.name)
	const router = useRouter()
   	const [isOpen, setIsOpen] = useState(false);
	const [isProduct , setIsProduct] = useState(false);
	const [isService , setIsService] = useState(false);
	const [isCoders , setIsCoders] = useState(false);
	const [isCompany , setIsCompany] = useState(false);
	const [isLogin , setIsLogin] = useState(false);
	const handleproductsshow = ()=>{setIsProduct(!isProduct)}
	const handleservicesshow = ()=>{setIsService(!isService)}
	const handlecodersshow = ()=>{setIsCoders(!isCoders)}
	const handlecompanyshow = ()=>{setIsCompany(!isCompany)}
	const handleloginshow = ()=>{setIsLogin(!isLogin)}
	
	useEffect(() => {
		handleproductsshow()
		handleservicesshow()
		handlecodersshow()
		handlecompanyshow()
		

	}, []);
  return (
      
    <div>
		<nav className="sticky top-0 shadow-sm  w-full z-10 bg-white">
			<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center mx-3 md:mx-10 justify-between w-full">
							<div className="flex justify-center items-center sm:flex-shrink-0 mb-2 " onClick={()=>{router.push("/")}} >
                                <Image src={logo} width={150} height={50} objectFit="contain" />
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-center space-x-4">
                                    <div className="flex-col cursor-pointer" onMouseEnter={ handleproductsshow} onMouseLeave={handleproductsshow}>
										<Link
											activeClass="Products"
											to="products"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer  hover:text-logo_blue-light font-semibold px-3 py-7 text-md  "
										>
											Products
										</Link>
										{/* hover div hidden and enable on click */}
										{!isProduct?(
											<Productoptions />
										):("")
										}
                                    </div>
									
									<div className="flex-col cursor-pointer   py-6" onMouseEnter={ handleservicesshow} onMouseLeave={handleservicesshow} >
										<Link
											activeClass="Services"
											to="serviced"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer hover:text-logo_blue-light font-semibold px-3 py-7 text-md  "
										>
											Services
										</Link>
										{/* hover div hidden and enable on click */}
										{!isService?(
											<Serviceoptions />
										):("")
										}
                                    </div>
									<div className="flex-col cursor-pointer   py-6" onMouseEnter={ handlecodersshow} onMouseLeave={handlecodersshow}>
										<Link
											activeClass="Coders"
											to="Coders"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer hover:text-logo_blue-light font-semibold px-3 py-7 text-md  "
										>
											Coders
										</Link>
										{/* hover div hidden and enable on click */}
										{!isCoders?(
											<Codersoptions />
										):("")
										}
                                    </div>

									<div className="flex-col cursor-pointer   py-6" onMouseEnter={ handlecompanyshow} onMouseLeave={handlecompanyshow}>
										<Link
											activeClass="Company"
											to="Company"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer hover:text-logo_blue-light font-semibold px-3 py-7 text-md  "
										>
											Company
										</Link>
										{/* hover div hidden and enable on click */}
										{!isCompany?(
											<Companyoptions />
										):("")
										}
                                    </div>
									{!session?(
									<div className="flex-col cursor-pointer"  onClick={!session ? signIn: ""} >
										<button
											
											activeClass="Login"
											to="login"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer font-semibold px-3 py-2 text-md bg-logo_blue-light rounded text-white  "
										>
											{!session ? "Login":""}
										</button>
										
                                    </div>
									):(<div className='py-6' onMouseEnter={ handleloginshow} onMouseLeave={handleloginshow} >
										<div >
											<Avatar className="cursor-pointer " name={session.user.name} src={session.user.image} round="100%" size={40} />
										</div>
									{isLogin?(
										<div className='relative md:absolute md:top-20 right-5 flex-col space-y-1 w-max h-max bg-slate-300 p-3 rounded-xl'>		
											<div className='cursor-pointer flex items-center space-x-4 text-md ' onClick={()=>{router.push("/")}}>
												<p>Account</p>
											</div>
										<div className='cursor-pointer flex items-center space-x-5 text-md'   >				
											<p onClick={()=>signOut()}>LogOut</p>
										</div>
										</div>
									):("")}
								</div>)}
							
							</div>
						</div>
						<div className=" flex md:hidden space-x-4 ">
							
							<div>
							{session?(
								<div>
								<div onClick={handleloginshow}>
									<Avatar onClick={handleloginshow} className="cursor-pointer " name={session.user.name} src={session.user.image} round="100%" size={40} />
								</div>
							{isLogin?(
								<div className='absolute right-12 flex-col space-y-1 w-max h-max bg-slate-300 p-3 rounded-xl z-50'>		
									<div className='cursor-pointer flex items-center space-x-4 text-md ' onClick={()=>{router.push("/account")}}>
										<p>Account</p>
									</div>
								<div className='cursor-pointer flex items-center space-x-5 text-md'   >				
									<p onClick={()=>signOut()}>LogOut</p>
								</div>
								</div>
							):("")}
						</div>
							):("")}
							</div>

							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-logo_blue-light inline-flex items-center justify-center p-2 rounded-md text-white  focus:outline-none "
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-7 pt-2 pb-3 space-y-1 sm:px-7"
							>
									<div className=" w-full flex-col cursor-pointer py-3" onClick={handleproductsshow} >
										<Link
											onClick={handleproductsshow}
											activeClass="Products"
											to="products"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer w-1/2  hover:text-logo_blue-light font-semibold px-3 py-7 text-md  "
										>
											Products
										</Link>
										{/* hover div hidden and enable on click */}
										{!isProduct?(
											<Productoptions />
										):("")
										}
                                    </div>
									
									<div className="flex-col cursor-pointer py-3 " onClick={handleservicesshow} >
										<Link
											onClick={handleservicesshow}
											activeClass="Services"
											to="serviced"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer hover:text-logo_blue-light font-semibold px-3 py-7 text-md  "
										>
											Services
										</Link>
										{/* hover div hidden and enable on click */}
										{!isService?(
											<Serviceoptions />
										):("")
										}
                                    </div>
									<div className="flex-col cursor-pointer py-3" onClick={ handlecodersshow} >
										<Link
											onClick={ handlecodersshow}
											activeClass="Coders"
											to="Coders"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer hover:text-logo_blue-light font-semibold px-3 py-7 text-md  "
										>
											Coders
										</Link>
										{/* hover div hidden and enable on click */}
										{!isCoders?(
											<Codersoptions />
										):("")
										}
                                    </div>

									<div className="flex-col cursor-pointer py-3" onClick={ handlecompanyshow} >
										<Link
											onClick={ handlecompanyshow}
											activeClass="Company"
											to="Company"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer hover:text-logo_blue-light font-semibold px-3 py-7 text-md  "
										>
											Company
										</Link>
										{/* hover div hidden and enable on click */}
										{!isCompany?(
											<Companyoptions />
										):("")
										}
                                    </div>
									{!session?(
									<div className="flex-col cursor-pointer py-3"   >
										<button
											onClick={!session ? signIn: signOut}
											activeClass="Login"
											to="login"
											smooth={true}
											offset={50}
											duration={500}
											className="cursor-pointer font-semibold px-7 py-2 text-md bg-logo_blue-light rounded text-white  "
										>
											{!session ? "Login":"LogOut"}
										</button>
										
                                    </div>
								):("")}
							</div>
						</div>
					)}
				</Transition>
			</div>
			</nav>
		</div>
		
  )
}
