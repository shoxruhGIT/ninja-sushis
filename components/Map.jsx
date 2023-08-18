import React from "react";

const Map = () => {
  return (
    <div className="">
      <div className="w-full bg-white">
        <div className="w-[1525px] m-auto flex flex-col items-center justify-center text-center gap-[40px]">
          <h1 className="text-[48px] font-bold">
            Каждая кухня работает со своей зоной доставки, чтобы привезти еду
            максимально быстро
          </h1>
          <div className="flex gap-[40px]">
            <p>
              <span className="w-[30px] h-[30px] raounded-[500px] bg-[#7CB342]">
                {" "}
              </span>{" "}
              — Бесплатная доставка
            </p>
            <p>
              <span className="w-[30px] h-[30px] raounded-[500px] bg-[#FBC02D]">
                {" "}
              </span>{" "}
              — Платная доставка
            </p>
            <p>
              <span className="w-[30px] h-[30px] raounded-[500px] bg-[#FF5252]"></span>{" "}
              — Доставку не делаем
            </p>
          </div>
        </div>
      </div>
      <div className="map w-full h-[670px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48975.40190151141!2d66.2178246194456!3d39.8974692108569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d8d24a55f1689%3A0xc3aed1c96c6469bf!2zS2F0dGFxb-KAmHJn4oCYb24sIE9gemJla2lzdG9u!5e0!3m2!1suz!2s!4v1688449199731!5m2!1suz!2s"
          width="100%"
          height="670"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-[1525px] h-[514px] m-auto bg-white flex items-center rounded-[12px] justify-around mt-[100px]">
        <div className="">
          <h1 className="text-[54px] font-bold">
            Ниндзя - это семья. <br />
            Скачивайте наше <br />
            приложение
          </h1>
          <p className="mb-[40px]">
            Станьте ниндзя! Будьте в курсе всех новинок <br /> и никогда не
            оставаться голодным.
          </p>
          <div className="flex ">
            <button className="w-[108px] rounded-[8px] h-[37px] bg-black text-white">
              <i class="fa-brands fa-apple text-[20px]"></i> App Store
            </button>
            <button className=" w-[130px] flex items-center justify-center rounded-[8px] h-[37px] ml-[10px] bg-black text-white">
              <img src="/google.png" alt="" /> Google Play
            </button>
          </div>
        </div>
        <img src="https://ninjasushi.com.ua/img/phone-ua.png" alt="" />
      </div>
    </div>
  );
};

export default Map;
