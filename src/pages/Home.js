// import Footer from "./Footer";
import MenuInfo from "./MenuInfo";
import NavBar from "./NavBar";
import {useNavigate} from 'react-router-dom'
import { Star,ChevronRight,ChevronLeft } from "lucide-react";
import CustomerReview from "./CustomerReview";
function Home() {

  const navigate=useNavigate()
  return (
    <>
      <div className="bg-red-100 h-[100vh] bg-gradient-to-t from-white to-red-200	">
        <NavBar />
        <div className=" flex my-20 ml-16 w-[85vw] justify-around">
          <div>
            <div className=" leading-7	">
              <h1 className=" font-serif text-black font-extrabold	text-4xl		  ">
                Best Restaurant
                <br />
                in <span className="text-red-500">Town.</span>
              </h1>
              <p>
                We Provide Best food in town We provide <br />
                Home delivery and dine Services.
              </p>
            </div>
            <div>
              <button onClick={()=>{
                navigate('/menu')

              }} className=" bg-red-500 text-white  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center">
                Order now
              </button>
              <button onClick={()=>{
                navigate('/reservation')

              }} className=" bg-red-500 hover:bg-red-300 hover:text-red-500 text-white rounded-full py-3 px-5 m-5 text-center">
                Reservation
              </button>
            </div>
          </div>
          <div>
            <img
              className="w-64 "
              src="https://glimageurl.golocall.com/golocal-post/image/821677_1481110997.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* //middle  */}
      <div className="bg-green-100 w-full    ">
        <div className=" flex justify-center m-auto py-10  my-10  w-[70vw] leading-7">
          <div>
            <img
              className=" w-72"
              src="https://hotelaaryakonkansamudra.in/wp-content/uploads/2023/04/fish_dish_slider_img.png"
              alt=""
            />
          </div>
          <div className=" mx-16">
            <h1 className=" font-bold text-3xl	mb-4	">
              Our Most <br />
              Popular Food <span className=" text-red-500">Dish.</span>
            </h1>
            <p>This dish is full of flavor and nutration! </p>
            <p>Quinaa is a complete Protien,providing all </p>
            <p>the essenatil amino acids your body </p>
            <p>need, and is also a good source of fiber.</p>

            <button onClick={()=>{
                navigate('/menu')

              }} className=" bg-red-500 text-white  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center">
              Order now
            </button>
          </div>
        </div>
      </div>

<MenuInfo/>
















      {/* Our Popular chef */}

      <div>
        <div>
          <div className="text-center text-3xl font-serif my-20 mb-10">
            <h1>Our Popular chef</h1>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {/* chef 1 */}
            <div className=" w-60 text-center">
              <div className="bg-red-300 w-56 h-80 rounded-3xl m-auto ">
                <img
                  className="w-56 h-80 rounded-3xl"
                  src="https://i.pinimg.com/originals/d3/c4/2c/d3c42c4d91c6d24b89bf8ab2175e9f75.png"
                  alt=""
                />
              </div>
              <h1 className=" font-bold">Suman kumari</h1>
              <p className="text-slate-500">Head chef</p>
            </div>

            {/* chef 2 */}
            <div className=" w-60 text-center">
              <div className="bg-red-300 w-56 h-80 rounded-3xl m-auto object-fill ">
                <img
                  className="w-56  h-80 rounded-3xl"
                  src="https://t3.ftcdn.net/jpg/06/42/87/88/360_F_642878824_V7TNnDl6kfPx1rMNVek4MR0g7WR6MLvc.jpg"
                  alt=""
                />
              </div>
              <h1 className=" font-bold">Suman kumari</h1>
              <p className="text-slate-500">Head chef</p>
            </div>

            {/* chef 3 */}

            <div className=" w-60 text-center">
              <div className="bg-red-300 w-56 rounded-3xl m-auto h-80 ">
                <img
                  className="w-56 object-center h-80 rounded-3xl"
                  src="https://media.istockphoto.com/id/491578020/photo/male-chef-cook-standing-with-arms-folded.jpg?s=612x612&w=0&k=20&c=fQ5Xhz4ILcuxryffBclF4Remg-POfEoK5JZQk5-h8G0="
                  alt=""
                />
              </div>
              <h1 className=" font-bold">Suman kumari</h1>
              <p className="text-slate-500">Head chef</p>
            </div>
            {/* chef 3 end */}
          </div>

          <div className=" text-center my-10">
            <button 
             onClick={()=>{
              navigate('/chef')
             }}
            className=" bg-red-500 text-white ml-5 hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center">
              View all
            </button>
          </div>
        </div>
      </div>

      {/* What Our Customer say */}

      <CustomerReview/>
      

      {/* Hungry? We Are Open Now */}
      <div className="m-20">
        <div className="bg-red-100 rounded-xl  w-[50vw] m-auto text-center p-10">
          <div>
            <h1 className="font-bold text-3xl">Hungry? We Are Open Now...</h1>
          </div>
          <div className="mt-6">
            <button onClick={()=>{
                navigate('/menu')

              }} className=" bg-red-500 text-white ml-5 hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center">
              Order Now
            </button>

            <button onClick={()=>{
                navigate('/reservation')

              }} className=" bg-red-500 text-white ml-5 hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center">
              Reservation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
