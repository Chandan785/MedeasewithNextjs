"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
// import { Button } from "./ui/moving-border";

// import { FileUpload } from "@/components/ui/file-upload";
import { on } from "events";


  function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
         
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-[60vh]", // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Chandan Kumar",
                href: "#",
                icon: (
                  <img
                    src="download.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        User Profile
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        
         <div className=" w-full flex flex-1 flex-col items-center  gap-0">
          <h1 className="text-xl w-auto font-bold text-black dark:text-white mb-4">
            Welcome to the Dashboard
          </h1>
        </div>
        
        <form className="w-full max-w-4xl bg-[#f5f8ff] dark:bg-neutral-900 p-6 rounded-md shadow-sm border border-gray-200 dark:border-neutral-700">
  <h2 className="text-2xl font-bold text-blue-600 mb-4">Filter Reports by Date</h2>

  <div className="flex flex-wrap items-center gap-4">
    {/* Start Date */}
    <div className="flex flex-col">
      <label htmlFor="StartDate" className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Start Date:
      </label>
      <input
        type="date"
        id="StartDate"
        name="StartDate"
        className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-200 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    {/* End Date */}
    <div className="flex flex-col">
      <label htmlFor="EndDate" className="text-sm font-medium text-gray-700 dark:text-gray-300">
        End Date:
      </label>
      <input
        type="date"
        id="EndDate"
        name="EndDate"
        className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-200 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    {/* Button */}
    <button
      type="submit"
      className="px-6 py-2 mt-5 rounded-md font-semibold 
                 bg-blue-600 text-white hover:bg-blue-700 
                 shadow-md transition"
    >
      Filter
    </button>
  </div>
</form>




        {/* <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
      >
        Borders are cool  Welcome to the Dashboard
      </Button> */}
       
      </div>
    </div>
  );
};

export default SidebarDemo;