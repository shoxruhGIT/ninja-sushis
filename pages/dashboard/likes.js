import React, { useEffect } from "react";
import Etap from "./etap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/useFetch";
import { usersFetched } from "../../store/reducer/redux";

const Likes = () => {
  const { request } = useHttp();
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    request("http://localhost:3001/users").then(
      (res) => res && dispatch(usersFetched(res))
    );
  }, []);

  const [currentUsers] = users.filter((el) => el.isLogin == true);
  return (
    <div className="w-[1525px] m-auto">
      <Etap />
      <div className="w-[1000px] h-[260px]  m-auto absolute top-[210px] right-[180px]">
        {/* {currentUsers?.likes.length > 0 ? (
          <div className="">
            
            {currentUsers.goods.map((item) => {
              <div className="w-[375px] flex flex-col gap-[10px] items-left p-[10px] h-[596px] bg-white">
                <h1>{item.strMeal}</h1>
              </div>;
            })}
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-[48px]">Избранные товары</h1>
            <div className="w-[1000px] bg-white rounded-[12px] h-[255px] flex gap-[20px] items-center">
              <img src="/likes.png" alt="likes" />
              <p className="flex flex-col text-[32px] font-medium">
                Вы еще ничего не добавили <br /> в избанное
                <span className="text-[#686870] text-[14px]">
                  Переходите в интересующую вас категорию <br /> и отмечайте
                  понравившиеся
                </span>
              </p>
            </div>
          </div>
        )} */}
        {currentUsers?.likes.map(item=> {
          <h1>{item.strMeal}</h1>
        })}
      </div>
    </div>
  );
};

export default Likes;

Likes.getLayout = function PageLayout(page) {
  return (
    <div>
      <Header />
      <Etap />
      {page}
      <Footer />
    </div>
  );
};
