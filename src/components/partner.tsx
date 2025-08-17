"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const hospitals = [
  {
    name: "Apollo Hospital",
    desc: "Best multispeciality hospital in Noida",
    img: "https://content.jdmagicbox.com/comp/noida/y6/011pxx11.xx11.210903194837.u5y6/catalogue/apollo-cradle-and-children-and-spectra-hospital-pocket-7-noida-general-physician-doctors-33c2pciv0c.jpg"
  },
  {
    name: "Fortis Hospital",
    desc: "Providing world-class healthcare facilities",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4N9SopNbk5rwopjVBEXgYAXIFMCT8yB7FbA&s"
  },
  {
    name: "Jaypee Hospital",
    desc: "Advanced healthcare with modern technology",
    img: "https://vaidam-images.s3.ap-southeast-1.amazonaws.com/files/Jaypee-Building-3.jpg"
  },
   
];

function ThreeDCardDemo() {
  return (
    <section>
        <div className="mt-10">
        <h1 className="text-3xl font-bold text-center text-blue-600 mt-0 mb-6">
          About us
        </h1>
        
        <p className="max-w-3xl text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed mx-auto">
  <span className="font-semibold text-blue-500">MedEase</span> is 
  revolutionizing the way people manage their medical records. 
  We partner with leading hospitals and clinics to provide seamless, 
  secure, and instant access to your medical history. 
  Our mission is to empower patients with 
  <span className="font-medium text-blue-500"> digital solutions </span> 
  for better health management.
</p>

      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-0">
      {hospitals.map((hospital, i) => (
        <CardContainer key={i} className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
            border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-6 border"
          >
            

            <CardItem translateZ="100" className="w-full mt-0">
              <img
                src={hospital.img}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={hospital.name}
              />
            </CardItem>

         
             
          </CardBody>

        </CardContainer>
      ))}
    </div>
    </section>
    
  );
}

export default ThreeDCardDemo;
