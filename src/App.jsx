import { useState } from "react";
import ArrayFilter from "./components/ArrayFilter";
import ArrayReduce from "./components/ArrayReduce";
import ArraySort from "./components/ArraySort";
import ArrayMap from "./components/ArrayMap";

function App() {
  const [componentToShow, setComponentToShow] = useState("filter");

  const arrayFilterHandler = () => {
    setComponentToShow("filter");
  };

  const arrayReduceHandler = () => {
    setComponentToShow("reduce");
  };

  const arraySortHandler = () => {
    setComponentToShow("sort");
  };

  const arrayMapHandler = () => {
    setComponentToShow("map");
  };

  return (
    <div className="App w-[50%] mx-auto py-5">
      <nav className="flex justify-center gap-5">
        <button
          onClick={arrayFilterHandler}
          className="relative inline-block text-lg group"
        >
          <a
            href="#_"
            class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
          >
            <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span class="relative text-white">Array Filter</span>
          </a>
        </button>

        <button
          onClick={arrayReduceHandler}
          className="relative inline-block text-lg group"
        >
          <a
            href="#_"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Array Reduce
            </span>
          </a>
        </button>

        <button
          onClick={arraySortHandler}
          className="relative inline-block text-lg group"
        >
          <a
            href="#_"
            class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
          >
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span class="relative text-white">Array Sort</span>
            </span>
          </a>
        </button>

        <button
          onClick={arrayMapHandler}
          className="relative inline-block text-lg group"
        >
          <a
            href="#_"
            class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
          >
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
              Array Map
            </span>
          </a>
        </button>
      </nav>

      <section className="py-5">
        {componentToShow === "filter" && <ArrayFilter />}
        {componentToShow === "reduce" && <ArrayReduce />}
        {componentToShow === "sort" && <ArraySort />}
        {componentToShow === "map" && <ArrayMap />}
      </section>
    </div>
  );
}

export default App;
