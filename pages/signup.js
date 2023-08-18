import React, { useState } from "react";
import Link from "next/link";
import { v4 } from "uuid";
import useFetch from "../hooks/useFetch";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import { useSession, signIn, signOut } from "next-auth/react";

// const SignUp = () => {
//   const [{ username, email, password }, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const { request } = useFetch();
//   const route = useRouter();

//   const registar = (e) => {
//     e.preventDefault();
//     const newUser = {
//       id: v4(),
//       username,
//       email,
//       password,
//       goods: [],
//       likes: [],
//     };
//     <Loading />;
//     request(
//       "http://localhost:3001/users",
//       "POST",
//       JSON.stringify(newUser)
//     ).then((res) => setForm({ username: "", email: "", password: "" }));
//     return route.push("/dashboard");
//   };
//   const handleValue = (e) => {
//     setForm((prev) => {
//       return {
//         ...prev,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };
//   // const { data: session } = useSession();

//   return (
//     <form
//       onSubmit={registar}
//       className="w-full z-[9999] absolute h-screen top-0 bg-[#1c1c1c] flex items-center justify-center"
//     >
//       <div className="w-[460px] h-[516px] rounded-12px p-[24px]  flex flex-col gap-[20px]">
//         <h1 className="text-[32px] font-bold text-white">Авторизация</h1>
//         <Link
//           href="/"
//           className="absolute text-[20px] top-[100px] right-[100px] text-white"
//         >
//           X
//         </Link>
//         <label htmlFor="name" className="text-white">
//           Username
//         </label>
//         <input
//           className="w-[400px] h-[50px] rounded-[8px] p-[10px] outline-green-800 outline-2"
//           id="name"
//           type="username"
//           placeholder="Enter your username"
//           value={username}
//           name="username"
//           onChange={handleValue}
//         />
//         <label htmlFor="email" className="text-white">
//           Email
//         </label>
//         <input
//           className="w-[400px] h-[50px] rounded-[8px] p-[10px] outline-green-800 outline-2 "
//           id="email"
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           name="email"
//           onChange={handleValue}
//         />
//         <label htmlFor="password" className="text-white">
//           Password
//         </label>
//         <input
//           className="w-[400px] h-[50px] rounded-[8px] p-[10px] outline-green-800 outline-2"
//           id="password"
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           name="password"
//           onChange={handleValue}
//         />
//         <button className="w-[400px] h-[56px] rounded-[8px]  bg-[#00CC2D] text-white">
//           Oтправить
//         </button>
//         <p className="text-white text-center">
//           У тебя есть аккаунт?{" "}
//           <Link className="text-[#00CC2D]" href="/signin">
//             Входъ
//           </Link>
//         </p>
//       </div>
//     </form>
//   );
// };
// export default SignUp;

const SignUp = () => {
  const { data: session, status } = useSession();
  const [{ username, email, password }, setForm] = useState("");
  const {push} = useRouter()

  if (session === "loading") return <h1>Sabr...</h1>;

  if (session) {
    setTimeout(() => {
      push("/dashboard");
    }, 100);

    return <h1>You checked</h1>;
  }
  const handleValue = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleOuthSignUp=(provider)=> () => signIn(provider)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!email) return false

    signIn("email", {email, redirect: false})
  }

  return (
    <form onSubmit={handleSubmit} className="w-full z-[9999] absolute h-screen top-0 bg-[#1c1c1c] flex items-center justify-center">
      <div className="w-[460px] h-[516px] rounded-12px p-[24px]  flex flex-col gap-[20px]">
        <h1 className="text-[32px] font-bold text-white">Авторизация</h1>
        <Link
          href="/"
          className="absolute text-[20px] top-[100px] right-[100px] text-white"
        >
          X
        </Link>
        <label htmlFor="name" className="text-white">
          Username
        </label>
        <input
          className="w-[400px] h-[50px] rounded-[8px] p-[10px] outline-green-800 outline-2"
          id="name"
          type="username"
          placeholder="Enter your username"
          value={username}
          name="username"
          onChange={handleValue}
        />
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
          Oтправить
        </button>
        <p className="text-white text-center">
          У тебя есть аккаунт?{" "}
          <Link className="text-[#00CC2D]" href="/signin">
            Входъ
          </Link>
        </p>
      </div>
      <button className="text-white" onClick={handleOuthSignUp("google")}>Google</button>
    </form>
  );
};

export default SignUp;
