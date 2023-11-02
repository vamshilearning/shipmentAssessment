import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

export default function DeliveryPartnerDashboard() {

    let navigate = useNavigate() 
    useEffect(() => {
        // Fetch the list of shipments assigned to the logged-in delivery partner.
      }, []);

  return (
  <>
    <Navbar/>
    <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
  <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
    <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
    </div>
    <form className="p-12 md:p-24">
      <div className="flex flex-col items-center text-lg mb-6 md:mb-8 justify-center gap-5">
       <p>Welcome Delivery Partner!!</p>
       <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full" onClick={()=>navigate("/shipments")}>Go to Shipments</button>
        {/* <input type="text" id="email" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      </div>
    </form>
  </div>
 </div>
 </>
  )
}

