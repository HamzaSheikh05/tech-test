import React from "react";
import { ProductCard } from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

export const ProductsList = () => {
  const [search, setSearch] = useState("");
  const { data } = useFetch();
  return (
    <section className="p-10 bg-light-mode dark:bg-dark-mode">
      <div className="flex justify-center flex-col">
        <div className="text-center my-3 py-3">
          <h1 className="text-4xl text-blue-300 dark:text-blue-200 font-bold inline border-b-2 border-blue-400 dark:border-blue-300 font-burtons">
            Products Section
          </h1>
          <h3 className="py-4 text-xl text-blue-100 dark:text-gray-100 font-serif">
            All Products from API
          </h3>
        </div>

        <input
          type="search"
          name="src"
          placeholder="Search a Product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex justify-evenly flex-wrap gap-10 my-3 py-3 group">
          {data &&
            data
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, i) => <ProductCard key={i} json={item} />)}
        </div>
      </div>
    </section>
  );
};
