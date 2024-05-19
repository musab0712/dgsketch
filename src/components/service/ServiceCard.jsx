import React from "react";

export default function ServiceCard({ item }) {
  return (
    <div className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <img src={item.img} className=" w-full h-40 rounded-lg" />
      <div className="px-4 my-6 text-center">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm text-gray-400">{item.discription}</p>
        <button
          type="button"
          className="px-6 py-2 mt-4 rounded-full text-white text-sm tracking-wider font-semibold border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
        >
          <a href={item.link}>Read More</a>
        </button>
      </div>
    </div>
  );
}