import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    let navigate = useNavigate()
  return (
    <nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full">
  <div className="flex flex-no-shrink items-stretch h-12">
    <p  className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-black hover:text-white" onClick={()=>navigate("/dashboard")}>Home</p>
    <p className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-black hover:text-white" onClick={()=>navigate("/shipments")}>Your Shipments</p>
  </div>
</nav>
  )
}
