import React, { useEffect } from 'react';
import Navbar from '../Navbar';

export default function ShipmentList() {
    
    useEffect(() => {
        // Fetch the list of shipments for the logged-in customer.
      }, []);
  return (
    <>
    <Navbar/>
    <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
  <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
    <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
    </div>
    <form className="p-12 md:p-24">
      <div className="flex items-center text-lg mb-6 md:mb-8 justify-center">
       <p>All Your Shipments are listed here</p>
      </div>
    </form>
  </div>
 </div>
 </>
  )
}

