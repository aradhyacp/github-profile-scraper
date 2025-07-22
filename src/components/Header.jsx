import React, { useState } from "react";

const Header = ({setUserName}) => {
    const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log("Search submitted:", inputValue);
    setUserName(inputValue)
  };
  return (
    <div className="flex bg-white px-10 py-4 border-b-2 border-[#f4ede7] flex-row items-center justify-between sticky top-0">
      <div className="flex gap-3">
        <div className="size-6">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="text-2xl font-bold leading-tight">Git Explorer</div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-row gap-10"
      >
        <input
          type="text"
          placeholder="Enter Username here"
          value={inputValue}
          onChange={(e)=>
            setInputValue(e.target.value)
          }
          className="px-4 py-2 rounded-md focus:outline-none border-2 border-[#f4ede7] focus:border-gray-400 focus:border-2"
        />
        <button className="bg-[#f4ede7] font-bold cursor-pointer rounded-lg p-3 hover:bg-[#f38524] hover:text-white" type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Header;
