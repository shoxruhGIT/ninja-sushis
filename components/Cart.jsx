import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../hooks/useFetch";
import { usersFetched } from "../store/reducer/redux";

const Cart = ({ setCart }) => {
  const { request } = useHttp();
  const dispatch = useDispatch();
  const [newUser, setUser] = useState({});
  const { users } = useSelector((state) => state);
  useEffect(() => {
    request("http://localhost:3001/users").then(
      (res) => res && dispatch(usersFetched(res))
    );
  }, []);
  useEffect(() => {
    request("http://localhost:3001/users").then(
      (res) => res && dispatch(usersFetched(res))
    );
  }, [newUser]);
  const [currentUser] = users.filter((item) => item.isLogin == true);
  const deleteGoods = () => {};
  return (
    <div className="cart w-full fixed z-[9997] flex items-center justify-end">
      <div className="w-[590px] p-[40px] flex flex-col items-center mt-[100px] mr-[100px]  h-[718px] rounded-[12px] bg-[#ffff]">
        <div className="flex justify-between w-[540px]">
          <h1 className="text-[28px] font-bold">Ваш заказ</h1>
          <button
            onClick={() => setCart(false)}
            className="w-[32px] text-[20px] h-[32px] rounded-[8px] bg-[#F5F5F5]"
          >
            X
          </button>
        </div>
        {currentUser.goods.length > 0 ? (
          <div className="relative p-0 flex flex-col gap-[10px]">
            {currentUser.goods.map((elem) => (
              <div className="flex w-[530px] h-[71px] bg-[#F5F5F7] rounded-[12px] items-center px-[20px] gap-[10px]">
                <button
                  onClick={() => {
                    const deleteGood = currentUser.goods.filter(
                      (item) => item.idMeal !== elem.idMeal
                    );

                    const newUser = {
                      ...currentUser,
                      goods: deleteGood,
                    };
                    setUser(newUser);
                    request(
                      `http://localhost:3001/users/${currentUser.id}`,
                      "PUT",
                      JSON.stringify(newUser)
                    );
                  }}
                  className="absolute w-[25px] h-[25px] left-[0] focus:bg-[#F44837] focus:text-white rounded-[8px] bg-white flex items-center justify-center"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <img
                  className="w-[58px] h-[47px] rounded-[8px]"
                  src={elem.strMealThumb}
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="w-[230px] tetx-[#1D1D1F] tetx-[16px] font-bold">
                    {elem.strMeal.slice(0, 23)}
                  </h1>
                  <p className="text-[14px] font-medium text-[#FF6633]">
                    Вес: 40г
                  </p>
                </div>
                <p>190 грн</p>
                <div className="flex gap-[10px] items-center">
                  <button
                    onClick={() => {
                      const DecGood = currentUser.goods.map((item) => {
                        if (item.idMeal === elem.idMeal) {
                          return {
                            ...item,
                            quantity: item.quantity > 0 ? item.quantity - 1:item.quantity,
                          };
                        } else {
                          return item;
                        }
                      });
                      setUser(DecGood);
                      const newUser = {
                        ...currentUser,
                        goods: DecGood,
                      };
                      request(
                        `http://localhost:3001/users/${currentUser.id}`,
                        "PUT",
                        JSON.stringify(newUser)
                      );
                    }}
                    className="w-[32px] h-[32px] bg-white rounded-[4px]"
                  >
                    −
                  </button>
                  <p>{elem.quantity}</p>
                  <button
                    onClick={() => {
                      const addGood = currentUser.goods.map((item) => {
                        if (item.idMeal === elem.idMeal) {
                          return {
                            ...item,
                            quantity: item.quantity + 1,
                          };
                        } else {
                          return item;
                        }
                      });
                      setUser(addGood);
                      const newUser = {
                        ...currentUser,
                        goods: addGood,
                      };
                      request(
                        `http://localhost:3001/users/${currentUser.id}`,
                        "PUT",
                        JSON.stringify(newUser)
                      );
                    }}
                    className="w-[32px] h-[32px] bg-white rounded-[4px]"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-[10px]">
            <div className="relative">
              <img className="relative" src="/bag.png" alt="" />
              <img
                className="absolute left-[17px] top-[150px]"
                src="/smile.png"
                alt=""
              />
            </div>
            <h1 className="text-[20px] font-medium">
              В вашей корзине пока пусто
            </h1>
            <p>
              Тут появятся товары, которые <br />{" "}
              <span className="ml-[60px]"> вы закажите</span>
            </p>
            <Link
              href="/"
              className="w-[280px] h-[56px] text-white bg-[#00CC2D] rounded-[12px] flex items-center justify-center"
            >
              Повторить прошлый заказ
            </Link>
            <button className="w-[280px] h-[56px] rounded-[12px] text-[#00CC2D] bg-[#F7F7F7] flex items-center justify-center">
              История заказов
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
