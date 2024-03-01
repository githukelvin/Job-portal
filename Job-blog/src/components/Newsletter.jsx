import React from 'react'
import{ FaEnvelopeOpenText } from "react-icons/fa6"
import Button from '../sidebar/Button'

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaEnvelopeOpenText/>
            Email me for Jobs</h3>
            <p className="text-primary/75 text-base mb-5">Join our newsletter and get the latest job listings and career insights delivered straight to your inbox</p>
            {/* subscription button */}
            <div>
                <form className="w-full space-y-4">
                    <input type="email" name="email" placeholder="name@gmail.com" className="w-full block py-2 pl-3 border focus:outline-none"/>
                    <input type="submit" value={"Subscribe"} className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold hover:bg-pink"/>
                </form>
            </div>
            
      </div>
      {/* submission of the resume/cv */}

      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaEnvelopeOpenText/>
            Email me for Jobs</h3>
            <p className="text-primary/75 text-base mb-5">Join our newsletter and get the latest job listings and career insights delivered straight to your inbox</p>
            {/* subscription button */}
            <div>
                <form className="w-full space-y-4">
                    <input type="email" name="email" placeholder="name@gmail.com" className="w-full block py-2 pl-3 border focus:outline-none"/>
                    <input type="submit" value={"Subscribe"} className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold hover:bg-pink"/>
                </form>
            </div>
            
      </div>
    </div>
  )
}

export default Newsletter