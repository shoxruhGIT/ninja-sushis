
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Sushi = () => {
  const [sushi, setSushi] = useState([]);

  const useFetch = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    const data = await res.json();
    return data;
  };

  const datas = useFetch();

  useEffect(() => {
    datas.then((data) => setSushi(data.meals.slice(0, 8)));
  }, []);

  return (
    <div className="w-[1525px] flex flex-col m-auto mt-[60px] mb-[80px]">
      <div className="flex items-center justify-between">
        <h1 className="text-[48px] font-bold">Суши</h1>
        <Link className='w-[159px] flex items-center justify-center rounded-[12px] text-[16px] h-[48px] text-[#00CC2D] bg-white' href='/sushiItem'>Смотреть все</Link>
      </div>
      <div className="w-[1525px] relative m-auto gap-[8px] flex flex-wrap">
        {sushi &&
          sushi.map(({ strMeal, strMealThumb }) => (
            <div className="w-[375px] flex flex-col gap-[10px] items-left p-[10px] h-[596px] bg-white">
              <img className="w-[331px] ml-[10px]" src={strMealThumb} alt="" />
              <h1 className="text-[27px] font-bold">{strMeal.slice(0, 20)}</h1>
              <p className="flex flex-col gap-[10px]">
                <span className="text-[#FF6633]">Вес: 40г</span>
                Нори, рис, японский майонез, бальзамик, трюфельная сальса,
                кунжутное масло
              </p>
              <div className="flex items-center justify-between mt-[25px]">
                <h1 className="text-[40px] font-bold">
                  190 <span className="text-[#686870]">грн</span>
                </h1>
                <div className="flex items-center gap-[8px]">
                  <p className="text-[#FF6633] flex items-center justify-center w-[48px] h-[44px] bg-[#F5F5F7] rounded-[12px]">
                    <i class="fa-regular fa-heart"></i>
                  </p>
                  <p className="w-[73px] h-[44px] rounded-[12px] bg-[#CCF5D5] text-[#00CC2D] flex items-center justify-center">
                    <i class="fa-regular fa-plus cursor-pointer"></i>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sushi;
