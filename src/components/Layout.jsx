import React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({children}) => {
  return (
    <div className="bg-gray-50">
      <div>
        <Navbar />
      </div>
      <main className="p-6">
        <div className="w-8/12 mx-auto">{children}</div>
      </main>
    </div>
  );
};
