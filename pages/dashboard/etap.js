import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Etap = () => {
  const router = useRouter()
  return (
    <div className="w-[1525px] m-auto flex">
      <p
        onClick={() => router.back()}
        className="w-[93px] cursor-pointer h-[41px] rounded-[12px] flex items-center z-[9999] justify-center gap-[8px] bg-white absolute left-70px top-[110px] text-[#00CC2D]"
      >
        <i class="fa-solid fa-angle-left"></i>Назад
      </p>
      <div className="w-[250px] ">
        <div className="flex flex-col gap-[20px]">
          <Link
            href="/dashboard/history"
            className="font-semibold flex items-center gap-[15px]"
          >
            <img src="/history.png" alt="hhistory" />
            История заказов
          </Link>
          <Link
            href="/dashboard/likes"
            className="font-medium flex items-center gap-[15px]"
          >
            <img src="/heart.png" alt="heart" /> Избранные товары
          </Link>
          <Link
            href="/dashboard"
            className="font-medium flex items-center gap-[15px]"
          >
            <img src="/location.png" alt="location" /> Адрес доставки
          </Link>
          <Link
            href="/dashboard/tema"
            className="font-medium flex items-center gap-[15px]"
          >
            <img src="/brightson.png" alt="brighston" /> Тема сайта
          </Link>
          <div className="flex gap-[12px] w-[250px] h-[108px] rounded-[12px] bg-white flex items-center justify-center">
            <img className="w-[55px] h-[55px]" src="/avatar.png" alt="avatar" />
            <div className="text-left">
              <p className="font-medium">Ашот</p>
              <p className="text-[#9E9E9E]">Lifetv277@gmaIl.com</p>
              <p>+380976986848</p>
            </div>
          </div>
          <button onClick={signOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Etap;
