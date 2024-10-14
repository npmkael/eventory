"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-neutral-900 w-full py-7 px-12 flex items-center justify-between shadow-md border-b navbar">
      <div className="left flex items-center gap-14">
        <div className="title flex items-center gap-4 ">
          <Image src={"/logo.svg"} alt="logo" width={25} height={25} />
          <h2 className="text-white font-semibold text-xl">Eventory</h2>
        </div>
        <div className="middle flex justify-center items-center gap-12 h-full">
          <Link
            href={"/find-events"}
            className="text-white text-sm font-light relative before:absolute before:w-0 before:translate-y-[3.5rem] before:border-0 before:border-transparent hover:before:border hover:before:border-white hover:before:w-full hover:before:translate-y-[3.5rem] before:transition-all before:duration-200"
          >
            Find Events
          </Link>
          <a
            href=""
            className="text-white text-sm font-light relative before:absolute before:w-0 before:translate-y-[3.5rem] before:border-0 before:border-transparent hover:before:border hover:before:border-white hover:before:w-full hover:before:translate-y-[3.5rem] before:transition-all before:duration-200"
          >
            Saves
          </a>
          <a
            href=""
            className="text-white text-sm font-light relative before:absolute before:w-0 before:translate-y-[3.5rem] before:border-0 before:border-transparent hover:before:border hover:before:border-white hover:before:w-full hover:before:translate-y-[3.5rem] before:transition-all before:duration-200"
          >
            Customize
          </a>
        </div>
      </div>

      <div className="right flex items-center gap-12">
        <div className="location flex justify-center items-center gap-2">
          <Image
            src={"/location-pin.svg"}
            alt="location"
            width={20}
            height={20}
          />
          <p className="text-white text-sm font-light">Bulaon, Pampanga PH</p>
        </div>
        <div className="profile flex items-center justify-center gap-4">
          <button className="px-2 py-2 rounded-[100%] border border-[#fff] border-opacity-30 flex items-center justify-center">
            <IoSettingsOutline color="white" size={20} />
          </button>
          <button className="px-2 py-2 rounded-[100%] border border-[#fff] border-opacity-30 flex items-center justify-center">
            <IoMdNotificationsOutline color="white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
