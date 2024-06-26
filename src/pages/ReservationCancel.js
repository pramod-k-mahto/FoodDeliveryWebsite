import {
  X,
  Calendar,
  Clock,
  User,
  SquarePen,
  CalendarCheck,
  SquareCheckBig,
} from "lucide-react";
import Footer from "./pages/Footer";

function ReservationCancel() {
  return (
    <>
      <div className="p-10">
        <div className=" w-[50vw]  m-auto  rounded-xl bg-slate-100 ">
        <div className="float-right"><X/></div>

          <div className="text-center font-bold my-4 text-xl">
            <h1>Reservation</h1>
          </div>

          <div className="bg-yellow-600 h-40  text-white p-10   ">
            <h1 className="text-2xl">Are you sure you want to cancel <br/>
            the Reservation?</h1>
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

              <button className="flex gap-1 text-sm bg-red-200 text-red-500 ml-5 hover:bg-red-300 hover:text-red-500 rounded-xl py-3 px-5 my-5 text-center">
                Cancel <X />
              </button>
              
              <button className=" flex gap-1 bg-blue-400 text-white ml-5 hover:bg-red-300 hover:text-red-500 rounded-xl  text-sm py-4 px-7 my-5 text-center">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReservationCancel;
