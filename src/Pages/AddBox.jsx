import React from "react";
import { FormComponent } from "../components/Form";

export const AddBox = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-blue-500 font-semibold text-center">Add Box</h2>
      <FormComponent />
    </div>
  );
};
