import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function NavBar() {
  const [name, setName] = useState("");
  const [isValue, setIsValue] = useState(false);

  const item = useSelector((state) => state.product);
  const navigate = useNavigate();

  const getUser = () => {
    try {
      const storedValue = localStorage.getItem("myObject");
      if (storedValue) {
        const { email, name } = JSON.parse(storedValue);
        if (email && name) {
          setIsValue(true);
          setName(name);
        }
      } else {
        navigate("/register");
      }
    } catch (error) {
      navigate("/register");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const logOut = () => {
    // localStorage.removeItem("myObject");
    setIsValue(false);
    navigate('/login')
  };
  useEffect(()=>{

  },[isValue])

  return (
    <>
      <div className="flex p-2">
        <div className="flex mx-14 gap-4 text-center">
          <img
            className="-m-1 w-9 h-9"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
          />
          <span>Foodio</span>
        </div>
        <div className="flex justify-around gap-10">
          <NavLink to="/" className="hover:underline hover:text-red-600">
            Home
          </NavLink>
          <NavLink to="/menu" className="hover:underline hover:text-red-600">
            Menu
          </NavLink>
          <NavLink to="/about" className="hover:underline hover:text-red-600">
            About Us
          </NavLink>
          <NavLink
            to="/orderOnline"
            className="hover:underline hover:text-red-600"
          >
            Order Online
          </NavLink>
          <NavLink
            to="/reservation"
            className="hover:underline hover:text-red-600"
          >
            Reservation
          </NavLink>
          <NavLink to="/contact" className="hover:underline hover:text-red-600">
            Contact Us
          </NavLink>
        </div>
        <div className="mx-11 flex gap-6">
          <div
            className="flex w-10 h-10 rounded-full bg-slate-200"
            onClick={() => {
              navigate("/orderOnline");
            }}
          >
            <div className="mt-3 ml-2 w-5 h-5">
              <ShoppingCart size={19} />
            </div>

            <div className="text-xs font-bold h-4 mt-2 text-red-500">
              {item.length}
            </div>
          </div>
          {isValue ? (
            <p className="w-64 font-mono text-sm flex items-center">
              Welcome, {name}!
              <button
                onClick={() => {
                  logOut();
                }}
                className="bg-slate-200 rounded-3xl font-mono text-sm p-2 ml-2 text-red-500"
              >
                Logout
              </button>
            </p>
          ) : (
            <NavLink
              to="/login"
              className="bg-red-500 text-center text-white rounded-lg py-1 px-2"
            >
              Log in
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
