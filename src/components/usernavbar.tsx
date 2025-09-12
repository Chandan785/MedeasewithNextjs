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
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function SidebarDemo() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const Logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/signup/user");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Logout failed, try again!");
    }
  };

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
      onClick: Logout,
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-1 flex-col md:flex-row rounded-md border border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen" // full height
      )}
    >
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) =>
                link.onClick ? (
                  <button
                    key={idx}
                    onClick={link.onClick}
                    className="flex items-center gap-2 px-0 py-2 rounded-md text-left text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-red-100 dark:hover:bg-neutral-700"
                  >
                    {link.icon}
                    {open && <span>{link.label}</span>}
                  </button>
                ) : (
                  <SidebarLink key={idx} link={link} />
                )
              )}
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

      {/* Dashboard */}
      <div className="flex flex-1 overflow-y-auto">
        <Dashboard />
      </div>
    </div>
  );
}

export const Logo = () => (
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

export const LogoIcon = () => (
  <a
    href="#"
    className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
  >
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
  </a>
);

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-4 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
      <h1 className="text-xl font-bold text-black dark:text-white mb-4">
        Welcome to the Dashboard
      </h1>

      {/* Filter Form */}
      <form className="w-full max-w-4xl bg-[#f5f8ff] dark:bg-neutral-900 p-6 rounded-md shadow-sm border border-gray-200 dark:border-neutral-700">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Filter Reports by Date
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          {/* Start Date */}
          <div className="flex flex-col">
            <label
              htmlFor="StartDate"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
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
            <label
              htmlFor="EndDate"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
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

      {/* Available Reports */}
      <div className="p-6 w-full overflow-x-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Available Reports
        </h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-6 py-3 font-semibold">
                  Date of Report Generation
                </th>
                <th className="px-6 py-3 font-semibold">Organization Name</th>
                <th className="px-6 py-3 font-semibold">Report Type</th>
                <th className="px-6 py-3 font-semibold">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
                <td className="px-6 py-3">28-08-2025</td>
                <td className="px-6 py-3">Tech Corp</td>
                <td className="px-6 py-3">Monthly Summary</td>
                <td className="px-6 py-3">
                  <button className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                    Download
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
                <td className="px-6 py-3">05-08-2025</td>
                <td className="px-6 py-3">Tech Corp</td>
                <td className="px-6 py-3">Monthly Summary</td>
                <td className="px-6 py-3">
                  <button className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                    Download
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
                <td className="px-6 py-3">25-08-2025</td>
                <td className="px-6 py-3">Health Org</td>
                <td className="px-6 py-3">Annual Report</td>
                <td className="px-6 py-3">
                  <button className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                    Download
                  </button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
                <td className="px-6 py-3">25-08-2025</td>
                <td className="px-6 py-3">Health Org</td>
                <td className="px-6 py-3">Annual Report</td>
                <td className="px-6 py-3">
                  <button className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                    Download
                  </button>
                </td>
              </tr><tr className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
                <td className="px-6 py-3">25-08-2025</td>
                <td className="px-6 py-3">Health Org</td>
                <td className="px-6 py-3">Annual Report</td>
                <td className="px-6 py-3">
                  <button className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                    Download
                  </button>
                </td>
              </tr><tr className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
                <td className="px-6 py-3">25-08-2025</td>
                <td className="px-6 py-3">Health Org</td>
                <td className="px-6 py-3">Annual Report</td>
                <td className="px-6 py-3">
                  <button className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                    Download
                  </button>
                </td>
              </tr><tr className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
                <td className="px-6 py-3">25-08-2025</td>
                <td className="px-6 py-3">Health Org</td>
                <td className="px-6 py-3">Annual Report</td>
                <td className="px-6 py-3">
                  <button className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                    Download
                  </button>
                </td>
              </tr><tr className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
                <td className="px-6 py-3">25-08-2025</td>
                <td className="px-6 py-3">Health Org</td>
                <td className="px-6 py-3">Annual Report</td>
                <td className="px-6 py-3">
                  <button className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                    Download
                  </button>
                </td>
              </tr><tr className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
                <td className="px-6 py-3">25-08-2025</td>
                <td className="px-6 py-3">Health Org</td>
                <td className="px-6 py-3">Annual Report</td>
                <td className="px-6 py-3">
                  <button className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                    Download
                  </button>
                </td>
              </tr><tr className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
                <td className="px-6 py-3">25-08-2025</td>
                <td className="px-6 py-3">Health Org</td>
                <td className="px-6 py-3">Annual Report</td>
                <td className="px-6 py-3">
                  <button className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                    Download
                  </button>
                </td>
              </tr><tr className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700">
                <td className="px-6 py-3">25-08-2025</td>
                <td className="px-6 py-3">Health Org</td>
                <td className="px-6 py-3">Annual Report</td>
                <td className="px-6 py-3">
                  <button className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SidebarDemo;
