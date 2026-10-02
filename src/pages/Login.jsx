import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center animate-fadeIn">
      <div className="relative flex flex-col gap-4 m-auto items-start p-10 min-w-[340px] sm:min-w-96 rounded-3xl text-zinc-600 text-sm glass shadow-2xl">
        <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl -z-10 blur opacity-20"></div>

        <p className="text-3xl font-bold">
          {state === "Sign Up" ? "Create" : "Welcome Back"}
          <span className="gradient-text">
            {" "}
            {state === "Sign Up" ? "Account" : "Login"}
          </span>
        </p>
        <p className="text-gray-500">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p className="font-medium">Full Name</p>
            <input
              className="border border-indigo-100 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none rounded-xl w-full p-3 mt-1 bg-white/80 transition-all"
              type="text"
              onChange={(e) => setName(e.target.name)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p className="font-medium">Email</p>
          <input
            className="border border-indigo-100 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none rounded-xl w-full p-3 mt-1 bg-white/80 transition-all"
            type="email"
            onChange={(e) => setEmail(e.target.name)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p className="font-medium">Password</p>
          <input
            className="border border-indigo-100 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none rounded-xl w-full p-3 mt-1 bg-white/80 transition-all"
            type="password"
            onChange={(e) => setPassword(e.target.name)}
            value={password}
            required
          />
        </div>

        <button className="gradient-btn text-white w-full py-3 rounded-xl text-base font-medium shadow-lg">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p className="text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="gradient-text font-semibold cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-gray-500">
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="gradient-text font-semibold cursor-pointer hover:underline"
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
