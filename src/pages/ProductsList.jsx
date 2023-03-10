import React from "react";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";

export const ProductsList = ({ api }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [hidden, setHidden] = useState(true);
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
      <div className="text-center my-3 py-3">
        <h1 className="text-4xl text-blue-300 dark:text-blue-200 font-bold inline border-b-2 border-blue-400 dark:border-blue-300 font-burtons">
          Products Section
        </h1>
        <h3 className="py-4 text-xl text-blue-100 dark:text-gray-100 font-serif">
          All Products from API
        </h3>
      </div>

      <div className="flex flex-wrap items-center justify-center mx-auto">
        <div id="mobile-nav" className="flex xl:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            onClick={() => setHidden(!hidden)}
            aria-expanded="false"
            className="xl:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden xl:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-300 dark:text-blue-300"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-blue-100 placeholder:text-white border border-gray-300 rounded-lg bg-transparent dark:bg-dark-bg dark:border-blue-300 dark:placeholder-blue-100 dark:text-blue-100"
              placeholder="Search a Product"
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
              name="search"
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            onClick={() => setHidden(!hidden)}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${
            hidden ? "hidden" : ""
          } w-full xl:flex xl:w-auto xl:order-1`}
          id="navbar-links"
        >
          <div className="relative mt-3 xl:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              name="search"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
          </div>

          <ul className="flex flex-col p-4 mt-4 xl:flex-row gap-4 xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium">
            <li>
              <button className="bg-blue-300 p-1 rounded-lg w-48" onClick={asc}>
                Ascending Order
              </button>
            </li>
            <li>
              <button
                className="bg-blue-300 p-1 rounded-lg w-48"
                onClick={desc}
              >
                Descending Order
              </button>
            </li>
            <li>
              <button
                className="bg-blue-300 p-1 rounded-lg w-48"
                onClick={fetchData}
              >
                Reset
              </button>
            </li>
            <li>
              <button
                className="bg-blue-300 p-1 rounded-lg w-48"
                onClick={filterMaxFive}
              >
                Filter Max 5
              </button>
            </li>
            <li>
              <button
                className="bg-blue-300 p-1 rounded-lg w-48"
                onClick={filterMaxTen}
              >
                Filter Max 10
              </button>
            </li>
          </ul>
        </div>
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
    </section>
  );
};
