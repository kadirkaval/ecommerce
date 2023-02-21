import React from "react";
import data from "../fake-data/all-categories";

function Product({filterProduct}) {
  return (
    <ul className="flex space-x-1">
      {data.map((prd, index) => (
        <li
          key={index}
          className="py-2 px-4 bg-gray-200 font-semibold text-xl hover:bg-gray-300 cursor-pointer"
        onClick={filterProduct}>{prd}
        </li>
      ))}
    </ul>
  );
}

export default Product;
