import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <section className="bg-slate-700 dark:bg-black flex justify-center">
      <div className="max-w-sm my-10 border-4 border-gray-400 rounded-t-lg">
        <img
          className="rounded-t-lg w-full mb-5 h-80 object-fill"
          src={item.image}
          alt="movie-images"
        />
        <h5 className="text-3xl mb-3 underline font-medium tracking-tight font-burtons text-red-500 dark:text-blue-200">
          {item.title}
        </h5>

        <p className="mb-3 font-medium tracking-normal font-serif text-zinc-200 dark:text-gray-50">
          Price: {item.price}
        </p>

        <p className="mb-3 font-medium tracking-normal font-serif text-zinc-200 dark:text-gray-50">
          {item.description}
        </p>
      </div>
    </section>
  );
};
