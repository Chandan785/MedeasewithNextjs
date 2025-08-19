// "use client";
// import React from "react";
// import { FloatingNav } from "./ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
//  function FloatingNavDemo() {
//   const navItems = [
//     {
//         name: "MedEase",
//         link: "/dashboard",
//         icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "Home",
//       link: "/",
//       icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "About",
//       link: "/about",
//       icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "Contact",
//       link: "/contact",
//       icon: (
//         <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
//       ),
//     },
//   ];
//   return (
//     <div className="relative  w-full">
//       <FloatingNav navItems={navItems} />
//       <DummyContent />
//     </div>
//   );
// }
// const DummyContent = () => {
//   return (
//     <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
//       <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
//         Scroll back up to reveal Navbar
//       </p>
//       <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
//     </div>
//   );
// };


// export default FloatingNavDemo;
 
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


 function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >

      <Menu setActive={setActive}>

          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>MedEase</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>

           <Link href={"/Home"}>
           <MenuItem setActive={setActive} active={active} item="Home">  
           </MenuItem>
           </Link>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/seo">Health Records Management</HoveredLink>
            <HoveredLink href="/web-dev">Online Appointment Booking</HoveredLink>
            <HoveredLink href="/interface-design">Doctor Consultation</HoveredLink>
            <HoveredLink href="/branding">Digital Prescriptions</HoveredLink>
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}
    
        <Link href={"/contact"}>
           <MenuItem setActive={setActive} active={active} item="Contact Us">  
           </MenuItem>
           </Link>
           <Link href={"/about"}>
           <MenuItem setActive={setActive} active={active} item="About Us">  
           </MenuItem>
           </Link>
         <Link href={"/how-it-works"}>
           <MenuItem setActive={setActive} active={active} item=" How it works">  
           </MenuItem>
           </Link>
           <MenuItem setActive={setActive} active={active} item="SignUp">
          <div className="flex flex-col space-y-4 text-sm">
             <HoveredLink href="/signup/organization">SignUp as Organization </HoveredLink>
            <HoveredLink href="/signup/user "> SignUp as User</HoveredLink>
            <HoveredLink href="/signup/doctor">SignUp as Doctor</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
       
    </div>
  );
}

export default NavbarDemo;