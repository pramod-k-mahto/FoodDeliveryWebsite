import Footer from "./pages/Footer";



function Checkout() {
  return (
    <>
    
      <div className="m-14 p-10">
        <div className="w-[36vw] bg-slate-300 m-auto flex flex-col justify-center p-2  ">
          <div className="text-center text-2xl font-bold">
            <h1>CheckOut</h1>
          </div>
          <div>
            <div className="my-2">
              <h1>Shoping Address</h1>
            </div>

            <div className="flex justify-between">
              <div className="">
                <input
                  type="text"
                  placeholder="Kathamandu bhakatpur"
                  className="ml-4 border-2 border-slate-300 w-64 p-2 rounded-md"
                />
              </div>
              <div>
                <button className=" bg-red-500 text-white hover:bg-red-300 hover:text-red-500 w-32 rounded p-2 pb-3 mr-7  ">
                  Change
                </button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h1>Order Data</h1>
            </div>

            <div className="flex flex-wrap gap-3 p-5">
              <div>
                <input
                  type="text"
                  placeholder="First Name "
                  className=" border-2 border-slate-300 p-1 rounded-md"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name "
                  className=" border-2 border-slate-300 p-1 rounded-md"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Phone Number "
                  className=" border-2 border-slate-300 p-1  rounded-md"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Email Address "
                  className=" border-2 border-slate-300 p-1 rounded-md"
                />
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  name="Message"
                  className=" border-2 border-slate-300 w-[398px] min-h-20 p-1 rounded-md"
                />
              </div>
            </div>
          </div>

          <div>
            <h1>Payment Method</h1>
            <div className="flex flex-wrap  justify-around">
              <div className=" m-5 w-44 ">
                <input
                  type="checkbox"
                  id="cashondelivery"
                  name="myCheckbox"
                  value="Cash On delivery"
                />
                <label for="cashondelivery">Cash On delivery</label>
              </div>

              <div className=" m-5 w-44 ">
                <input
                  type="checkbox"
                  id="BCAVertualAccount"
                  name="BCAVertualAccount"
                  value="BCAVertualAccount"
                />
                <label for="cashondelivery">BCA Vertual Account</label>
              </div>

              <div className="  w-44 ">
                <input
                  type="checkbox"
                  id="TranferBank"
                  name="TranferBank"
                  value="TranferBank"
                />
                <label for="cashondelivery">Tranfer Bank</label>
              </div>

              <div className="  w-44 ">
                <input
                  type="checkbox"
                  id="Creditcard"
                  name="Creditcard"
                  value="Credit card"
                />
                <label for="cashondelivery">Credit card</label>
              </div>
            </div>
            <div className="mx-5 m-5">
              <button className=" bg-red-500 text-white hover:bg-red-300 hover:text-red-500 px-4 p-2 rounded  w-[398px] ">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Checkout;
