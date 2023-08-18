import React, { useEffect, useState } from "react";
import Link from "next/link";
import useFetch from "../hooks/useFetch";
import { useRouter } from "next/router";
const SignIn = () => {
  const { request } = useFetch();
  const route = useRouter()
  const [users, setUsers] = useState([]);
  const [{ username, email, password }, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleValue = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  useEffect(() => {
    request("http://localhost:3001/users")
      .then((data) => setUsers(data));
  },[]);
  console.log(users);
  const login = (e) => {
    e.preventDefault();
    const findItem = users.findIndex(
      (item) => item.email === email && item.password === password
    );
    if (findItem > 0) {
      return route.push("/dashboard")
    } else {
      alert("no email")
    }
    console.log(findItem);
  };

  return (
    <form
      onSubmit={login}
      className="w-full z-[9999] absolute h-screen top-0 bg-[#1c1c1c] flex items-center justify-center"
    >
      <div className="w-[460px] h-[550px] rounded-12px p-[24px]  flex flex-col gap-[20px]">
        <h1 className="text-[32px] font-bold text-white">Входъ</h1>
        <Link
          href="/"
          className="absolute text-[20px] top-[100px] right-[100px] text-white"
        >
          X
        </Link>
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          className="w-[400px] h-[50px] rounded-[8px] p-[10px] outline-green-800 outline-2 "
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          name="email"
          onChange={handleValue}
        />
        <label htmlFor="password" className="text-white">
          Password
        </label>
        <input
          className="w-[400px] h-[50px] rounded-[8px] p-[10px] outline-green-800 outline-2"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          name="password"
          onChange={handleValue}
        />
        <button className="w-[400px] h-[56px] rounded-[8px]  bg-[#00CC2D] text-white">
          Входъ
        </button>
        <p className="text-white text-center">
          У тебя нет есть аккаунт?{" "}
          <Link className="text-[#00CC2D]" href="/signup">
            Авторизация
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignIn;
