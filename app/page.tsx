import ServiceLink from "@/components/ServiceLink";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-[1000px] px-12 mx-auto">
        <h1 className="text-5xl text-white text-center mb-24">Our Services</h1>

        <ServiceLink />
      </div>
    </div>
  );
};

export default Home;
