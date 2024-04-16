import { X, Calendar, Clock, User } from "lucide-react";

function EnterDetail() {
  return (
    <>
      <div className="p-20">
        <div className="w-[50vw]  m-auto relative bg-slate-100 rounded  ">
          <div className=" text-4xl w-10 float-right clear-both">
            <X />
          </div>

          <div className="text-center font-bold text-xl  clear-both px-5">
            <h1>Reservation</h1>
          </div>
          <div className="bg-green-300 rounded-lg my-5 mx-5 p-2 text-center px-5">
            <h1 className="">
              Due to limited availability,we can hold this table for you for
              <span className=" font-bold"> 5:00 minutes</span>
            </h1>
          </div>

          <div className="flex justify-evenly gap-10 px-5 ">
            <div>
              <h1 className="font-bold"> Data order</h1>
              <div className=" flex flex-wrap gap-5 my-2">
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
                    className="border-2 border-red-600 w-80 min-h-28 rounded-md pl-2"
                  ></textarea>
                </div>
                <div>
                  <button className=" bg-red-500 text-white  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5  w-80  text-center">
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
                  sit amet consectetur, adipisicing elit. Quod commodi sapiente
                  quia ea molestias? Nam blanditiis nobis adipisci quas, vero
                  perspiciatis voluptatem debitis eveniet. Eum officia at
                  delectus non aspernatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnterDetail;
