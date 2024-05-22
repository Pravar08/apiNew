import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaAddressBook, FaAddressCard, FaEnvelope, FaMobile, FaMobileAlt, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Head Office Address</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaAddressBook />
                        <span className="text-[15px] ml-[6px]">Block A Floor 3 Abc tower Sector 135 </span>    
                    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]"> Noida Uttar Pradesh India ,Pincode-201305 </span>    
                    </p>
                   
                </div>
            
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact us</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                   <span className="text-[15px] ml-[6px]"><FaMobileAlt/> </span>    
                     
                        <span className="text-[15px] ml-[6px]"> 9140093382,8960065557</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <span className="text-[15px] ml-[6px]"><FaEnvelope/> </span>    
                  
                  <span className="text-[15px] ml-[6px]"> apiglobaltechnologies@gmail.com</span>    
              </p>
                   
                   
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; API Global 2023 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer