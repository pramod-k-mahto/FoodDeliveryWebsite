import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    if (name && email && password) {
      const myObject = { email: email, name: name,password:password };
      localStorage.setItem("myObject", JSON.stringify(myObject));
      navigate("/login");
    }
    else{
      alert("Fill all the field")
    }
  };
  return (
    <>
      <div className="flex flex-col p-36 overflow-hidden  ">
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="bg-slate-800 text-white w-20 h-10 rounded-lg"
        >
          Go Back
        </button>
        <div className="m-auto flex shadow-2xl	shadow-slate-500 rounded-lg	 flex-col justify-center bg-white   w-72 h-72 p-5">
          <form action="#">
            <label>Full Name</label>
            <input
              className=" p-2  border-2 mb-3 h-9 w-56 border-slate-300"
              type="text"
              placeholder="Please your Full Name "
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
              Register
            </button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}

    </>
  );
}

export default Register;
