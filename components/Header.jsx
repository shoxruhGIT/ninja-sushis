import Link from "next/link";
import React, { useState } from "react";
import Cart from "./Cart";
import { signIn } from "next-auth/react";


const Header = () => {
  const [burger, setBurger] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <div className="min-w-ful h-[200px] bg-[#F5F5F7] ">
      
        {cart ? (
          <Cart cart={setCart}/>
        ) : null}
      
      <div className="w-[1525px] m-auto">
        <div className="w-[1525px] fixed z-[9998] pt-[16px] m-auto  h-[100px]">
          <div className="flex items-center rounded-[10px]  bg-white w-[1525px] h-[80px]">
            <div className="flex items-center">
              <img
                src="https://ninjasushi.com.ua/img/ninja-logo.svg"
                alt="ninja logo"
              />
              <select
                className="flex items-center bg-[#F5F5F7] w-[36px] h-[36]"
                name=""
                id=""
                disabled="disabled"
              ></select>
            </div>
            <div className="flex items-center ml-[70px] gap-[40px]">
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[16px]"
                  src="https://ninjasushi.com.ua/img/ua.svg"
                  alt="uk logo"
                />
                <select className="outline-none mr-1" name="" id="">
                  <option className="outline-none" value="Київ">
                    Київ
                  </option>
                  <option value="Дніпро">Дніпро</option>
                  <option value="Львів">Львів</option>
                </select>
                <p>RU</p>
              </div>

              <ul
                className={`${
                  burger ? "hidden" : "flex"
                } sm:flex items-center gap-[48px] m-auto`}
              >
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <li>
                  <a href="#">Доставка</a>
                </li>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
              </ul>
              <div className="">
                <p
                  className="flex sm:hidden"
                  onClick={() => setBurger(!burger)}
                >
                  <ion-icon name="menu"></ion-icon>
                </p>
              </div>
              <p className="flex items-center">
                <img
                  src="https://ninjasushi.com.ua/img/phone.svg"
                  alt="phone icon"
                />{" "}
                +38 097 699 34 38
              </p>
              <div className="">
                <ul className="flex items-center gap-[10px] text-xl">
                  <li className="flex items-center justify-center rounded-[10px] w-[50px] h-[50px] border">
                    <a href="#">
                      <i class="fa-sharp fa-regular fa-bell"></i>
                    </a>
                  </li>
                  <li className="flex items-center justify-center rounded-[10px] w-[50px] h-[50px] border">
                    <Link href="/dashboard/likes">
                      <i class="fa-regular fa-heart"></i>
                    </Link>
                  </li>
                  <li className="flex items-center justify-center rounded-[10px] w-[50px] h-[50px] border">
                    <Link onClick={signIn} href='/signup'>
                      <i class="fa-regular fa-user"></i>
                    </Link>
                  </li>
                  <li className="flex items-center justify-center rounded-[10px] w-[100px] h-[50px] border">
                    <button
                      className="flex items-center text-base"
                      href="#"
                      onClick={() => setCart(!cart)}
                    >
                      Корзина <i class="fa-solid fa-bag-shopping"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1525px] fixed z-[9996] pt-[100px] m-auto  h-[200px]">
          <div
            className={
              cart
                ? "flex z-[9996] justify-center rounded-[10px] w-[700px] h-[95px] bg-white m-auto mt-[16px]"
                : " flex justify-center rounded-[10px] w-[700px] h-[95px] bg-white m-auto mt-[16px]"
            }
          >
            <ul className="flex items-center gap-[64px]">
              <li>
                <a className="flex flex-col items-center" href="#">
                  <img
                    className="w-[40px]"
                    src="https://ninjasushi.com.ua/img/roll.svg"
                    alt=""
                  />
                  Роллы
                </a>
              </li>
              <li>
                <a className="flex flex-col items-center" href="#">
                  <img
                    className="w-[40px]"
                    src="https://ninjasushi.com.ua/img/sushi.svg"
                    alt=""
                  />
                  Суши
                </a>
              </li>
              <li>
                <a className="flex flex-col items-center" href="#">
                  <img
                    className="w-[40px]"
                    src="https://ninjasushi.com.ua/img/set.svg"
                    alt=""
                  />
                  Сеты
                </a>
              </li>
              <li>
                <a className="flex flex-col items-center" href="#">
                  <img
                    className="w-[40px]"
                    src="https://ninjasushi.com.ua/img/burr.svg"
                    alt=""
                  />
                  Боулы
                </a>
              </li>
              <li>
                <a className="flex flex-col items-center" href="#">
                  <img
                    className="w-[40px]"
                    src="https://ninjasushi.com.ua/img/drinks.svg"
                    alt=""
                  />
                  Напитки
                </a>
              </li>
              <li>
                <a className="flex flex-col items-center" href="#">
                  <img
                    className="w-[40px]"
                    src="https://ninjasushi.com.ua/img/sia.svg?ver=1.01"
                    alt=""
                  />
                  Соусы
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
