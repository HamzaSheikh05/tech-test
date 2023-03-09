import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ json }) => {
  const { id, title, price, description, image } = json;
  return (
    <div className="bg-transparent shadow-lg shadow-blue-800 dark:shadow-blue-500 border border-gray-500 max-w-md cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-8 rounded-xl">
      <Link to={`/products/${id}`}>
        <img src={image} alt="DP" className="h-20 mx-auto" />
      </Link>
      <h3 className="text-3xl my-5 text-blue-400 dark:text-blue-200 font-burtons">
        <Link to={`/products/${id}`}>{}</Link>
      </h3>
      <p className="text-md text-blue-100 dark:text-gray-100 leading-normal my-3 font-serif">
        {title}
      </p>
      <p className="text-md text-blue-100 dark:text-gray-100 leading-normal my-3 font-serif">
        {price}
      </p>
      <p className="text-md text-blue-100 dark:text-gray-100 leading-normal my-3 font-serif">
        {description}
      </p>
    </div>
  );
};
