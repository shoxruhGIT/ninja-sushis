import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[370] bg-white mt-[50px]">
      <div className="w-[1525px] m-auto py-[40px] flex flex-col gap-[60px]">
        <div className="flex items-top justify-between">
          <div className="flex flex-col gap-[20px]">
            <img
              className="w-[300px]"
              src="https://ninjasushi.com.ua/img/ninja-logo.svg"
              alt=""
            />
            <div className="flex gap-[10px]">
              <button className="w-[108px] rounded-[8px] h-[37px] bg-black text-white">
                <i class="fa-brands fa-apple text-[20px]"></i> App Store
              </button>
              <button className=" w-[130px] flex items-center justify-center rounded-[8px] h-[37px] bg-black text-white">
               <img src="/google.png" alt="" /> Google Play
              </button>
            </div>
            <p>© Ninja Sushi. All rights reserved.</p>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col gap-[8px]">
              <h1 className="text-[#686870]">Навигация:</h1>
              <li>
                <a href="">Главная</a>
              </li>
              <li>
                <a href="">Меню</a>
              </li>
              <li>
                <a href="">Доставка</a>
              </li>
              <li>
                <a href="">Вакансии</a>
              </li>
              <li>
                <a href="">Новости</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col gap-[8px]">
              <h1 className="text-[#686870]">Оформить заказ:</h1>
              <li>+38 (067) 436 61 27</li>
              <li>+38 (066) 031 76 30</li>
              <li>+38 (093) 924 98 28</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col gap-[8px]">
              <h1 className="text-[#686870]">Время работы:</h1>
              <li>с 11:00 до 22:45</li>
              <li>с 11:00 до 22:45</li>
              <li className="text-[#686870]">Ночная доставка</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[#686870]">Мы в соц. сетях:</p>
            <div className="flex gap-[8px]">
              <img className="" src="/facebook.png" alt="" />
              <img className="w-[26px]" src="/insta.png" alt="" />
            </div>
            <button className="w-[174px] h-[44px] rounded-[12px] outline-none text-[#039BE5] bg-[#F5F5F7] flex items-center justify-center gap-[5px]">
              <img className="" src="/tg.png" alt="" /> Техподдержка
            </button>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h1 className="font-bold text-[40px]">#Ninja Sushi</h1>
            <p className="text-[#9E9E9E]">
              Ninja Sushi в фотографиях <br /> наших клиентов
            </p>
            <button className="w-[246px] h-[55px] rounded-[12px] bg-[#F5F5F7] text-[#00CC2D]">
              Перейти в instagram
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Политика конфиденциальности</p>

          <p className="flex gap-[15px] items-center">
            <img
              className="w-[40px]"
              src="https://ninjasushi.com.ua/img/mc.svg"
              alt=""
            />
            <img
              className="w-[40px]"
              src="https://ninjasushi.com.ua/img/visa.svg"
              alt=""
            />
            <img
              className="w-[40px]"
              src="https://ninjasushi.com.ua/img/privat.svg"
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
