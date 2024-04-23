import NavBar from "./NavBar";

import map from "../image/map.png";
import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // console.log(formData);
    alert("Form is submited");
    e.preventDefault();
  };
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center  bg-slate-300">
        <div className=" w-[70vw] flex flex-col justify-center m-auto text-center mt-10">
          <h1 className="font-bold text-4xl mt-4">Contact Us</h1>
          <p className="mt-5">
            Dolor sit amet consectetur adipisicing elit. Iusto
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

          <div className="w-72  p-3 py-5">
            <form onSubmit={handleSubmit}>
              <label htmlFor="first_name">
                First Name:
                <input
                  onChange={handleChange}
                  name="first_name"
                  id="first_name"
                  required
                  type="text"
                  placeholder="First Name"
                  className="border-2 rounded pl-2 h-10 w-80"
                />
              </label>
              <label htmlFor="last_name">
                Last Name:
                <input
                  required
                  onChange={handleChange}
                  name="last_name"
                  id="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="border-2 rounded pl-2  h-10 w-80"
                />
              </label>
              <label htmlFor="email">
                Email:
                <input
                  required
                  onChange={handleChange}
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Email Address"
                  className="border-2 rounded pl-2  h-10 w-80"
                />
              </label>

              <label htmlFor="subject">
                Subject:
                <input
                  required
                  onChange={handleChange}
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="border-2 rounded pl-2  h-10 w-80"
                />
              </label>

              <label htmlFor="message">
                Message:
                <textarea
                  required
                  onChange={handleChange}
                  name="message"
                  id="message"
                  type="text"
                  placeholder=" Message "
                  className="border-2 rounded pl-2  h-20 w-80"
                />
              </label>

              <button
                type="submit"
                className=" bg-red-500 text-white w-80  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-1 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
