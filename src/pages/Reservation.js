import NavBar from "./NavBar";
import { useState } from "react";

import {
  X,
  Calendar,
  Clock,
  User,
  SquareCheckBig,
  SquarePen,
  CalendarCheck,
} from "lucide-react";
import food1 from "../image/food1.jpg";
function Reservation() {
  const [enterDetail, setEnterDetail] = useState(false);
  const [reservationConform, setReservationConform] = useState(false);
  const [reservationCancel, setReservationCancel] = useState(false);

  const enterDeatailFunc = () => {
    setEnterDetail(!enterDetail);
  };

  const reservationConformfunc = () => {
    setEnterDetail(false);
    setReservationConform(!reservationConform);
  };
  const reservationCancelfunc = () => {
    setReservationConform(false);
    setReservationCancel(!reservationCancel);
  };

  return (
    <>
      <div>
        {/* <EnterDetail/> */}

        <NavBar />
        <div className="flex justify-center">
          <div className="flex justify-center w-[70vw] m-16  ">
            <div className="w-72 h-80 mr-10 rounded-xl">
              <img className="w-72 h-80 rounded-xl" src={food1} alt="" />
            </div>

            <div className="w-72  ">
              <h1 className="text-3xl font-bold ">Book A Table </h1>
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Date"
                  className="border-2 rounded-xl pl-5 h-10"
                />
              </div>
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Time"
                  className="border-2 rounded-xl pl-5  h-10"
                />
              </div>
              <div className="my-5">
                <input
                  type="number"
                  placeholder="Party size"
                  className="border-2 rounded-xl pl-5  h-10"
                />
              </div>

              <button
                onClick={() => {
                  enterDeatailFunc();
                }}
                className=" bg-red-500 text-white w-52  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {enterDetail ? (
        <div className="  w-[98vw] h-[184%] -top-20 bg-opacity-30 backdrop-blur-sm absolute  ">
          <div className="p-10">
            <div className="w-[50vw]  m-auto   bg-white rounded  ">
              <div className="text-center font-bold text-xl  clear-both px-5 mt-10">
                <div className=" text-4xl w-10 float-right clear-both ">
                  <button
                    onClick={() => {
                      enterDeatailFunc();
                    }}
                  >
                    <X />
                  </button>
                </div>
                <h1>Reservation</h1>
              </div>
              <div className="bg-green-300 rounded-lg my-5 mx-5 p-2 text-center px-5">
                <h1 className="">
                  Due to limited availability,we can hold this table for you for
                  <span className=" font-bold"> 5:00 minutes</span>
                </h1>
              </div>

              <div className="flex justify-evenly gap-5 px-5 ">
                <div>
                  <h1 className="font-bold"> Data order</h1>
                  <div className=" flex flex-wrap gap-1 my-2">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="border-2 border-slate-300 w-80 rounded-md pl-2 p-1"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="border-2 border-slate-300 w-80 rounded-md pl-2 p-1"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Phone number"
                        className="border-2 border-slate-300 w-80 rounded-md pl-2 p-1 "
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="border-2 border-slate-300 w-80 rounded-md pl-2 p-1 "
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Select Occasion "
                        className="border-2 border-slate-300 w-80 rounded-md pl-2 p-1 "
                      />
                    </div>

                    <div>
                      <textarea
                        name=""
                        id=""
                        placeholder="Add special request"
                        className="border-2 border-slate-300 w-80 min-h-28 rounded-md pl-2"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          reservationConformfunc();
                        }}
                        className=" bg-red-500 text-white  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5  w-80  text-center"
                      >
                        Conform reservation
                      </button>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className=" p-4 text-sm bg-slate-200">
                    <h1 className="font-bold text-black">Reservation detail</h1>
                    <div className="flex space-x-3 m-2">
                      <Calendar /> <h1>Saturday</h1>
                    </div>
                    <div className="flex space-x-3 m-2">
                      <Clock />
                      <h1>04:30 pm</h1>
                    </div>
                    <div className="flex space-x-3 m-2 ">
                      <User />
                      <h1>
                        <span>2</span> people(Standar seating)
                      </h1>
                    </div>
                  </div>

                  <div>
                    <h1 className="font-bold text-black my-3">
                      Resturant Information
                    </h1>
                    <p className=" text-sm">
                      sit amet consectetur, adipisicing elit. Quod commodi
                      sapiente quia ea molestias? Nam blanditiis nobis adipisci
                      quas, vero perspiciatis voluptatem debitis eveniet. Eum
                      officia at delectus non aspernatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : reservationConform ? (
        <div className=" absolute w-[98vw] h-[184%]  overflow-hidden	 -top-20 bg-opacity-30 backdrop-blur-sm   ">
          <div className="p-10">
            <div className=" w-[50vw]  m-auto  rounded-xl bg-slate-100 ">
              <div className="text-center font-bold my-4 text-xl">
                <h1>Reservation</h1>
              </div>

              <div className="bg-green-400 h-40  text-white p-10   ">
                <h1 className="text-2xl">Reservation has been Confirmed</h1>
                <div className="flex gap-3 text-sm my-1">
                  <SquareCheckBig size={20} />

                  <h1>The Conformation result has sent to your mail </h1>
                </div>

                <div className="flex gap-3 text-sm my-1">
                  <CalendarCheck size={20} />
                  <h1>Booking Id :#12345</h1>
                </div>
              </div>

              <div className="flex mt-10 p-4 justify-around gap-x-3">
                <div>
                  <div className="relative bg-slate-100 rounded-full w-60 h-60">
                    <div className=" relative inset-4  rounded-full  bg-slate-200 w-52 h-52">
                      <div className="  w-44 inset-4  h-44 relative  rounded-full ">
                        <img
                          className="  w-44  h-44 rounded-full "
                          src="https://c4.wallpaperflare.com/wallpaper/509/1016/8/master-chef-wallpaper-preview.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-56">
                  <div className=" p-4 text-sm bg-slate-200">
                    <h1 className="font-bold text-black">Reservation detail</h1>
                    <div className="flex space-x-3 m-2">
                      <Calendar /> <h1>Saturday</h1>
                    </div>
                    <div className="flex space-x-3 m-2">
                      <Clock />
                      <h1>04:30 pm</h1>
                    </div>
                    <div className="flex space-x-3 m-2 ">
                      <User />
                      <h1>
                        <span>2</span> people(Standar seating)
                      </h1>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setEnterDetail(true);
                    }}
                    className=" flex gap-1 bg-blue-400 text-white ml-5 hover:bg-red-300 hover:text-red-500 rounded-xl  py-3 px-5 my-5 text-center"
                  >
                    Modify <SquarePen />
                  </button>

                  <button
                    onClick={() => {
                      reservationCancelfunc();
                    }}
                    className="flex gap-1 bg-red-200 text-red-500 ml-5 hover:bg-red-300 hover:text-red-500 rounded-xl py-3 px-5 my-5 text-center"
                  >
                    Cancel <X />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : reservationCancel ? (
        <div className=" absolute w-[98vw] h-[184%]  overflow-hidden	 -top-20 bg-opacity-30 backdrop-blur-sm   ">
          <div className="p-10">
            <div className=" w-[50vw]  m-auto  rounded-xl bg-slate-100 ">
              <div className="float-right">
                <X />
              </div>

              <div className="text-center font-bold my-4 text-xl">
                <h1>Reservation</h1>
              </div>

              <div className="bg-yellow-600 h-40  text-white p-10   ">
                <h1 className="text-2xl">
                  Are you sure you want to cancel <br />
                  the Reservation?
                </h1>
                <div className="flex gap-3 text-xs my-1">
                  <CalendarCheck size={15} />
                  <h1>Booking Id :#12345</h1>
                </div>
              </div>

              <div className="flex mt-10 p-4 justify-around gap-x-3">
                <div>
                  <div className="relative bg-slate-100 rounded-full w-60 h-60">
                    <div className=" relative inset-4  rounded-full  bg-slate-200 w-52 h-52">
                      <div className="  w-44 inset-4  h-44 relative  rounded-full ">
                        <img
                          className="  w-44  h-44 rounded-full "
                          src="https://c4.wallpaperflare.com/wallpaper/509/1016/8/master-chef-wallpaper-preview.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-56">
                  <div className=" p-4 text-sm bg-slate-200">
                    <h1 className="font-bold text-black">Reservation detail</h1>
                    <div className="flex space-x-3 m-2">
                      <Calendar /> <h1>Saturday</h1>
                    </div>
                    <div className="flex space-x-3 m-2">
                      <Clock />
                      <h1>04:30 pm</h1>
                    </div>
                    <div className="flex space-x-3 m-2 ">
                      <User />
                      <h1>
                        <span>2</span> people(Standar seating)
                      </h1>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setEnterDetail(false);
                      setReservationConform(false);
                      setReservationCancel(false);

                      alert("Your Order is Cancel");
                    }}
                    className="flex gap-1 text-sm bg-red-200 text-red-500 ml-5 hover:bg-red-300 hover:text-red-500 rounded-xl py-3 px-5 my-5 text-center"
                  >
                    Cancel <X />
                  </button>

                  <button
                    onClick={() => {
                      setReservationConform(true);
                    }}
                    className=" flex gap-1 bg-blue-400 text-white ml-5 hover:bg-red-300 hover:text-red-500 rounded-xl  text-sm py-4 px-7 my-5 text-center"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Reservation;
