import React, { useContext } from "react";
import { ShippingBoxContext } from "../context/shippingBoxContext";

export const Table = () => {
  const boxes = useContext(ShippingBoxContext)?.boxes || [];
  console.log("boxes in table:", boxes);
  return (
    <div className="w-full">
      <table className="border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 w-52">Receiver Name</th>
            <th className="p-2 w-52">Weight (kg)</th>
            <th className="p-2 w-52">Box Color</th>
            <th className="p-2 w-52">Destination Country</th>
            <th className="p-2 w-52">Shipping Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
          {boxes?.map((box, index) => (
            <tr className="border-t" key={index}>
              <td className="p-2 text-center w-52"> {box?.receiverName}</td>
              <td className="p-2 text-center w-52"> {box?.weight}</td>
              <td className="p-2 text-center w-52">
                <div
                  className="w-5 h-5 rounded m-auto"
                  style={{backgroundColor:box?.color}}
                ></div>
              </td>
              <td className="p-2 text-center w-52"> {box?.destinationCountry}</td>
              <td className="p-2 text-center w-52"> {box?.shippingCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
