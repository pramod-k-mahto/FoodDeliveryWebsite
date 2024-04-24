import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Footer from "./pages/Footer";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = (e) => {
    e.preventDefault();
    try {
      let storedValue = localStorage.getItem("myObject");
      storedValue = JSON.parse(storedValue);
      if (email && password) {
        if (email ===storedValue.email) {
          navigate("/");
        } else {
          alert("Please enter right email and password");
        }
      } else {
        alert("Please enter email and password");
      }
    } catch (a) {
      alert(" Please Register");
    }
  };

  return (
    <>
      <div className="flex flex-col p-36  ">
        <div className="m-auto flex shadow-2xl	shadow-slate-500 rounded-lg	 flex-col justify-center bg-white   w-72 h-72 p-5">
          <form>
            <label>Email* </label>
            <input
              className="p-2 border-2 mb-3 h-9 w-56 border-slate-300"
              type="text"
              placeholder="Please Enter your Email "
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Password* </label>
            <input
              className="p-2 border-2  h-9 w-56 border-slate-300"
              type="Password"
              placeholder=" Please Enter your Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="h-14 mb-2 px-5 mt-5 font-serif rounded-lg w-56 bg-red-500"
              type="submit"
              onClick={(e) => {
                loginHandler(e);
              }}
            >
              Login
            </button>
            <p className="text-sm text-center">
              New member?
              <button
                onClick={() => {
                  navigate("/register");
                }}
                className="text-green-500"
              >
                Register here
              </button>
            </p>
          </form>
        </div>
      </div>
      {/* <Footer /> */}

    </>
  );
}

export default Login;
