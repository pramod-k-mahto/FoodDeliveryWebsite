import NavBar from "./NavBar";
import {useNavigate} from 'react-router-dom'
function About() {
  const navigate=useNavigate()
  return (
    <>
      <NavBar />
      <div >
        <div >
          <div className=" flex m-auto p-10 justify-evenly w-[70vw]">
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

            <div className=" w-96">
              <h1 className=" text-3xl font-bold mb-3">
                About Our
                <br />
                <span className="text-red-500">Restaurant</span>
              </h1>
              <p>
                dolor sit amet, consectetur adipisicing elit. Quos commodi fuga
                laborum optio omnis ullam cum consequatur rerum blanditiis
                quibusdam magnam obcaecati minima culpa quasi aspernatur maxime
                velit, iusto necessitatibus!
              </p>

              <button onClick={()=>{
                navigate('/menu')

              }} className=" bg-red-500 text-white  hover:bg-red-300 hover:text-red-500 rounded-full py-3 px-5 my-5 text-center">
                Order now
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-24">
            <div className=" w-96">
              <p>
                dolor sit amet, consectetur adipisicing elit. Quos commodi fuga
                laborum optio omnis ullam cum consequatur rerum blanditiis
                quibusdam magnam obcaecati minima culpa quasi aspernatur maxime
                velit, iusto necessitatibus!
              </p>
            </div>
            <div className="relative bg-slate-100 rounded-full w-60 h-60 -mt-12 mb-20">
              <div className=" relative inset-4  rounded-full  bg-slate-200 w-52 h-52">
                <div className="  w-44 inset-4  h-44 relative  rounded-full ">
                  <img
                    className="  w-44  h-44 rounded-full "
                    src="https://media.istockphoto.com/id/1409730044/photo/chef-decorating-a-plate-while-working-at-a-commercial-kitchen.jpg?s=612x612&w=0&k=20&c=WSe-TWlh4htPppBlCLQvKksWDuJEMXaSfxOx_PmPMm0="
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex m-auto w-[60vw]  ">
              <div className="w-52 m-10">
                <img
                  className=" w-52 h-72"
                  src="https://cdn.openart.ai/stable_diffusion/52eaa1d660e470282ebc04615ecf588132941193_2000x2000.webp"
                  alt=""
                />
              </div>
              <div className=" w-52 m-10 text-justify">
                <h1 className=" text-3xl font-bold ">
                  <span className="text-red-500">Owner</span>&Executive
                </h1>
                <h1 className=" text-3xl font-bold ">Chef</h1>
                <h1 className=" text-2xl mb-5 ">Johan Smith</h1>
                
                  <div className="text-3xl text-pink-300 ">"</div>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  aperiam dolorum accusantium nam labore. Alias dolor
                  reprehenderit id reiciendis quae unde quos. Officia
                  reprehenderit dicta quos laboriosam earum ex possimus!
                  </p>
                  <div className="text-3xl float-right text-pink-300 clear-both">"</div>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
