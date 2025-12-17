import React, { useContext, useState } from "react";
import { shippingCostCalculator } from "../services/shippingCostCalculator";
import { addBoxToDB } from "../services/service";
import { ShippingBoxContext } from "../context/shippingBoxContext";
export const FormComponent = () => {
  const [box, setBox] = useState({
    receiverName: "",
    weight: "",
    color: "",
    destinationCountry: "",
  });
  const [error, setError] = useState("");
  const { addBox } = useContext(ShippingBoxContext);

  const handlesaveAddBox = () => {
    if (
      !box?.receiverName ||
      !box?.weight ||
      !box.color ||
      !box?.destinationCountry
    ) {
      setError("Please enter all fields");
      return;
    }

    if (box?.weight < 0) {
      setError("Negative values are not allowed");
      setBox({ ...box, weight: 0 });
    }

    const shippingCostPerCountry = shippingCostCalculator(
      box?.weight,
      box?.destinationCountry
    );

    addBoxToDB({ ...box, shippingCost: shippingCostPerCountry });
    addBox({
      ...box,
      shippingCost: shippingCostPerCountry,
    });
    alert("Box added successfully");
    setError("");
    setBox({
      receiverName: "",
      weight: "",
      color: "",
      destinationCountry: "",
    });
  };
  return (
    <form className="bg-white p-8 rounded-md shadow-sm space-y-5">
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="name">
          Receiver Name
        </label>
        <input
          className="w-full h-9 px-3 py-1 border rounded-md bg-gray-10 text-sm"
          id="name"
          type="text"
          placeholder="Enter Receiver Name"
          onChange={(e) => setBox({ ...box, receiverName: e?.target?.value })}
          value={box?.receiverName}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="weight">
          Weight
        </label>
        <input
          className="w-full h-9 px-3 py-1 border rounded-md bg-gray-10 text-sm"
          id="weight"
          placeholder="Enter Weight in kg"
          type="number"
          onChange={(e) => setBox({ ...box, weight: e?.target?.value })}
          value={box?.weight}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="color">
          Box Color
        </label>
        <input
          className="w-full h-9 px-3 py-1 border rounded-md bg-gray-10 text-sm"
          id="color"
          placeholder="Enter Box Color"
          type="color"
          onChange={(e) => setBox({ ...box, color: e?.target?.value })}
          value={box?.color}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="name">
          Destination country
        </label>
        <select
          className="w-full h-9 px-3 py-1 border rounded-md bg-gray-10 text-sm"
          onChange={(e) =>
            setBox({ ...box, destinationCountry: e?.target?.value })
          }
          value={box?.destinationCountry}
        >
          <option value="">Select Country</option>
          <option value="sweden">Sweden</option>
          <option value="china">China</option>
          <option value="brazil">Brazil</option>
          <option value="australia">Australia</option>
        </select>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <button
        type="button"
        className="bg-blue-500 text-white py-2 px-6 rounded-md"
        onClick={handlesaveAddBox}
      >
        Save
      </button>
    </form>
  );
};
