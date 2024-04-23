import { Instagram, Linkedin, Facebook } from "lucide-react";
import { NavLink } from "react-router-dom";
import foodIcon from '../image/foodIcon.png'

function Footer() {
  return (
    <>
      <div className="bg-black  text-white m-0">
        <div className="flex justify-around  p-10 ">
          <div className=" w-80 text-left">
            <div className="flex   gap-4  text-center mb-5">
              <img
                className=" -m-1 w-9 h-9  rounded-full"
                src={foodIcon}
                alt="logo"
              />
              <span>Foodio</span>
            </div>

            <div className="mb-5 text-justify">
              <p>
                Dolor sit amet consectetur, adipisicing elit. Ad, placeat
                ducimus accusantium asperiores fuga omnis dolorem beatae at,
                excepturi iure pariatur? Beatae perspiciatis excepturi delectus
                illo minus quas facere culpa.
              </p>
            </div>

            <div className="flex flex-row">

              <div className="m-5 rounded-full text-white">
                <Instagram />
              </div>
              <div className="m-5 rounded-full  text-white">
                <Facebook />
              </div>
              <div className="m-5 rounded-full  text-white">
                <Linkedin />
              </div>

            </div>
          </div>

          <div>
            <div>
              <h1 className="text-red-500 mb-5">Page</h1>
            </div>
            <div>
              <NavLink to='/' >Home</NavLink>
            </div>
            <div>
            <NavLink to='/menu' >Menu</NavLink>
            </div>
            <div>
            <NavLink to='/orderOnline' >Order Online</NavLink>
            </div>
            <div>
            <NavLink to='/menu' > Catering</NavLink>
            </div>
            <div>
            <NavLink to='/reservation' > Reservation</NavLink>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-red-500 mb-5">Information</h1>
            </div>
            <div>
            <NavLink to='/about' > About Us</NavLink>
            </div>
            <div>
              <h1>Testmonial</h1>
            </div>
            <div>
              <h1>Event</h1>
            </div>
          </div>
          <div className=" leading-7">
            <div>
              <h1 className="text-red-500 mb-5">Get in touch</h1>
            </div>
            <div>
              <h1>Kathamandu,Bhaktahpur</h1>
            </div>
            <div>
              <h1>mahtop324@gmail.com</h1>
            </div>
            <div>
              <h1>+977-9800841208</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center p-10">Copyright@2024</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
