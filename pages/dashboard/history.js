import Header from "../../components/Header";
import React from "react";
import Etap from "./etap";
import Footer from "../../components/Footer";

const History = () => {
  return (
    
    <div className="w-[1525px] m-auto">
      <Etap/>
      <div className="w-[1000px] h-[260px]  m-auto absolute top-[210px] right-[180px]">
        <h1 className="font-bold text-[48px]">История заказов</h1>
        <div className="w-[1000px] bg-white rounded-[12px] h-[255px] flex gap-[20px] items-center">
          <img src="/list.png" alt="history" />
          <p className="flex flex-col text-[32px] font-medium">
            У вас нет заказов{" "}
            <span className="text-[#686870] text-[14px]">
              Переходите в интересующую вас категорию <br /> и сделайте свой первый
              заказ
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;

History.getLayout = function PageLayout(page) {
  return (
    <div>
      <Header />
      <Etap />
      {page}
      <Footer />
    </div>
  );
};
