import map from "../image/map.png";
import { Navigation } from "lucide-react";

function ShippingAddress() {
  return (
    <>
    
    <div className="p-10">
      <div className="bg-slate-100 w-[30vw] m-auto p-7">
        <div>
          <h1 className="font-bold text-center">ShippingAddress</h1>
        </div>
        <div>
          <h1 className="text-xs my-1">ShippingAddress</h1>
          <div>
            <div className="flex  flex-wrap  h-10 ">
              <input
                type="text"
                placeholder="ktm"
                className="border-2 border-slate-200  w-56 rounded-sm px-2 text-xs"
              />

              <button className=" w-20 ml-5  bg-red-200 text-red-500 hover:bg-red-300 hover:text-red-500 rounded-sm ">
                Search
              </button>
            </div>
            <div className="flex text-green-400  mb-5 my-1">
              <Navigation />
              <h1 className="text-xs"> Use Your Location</h1>
            </div>
          </div>
          <div className="w-96 h-40">
            <img className="w-80 h-40" src={map} alt="img" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ShippingAddress;
