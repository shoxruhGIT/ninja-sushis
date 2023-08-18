import React from "react";

const Adress = () => {
  return (
    <div className="w-[1000px] h-[350px] flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h1 className="text-[48px] font-bold">Адрес доставки</h1>
        <p className="w-[186px] h-[56px] rounded-[12px] bg-[#00CC2D] text-white flex items-center justify-center">
          Новый адрес  <span className="text-[20px]">+</span>
        </p>
      </div>
      <div className="flex items-center justify-between w-[1000px] h-[255px] bg-white rounded-[12px]">
        <img src="/adress.png" alt="adress" />
        <div className="text-left">
          <h1 className="font-medium text-[32px]">У вас <br /> нет сохраненных адресов</h1>
          <p className="text-[#686870]">Переходите в интересующую вас категорию и сделайте свой первый заказ и адрес сохранится автоматически</p>
        </div>
      </div>
    </div>
  );
};

export default Adress;
