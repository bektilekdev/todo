import React, { useState } from "react";
import uniqid from "uniqid";
const Crud = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const addList = () => {
    let newList = {
      id: uniqid(),
      title: value,
    };
    setTasks([...tasks, newList]);
  };

  return (
    <div className="py-20 bg-[#42ccc0]">
      <div className="container">
        <div className="crud flex item-center justify-center">
          <form>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>

          <button
            onClick={() => {
              addList();
              setValue("");
            }}
            class="relative flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span class="relative px-9  py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              add
            </span>
          </button>
        </div>

        <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {tasks.map((el) => (
            <li class="w-full text-center  px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              {el.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Crud;
