"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] relative flex flex-col antialiased bg-white dark:bg-black items-center justify-center overflow-hidden rounded-md">
      {/* ✅ Grid Background */}
      <div
        className="absolute inset-0 
        [background-size:40px_40px] 
        [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] 
        dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
      />

      {/* Optional radial fade for nicer look */}
      <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Our Partner Hospitals
        </h1>
      </div>

      <div className="relative z-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
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
  {
    name: "Cloudnine Hospital",
    desc: "Providing world-class healthcare facilities",
    img: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/67c1975b7a4e3c3400f01cd9_Pari-Chowk-centre.jpg"
  },
  {
    name: "Sarvodaya Hospital",
    desc: "Advanced healthcare with modern technology",
    img: "https://d3ti1kcp1zfdnq.cloudfront.net/Noida_Building_6bf70574b4.jfif"
  },
  {
    name: "Kailash Hospital",
    desc: "Providing world-class healthcare facilities",
    img: "https://www.kailashhealthcare.com/Content/images/GH-H-Khurja-Thumb.png"
  }
];

export default InfiniteMovingCardsDemo;
