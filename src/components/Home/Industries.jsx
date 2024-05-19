import React, { useState } from "react";
import MainContent from "./MianContent";
import { Sidebar } from "./Sidebar";
import offer1 from "../../assets/offers/offer1.png";
import { industries } from "../../constants/index";

export default function Industries() {
  const [selectedItem, setSelectedItem] = useState({
    name: "E-Commerce",
    description:
      "Ecommerce has taken the world by boom with new entrants paving a way for themselves in the market every day and competing with established players. The Ecommerce industry is already a multi-billion dollar industry globally and is poised to grow leaps and bound in the coming future.",
    path: offer1,
  });

  const handleSelectItem = (item) => {
    setSelectedItem({
      name: item.name,
      description: item.description,
      path: item.path,
      icon: item.icon,
    });
  };

  return (
    <section className=" px-4 py-6 md:px-12 md:py-16">
      <div className="pb-10 w-full flex flex-col items-center ">
        <h1 className="pb-6  text-5xl font-bold text-center">
          <span className="text-red-700">INDUSTRIES</span> We Serve
        </h1>
        <p className=" text-lg font-semibold text-center pb-8 md:w-1/2">
          We are providing services for different industry verticals and each
          solution developed is highly customized to meet your business
          requirements.
        </p>
      </div>
      <div className="flex flex-col md:flex-row h-auto">
        <div>
          <Sidebar items={industries} onSelect={handleSelectItem} />
        </div>
        <div>
          <MainContent content={selectedItem} />
        </div>
      </div>
    </section>
  );
}
