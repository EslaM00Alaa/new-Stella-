import React from 'react';

const Details = () => {
  return (
    <button
      dir="rtl"
      type="submit"
      className="relative z-10 flex items-center justify-center gap-2 px-4 py-2 mx-auto text-lg font-semibold text-gray-800 transition-all duration-300 border-2 border-gray-50 rounded-full bg-gray-50 shadow-xl overflow-hidden group backdrop-blur-md"
    >
      <span className="z-10 group-hover:text-white transition-colors duration-300">اعرف المزيد</span>
      <svg
        className="z-10 w-8 h-8 p-2 transition-transform duration-300 -rotate-45 border border-gray-700 rounded-full group-hover:-rotate-90 group-hover:border-none"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="transition duration-300 fill-[#0d375c] group-hover:fill-white"
        />
      </svg>
      <span className="absolute left-0 w-0 h-full transition-all duration-700 bg-[#0d375c] rounded-full group-hover:w-full -z-10" />
    </button>
  );
};

export default Details;
