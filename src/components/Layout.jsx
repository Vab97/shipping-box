import React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="my-2 bg-white">
        <Navbar />
      </div>
      <main className="p-6">
        <div className="w-8/12 mx-auto">{children}</div>
      </main>
    </div>
  );
};
