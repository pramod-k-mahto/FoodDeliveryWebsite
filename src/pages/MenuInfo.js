import { useEffect, useState } from "react";
import { Star, ChevronRight, ChevronLeft,Dot } from "lucide-react";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../reduxstore/Action/action";
import { useNavigate } from "react-router-dom";

import { add, remove } from "../reduxstore/Action/action";
function MenuInfo() {
  const navigate = useNavigate();

  const [foodItem, setFoodItem] = useState([]);
  const [page, setPage] = useState(0);
  const item = useSelector((state) => {
    return state.changeCartItem;
  });

  const pd = useSelector((state) => {
    return state.product;
  });
  // console.log(pd)
  const dispatch = useDispatch();

  const getFood = async () => {
    let foods = await fetch("https://dummyjson.com/recipes");
    foods = await foods.json();
    setFoodItem(foods.recipes);
  };
  const foodType = async (type) => {
    let foods = await fetch(`https://dummyjson.com/recipes/meal-type/${type}`);
    foods = await foods.json();
    setFoodItem(foods.recipes);
  };
  const pagination = async () => {
    let foods = await fetch(
      `https://dummyjson.com/recipes?limit=6&skip=${page}`
    );
    foods = await foods.json();
    setFoodItem(foods.recipes);
    // console.log(foods)
  };

  useEffect(() => {
    pagination();
  }, []);
  // console.log(foodItem);
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      {/* Our Popular Food */}
      <div>
        <div>
          <div className="text-center text-3xl font-bold font-serif mb-10">
            <h1>Our Popular Food</h1>
          </div>
          <div className=" flex justify-center gap-24  ">
            {/* Catagorigies */}
            <button
              onClick={() => {
                getFood();
                handleButtonClick(1);
              }}
              className={`${
                activeButton === 1 ? "bg-slate-700" : "bg-red-500 text-white"
              }  bg-red-500 text-white  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center`}
            >
              All Catagory
            </button>

            <button
              onClick={() => {
                foodType("dinner");
                handleButtonClick(2);
              }}
              className={`${
                activeButton === 2 ? "bg-slate-700" : "bg-red-500 text-white"
              } active:bg-black bg-red-500 text-white  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center`}
            >
              Dinner
            </button>
            <button
              onClick={() => {
                foodType("lunch");
                handleButtonClick(3);
              }}
              className={`${
                activeButton === 3 ? "bg-slate-700" : "bg-red-500 text-white"
              } active:bg-black bg-red-500 text-white  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center`}
            >
              Lunch
            </button>

            <button
              onClick={() => {
                foodType("dessert");
                handleButtonClick(4);
              }}
              className={`${
                activeButton === 4 ? "bg-slate-700" : "bg-red-500 text-white"
              } active:bg-black bg-red-500 text-white  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center`}
            >
              Dessert
            </button>

            <button
              onClick={() => {
                foodType("Beverage");
                handleButtonClick(5);
              }}
              className={`${
                activeButton === 5 ? "bg-slate-700" : "bg-red-500 text-white"
              } active:bg-black bg-red-500 text-white  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center`}
            >
              Drink
            </button>
          </div>

          {/* Item */}

          <div className="flex flex-wrap w-[90vw] m-auto">
            {/* 0 */}
            {foodItem && foodItem.length > 0 ? (
              foodItem.map((item, index) => {
                let rateItem = Math.floor(item.rating);
                return (
                  <div
                    key={index}
                    className=" bg-slate-200  w-72 m-10 flex flex-col justify-center text-center p-5 "
                  >
                    <div>
                      <img
                        className=" m-auto w-44 h-44 mb-5 rounded-md  "
                        src={item.image}
                        alt="Food"
                      />
                    </div>
                    <div className="mb-5">
                      <h1 className="font-bold">{item.name}</h1>
                      <p className=" text-xs justify-start">
                        {item.ingredients}
                      </p>
                    </div>
                    <div className="flex justify-center text-sm">
                      <div className="flex gap-1">
                        {[...Array(rateItem)].map((_, index) => (
                          <span key={index}>
                            <Star size={15} />
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span>Rs.{item.caloriesPerServing}</span>

                      <button
                        onClick={() => {
                          const id = item.id;
                          dispatch(add(id));
                          navigate("/orderOnline");
                        }}
                        className=" bg-red-500 text-white ml-5 hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className=" shadow rounded-md m-10 p-4 max-w-sm w-80 mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-400 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-400 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 0 end */}
          </div>

          {/* ALL Item End */}
          {/* pagination */}

          <div className="flex justify-center text-center  ">
            <button
              onClick={() => {
                if (page > 0) {
                  setPage(page - 6);
                  pagination();
                }
              }}
              // className="border-2 border-red-500 "
            >
              <ChevronLeft />
            </button>
            <span className="border-box rounded px-2 pt-1 mx-1 bg-black text-white text-[10px] ">
              1
            </span>
            <span className="border-box rounded px-2 pt-1 mx-1 bg-black text-white text-[10px]">
              2
            </span>
            <span className="border-box rounded px-2 pt-1 mx-1 bg-black text-white text-[10px]">
              3
            </span>
            <span className="flex border-box rounded  mx-1 bg-black text-white text-[10px] text-center">
              <Dot/>
              <Dot/>
              <Dot/>

            </span>
            <button
              onClick={() => {
                if (page <= 30) {
                  setPage(page + 6);
                  pagination();
                }
              }}
              // className=" text-white active: bg-black active:text-white"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}

    </>
  );
}

export default MenuInfo;
