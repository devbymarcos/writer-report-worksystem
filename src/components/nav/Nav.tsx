"use client";
import React, { useState } from "react";
import Link from "next/link";
import { dataNav } from "@/data-nav";
import { motion } from "framer-motion";

const Nav = ({ isOpen, onClick }: any) => {
  return (
    <motion.div
      layout
      style={{
        left: isOpen == false ? "-250px" : "0px",
      }}
      className="fixed w-[250px]   bg-white h-screen top-0 p-4 border-r-2 z-10 "
    >
      <h1 className="font-bold  text-lg mb-6">Writer report</h1>
      <nav>
        <ul>
          {dataNav.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="bg-zinc-200 overflow-hidden block mb-2 px-4 py-2 rounded-md hover:bg-slate-400 hover:text-white"
                  href={item.path}
                  onClick={onClick}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Nav;
