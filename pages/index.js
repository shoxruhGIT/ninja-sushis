import Mains from "../components/Main";
import Sushi from "../components/Sushi";
import React from "react";
import Map from "../components/Map";
const index = () => {
  return (
    <div className="min-w-full min-h-screen bg-[#F5F5F7]">
      <Mains />
      <Sushi />
      <Map />
    </div>
  );
};

export default index;
