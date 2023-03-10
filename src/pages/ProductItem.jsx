import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export const ProductItem = () => {
  const params = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const jsonData = await response.json();
      setItem(jsonData);
      console.log(jsonData);
    }
    fetchData();
  }, [params.id]);

  console.log(item);
  return (
    <section className="bg-light-mode dark:bg-dark-mode flex flex-col items-center">
      <div className="bg-transparent my-1 shadow-lg shadow-blue-800 dark:shadow-blue-500 border border-gray-500 max-w-md cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 rounded-lg">
        <img
          src={item.image}
          className="w-full h-[300px] object-fill rounded-t-lg"
          alt=""
        />
        <h3 className="text-3xl my-5 text-blue-400 dark:text-blue-200 font-burtons">
          {item.title}
        </h3>
        <h3 className="text-xl px-4 text-blue-100 dark:text-gray-100 leading-normal my-3 font-serif">
          Price: {item.price}
        </h3>
        <h3 className="text-lg px-4 text-blue-100 dark:text-gray-100 leading-normal my-3 font-serif">
          {item.description}
        </h3>
      </div>
      <div className="flex justify-center mt-10 items-center">
        <Link to="/">
          <button className="w-64 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Redirect to Home
          </button>
        </Link>
      </div>
    </section>
  );
};
