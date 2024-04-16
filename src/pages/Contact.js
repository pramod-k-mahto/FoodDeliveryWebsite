import NavBar from "./NavBar";

import map from "../image/map.png";

function Contact() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center  bg-slate-300">
        <div className=" w-[70vw] flex flex-col justify-center m-auto text-center mt-10">
          <h1 className="font-bold text-4xl mt-4">Contact Us</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            mollitia nisi ab tempora officiis, accusantium magni placeat dolorem
            sapiente? Autem molestiae et ullam vel beatae, eos similique commodi
            tempora perferendis!
          </p>
        </div>
      </div>

      <div className="flex justify-center bg-slate-300 pb-10">
        <div className="flex justify-center w-[70vw] m-5  ">
          <div className="w-72 h-96 mr-10 rounded-xl mt-9">
            <img className="w-72 h-96 rounded-xl " src={map} alt="map" />
          </div>

          <div className="w-72  p-2 ">
            <div className="mt-8">
              <input
                type="text"
                placeholder="First Name"
                className="border-2 rounded pl-5 h-10 w-80"
              />
            </div>
            <div className="my-5">
              <input
                type="text"
                placeholder="Last Name"
                className="border-2 rounded pl-5  h-10 w-80"
              />
            </div>
            <div className="my-5">
              <input
                type="text"
                placeholder="Email Address"
                className="border-2 rounded pl-5  h-10 w-80"
              />
            </div>

            <div className="my-5">
              <input
                type="text"
                placeholder="Subject"
                className="border-2 rounded pl-5  h-10 w-80"
              />
            </div>

            <div className="my-5">
              <textarea
                type="text"
                placeholder=" Message "
                className="border-2 rounded pl-5  h-20 w-80"
              />
            </div>

            <button className=" bg-red-500 text-white w-80  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-1 text-center">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
