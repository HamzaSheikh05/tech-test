import React from "react";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductsList = ({ api }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const url = `https://fakestoreapi.com/${api}`;
  console.log(url);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const asc = () => {
    let sorted = [...data];
    if (sorted.length > 0) {
      let result = sorted.sort((a, b) => a.title.localeCompare(b.title));
      setData(result);
      console.log(data);
    }
  };

  const desc = () => {
    let sorted = [...data];
    if (sorted.length > 0) {
      let result = sorted.sort((a, b) => b.title.localeCompare(a.title));
      setData(result);
      console.log(data);
    }
  };

  const filterMaxFive = () => {
    let sorted = data;
    if (sorted.length > 0) {
      let result = sorted.filter((item) => item.id <= 5);
      setData(result);
      console.log(result);
    }
  };

  const filterMaxTen = () => {
    let sorted = data;
    if (sorted.length > 0) {
      let result = sorted.filter((item) => item.id <= 10);
      setData(result);
      console.log(result);
    }
  };

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
        <div className="flex justify-around">
          <ul className="flex gap-2">
            <li>
              <button className="bg-blue-300 p-1" onClick={asc}>
                Ascending Order
              </button>
            </li>
            <li>
              <button className="bg-blue-300 p-1" onClick={desc}>
                Descending Order
              </button>
            </li>
            <li>
              <button className="bg-blue-300 p-1" onClick={fetchData}>
                Reset
              </button>
            </li>
            <li>
              <button className="bg-blue-300 p-1" onClick={filterMaxFive}>
                Filter Max 5
              </button>
            </li>
            <li>
              <button className="bg-blue-300 p-1" onClick={filterMaxTen}>
                Filter Max 10
              </button>
            </li>
          </ul>
          <form>
            <input
              type="search"
              name="src"
              placeholder="Search a Product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="flex justify-evenly flex-wrap gap-10 my-3 py-3 group">
          {data &&
            data
              .filter((item) => {
                if (search === "") {
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
