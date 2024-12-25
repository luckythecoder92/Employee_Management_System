import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("The email is ", email);
    console.log("The passowrd is ", password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col border-2 border-emerald-600 rounded-xl p-20"
      >
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
          className="bg-transparent placeholder:text-gray-400 border-2  border-emerald-600 rounded-full px-8 py-4 outline-none text-lg"
          type="email"
          placeholder="Enter your email"
        />
        <input
        value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          className="bg-transparent placeholder:text-gray-400 border-2  border-emerald-600 rounded-full px-8 py-4 outline-none text-lg mt-5"
          type="password"
          placeholder="Enter password"
        />
        <button className="bg-emerald-600 p-4 mt-7  rounded-full text-lg  font-semibold w-full  ">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
