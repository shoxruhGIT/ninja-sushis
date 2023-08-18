import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useHttp from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { mealLoaded, mealLoading, usersFetched } from "../store/reducer/redux";

const SushiItem = () => {
  const router = useRouter();
  const { request } = useHttp();
  const dispatch = useDispatch();
  const [good, setGood] = useState({});
  const { data, users } = useSelector((state) => state);
  const useFetch = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    const data = await res.json();
    return data;
  };

  const datas = useFetch();
  useEffect(() => {
    dispatch(mealLoading());
    datas.then((data) => dispatch(mealLoaded(data.meals)));
  }, []);

  const sushiFilter = [
    { id: 1, router: "/all", name: "Все", w: "w-[61px]" },
    { id: 2, router: "/classic", name: "Классические", w: "145px" },
    { id: 3, router: "/maki", name: "Маки", w: "74px" },
    { id: 4, router: "/dragon", name: "Драконы", w: "104px" },
    { id: 5, router: "/zapechani", name: "Запеченные", w: "130px" },
    { id: 6, router: "/felikse", name: "Феликсы", w: "104px" },
    { id: 7, router: "/sladki", name: "Сладкие", w: "101px" },
  ];
  useEffect(() => {
    request("http://localhost:3001/users").then(
      (res) => res && dispatch(usersFetched(res))
    );
  }, []);
  useEffect(() => {
    request("http://localhost:3001/users").then(
      (res) => res && dispatch(usersFetched(res))
    );
  }, [good]);

  const newOrders = (idMeal, strMeal, strMealThumb) => {
    const [currentUser] = users.filter((el) => el.isLogin == true);
    const findIndex = currentUser.goods.filter(
      (item) => item.idMeal === idMeal
    );
    console.log(findIndex.length);
    if (findIndex.length == 0) {
      const newGoods = {
        idMeal,
        strMeal,
        strMealThumb,
        quantity: 1,
      };
      setGood(newGoods);
      const newUser = {
        ...currentUser,
        goods: [...currentUser.goods, newGoods],
      };

      request(
        `http://localhost:3001/users/${currentUser.id}`,
        "PUT",
        JSON.stringify(newUser)
      );
    } else {
      const meals = currentUser.goods.map((elem) => {
        if (elem.idMeal === idMeal) {
          return {
            ...elem,
            quantity: elem.quantity + 1,
          };
        } else {
          return elem;
        }
      });
      const newUser = {
        ...currentUser,
        goods: meals,
      };
      setGood(meals);
      request(
        `http://localhost:3001/users/${currentUser.id}`,
        "PUT",
        JSON.stringify(newUser)
      );
    }
  };
  const likesGoods = (idMeal,strMeal,strMealThumb) => {
    const [currentUser] = users.filter((el) => el.isLogin == true);
    const newGoods = {
      idMeal,
      strMeal,
      strMealThumb,
    };
    console.log(newGoods);
    setGood(newGoods)
    const newUser = {
      ...currentUser,
      likes: [...currentUser.likes, newGoods],
    };
    console.log(newUser);

    request(
      `http://localhost:3001/users/${currentUser.id}`,
      "PUT",
      JSON.stringify(newUser)
    );
  };

  return (
    <div className="w-full bg-[#F5F5F7]">
      <div className="w-[1525px] flex flex-col m-auto">
        <div className="flex flex-col">
          <p
            onClick={() => router.back()}
            className="w-[93px] cursor-pointer h-[41px] rounded-[12px] flex items-center z-[9999] justify-center gap-[8px] bg-white absolute left-70px top-[110px] text-[#00CC2D]"
          >
            <i class="fa-solid fa-angle-left"></i>Назад
          </p>
          <h1 className="text-[48px] font-bold">Суши</h1>
          <div className="flex gap-[20px]">
            {sushiFilter.map(({ router, name, w }) => (
              <Link className={w} href={router}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-[1525px] m-auto gap-[8px] flex flex-wrap">
          {data &&
            data.map(({ idMeal, strMeal, strMealThumb }) => (
              <div className="w-[375px] flex flex-col gap-[10px] items-left p-[10px] h-[596px] bg-white">
                <img
                  className="w-[331px] ml-[10px]"
                  src={strMealThumb}
                  alt=""
                />
                <h1 className="text-[27px] font-bold">
                  {strMeal.slice(0, 20)}
                </h1>
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
                    <button
                      onClick={()=> likesGoods(idMeal,strMeal,strMealThumb)}
                      className="text-[#FF6633] flex items-center justify-center w-[48px] h-[44px] bg-[#F5F5F7] rounded-[12px]"
                    >
                      <i class="fa-regular fa-heart"></i>
                    </button>
                    <p className="w-[73px] h-[44px] rounded-[12px] bg-[#CCF5D5] text-[#00CC2D] flex items-center justify-center">
                      <i
                        class="fa-regular fa-plus cursor-pointer"
                        onClick={() => {
                          newOrders(idMeal, strMeal, strMealThumb);
                        }}
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SushiItem;
