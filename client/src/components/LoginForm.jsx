import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

function LoginForm() {
  const BACKURL = "http://localhost:8000";
  const [reg, setReg] = useState(false);

  const { storeTokenInLS, storeTokenInLSt } = useAuth();

  // SignUp
  const [user, setUser] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACKURL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        navigate("/");
        alert("Sign Up successful");

        storeTokenInLSt(res_data.token);
        storeTokenInLS(res_data.token);

        setUser({
          email: "",
          phone: "",
          password: "",
        });
      } else {
        alert(res_data.extraDetails);
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  // LogIn
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleIn = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleSub = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACKURL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });

      const resp_data = await response.json();

      if (response.ok) {
        storeTokenInLS(resp_data.token);

        setUserLogin({
          email: "",
          password: "",
        });

        // window.location.href = "/";
        // window.onload = function () {
        //   alert("Logged in successfully");
        // };
        navigate("/");
        alert("Login successful");
      } else {
        console.log(resp_data.extraDetails);
      }
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <div className="flex bg-[url('./images/bg-we-min.png')] bg-cover bg-no-repeat h-screen justify-center items-center gap-2">
      <div className="w-full max-w-lg bg-gray-200 rounded-2xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          {reg ? "Log In" : "Sign Up"}
        </h2>
        <marquee className="mb-4 text-xl text-teal-700">
          Login or Sign Up to continue
        </marquee>
        {!reg ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-gray-700">
                Email
              </label>
              <input
                className="w-full h-12 px-4 py-2 rounded-xl bg-gray-200 shadow-inner border-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                type="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 text-gray-700">
                Phone
              </label>
              <input
                className="w-full h-12 px-4 py-2 rounded-xl bg-gray-200 shadow-inner border-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                type="number"
                name="phone"
                value={user.phone}
                onChange={handleInput}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-gray-700">
                Password
              </label>
              <input
                className="w-full h-12 px-4 py-2 rounded-xl bg-gray-200 shadow-inner border-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-teal-700 text-white rounded-xl shadow-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Sign Up
            </button>
            <h2 className="text-center">or</h2>
            <h1
              className="text-center cursor-pointer"
              onClick={() => {
                setReg(!reg);
              }}
            >
              Login ?
            </h1>
          </form>
        ) : (
          <form onSubmit={handleSub} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-gray-700">
                Email
              </label>
              <input
                className="w-full h-12 px-4 py-2 rounded-xl bg-gray-200 shadow-inner border-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                type="email"
                name="email"
                value={userLogin.email}
                onChange={handleIn}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-gray-700">
                Password
              </label>
              <input
                className="w-full h-12 px-4 py-2 rounded-xl bg-gray-200 shadow-inner border-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                type="password"
                name="password"
                value={userLogin.password}
                onChange={handleIn}
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-teal-700 text-white rounded-xl shadow-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Login
            </button>
            <h2 className="text-center">or</h2>
            <h1
              className="text-center cursor-pointer "
              onClick={() => {
                setReg(!reg);
              }}
            >
              Signup ?
            </h1>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
