import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { Undo2, Navigation, X } from "lucide-react";
import map from "../image/map.png";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../reduxstore/Action/action";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function OrderOnline() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.product);

  const [filterProduct, setFilterProduct] = useState([]);
  const [checkOut, setCheckOut] = useState(false);
  const [changeAddress, setChangeAddress] = useState(false);
  const [checkOutItem, setCheckOutItem] = useState();
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(50);
  const [total, setTotal] = useState(0);
  const [shippingFeeDiscount, setShippingFeeDiscount] = useState(0);
  const [totalItem, setTotalItem] = useState(item.length);
  const navigate = useNavigate();
  const [food, setFoodItem] = useState([]);

  const cartProduct = useSelector((state) => {
    return state.product;
  });

  const getProduct = async () => {
    let foods = await fetch("https://dummyjson.com/recipes");
    foods = await foods.json();
    setFoodItem(foods.recipes);
  };

  const productFilter = () => {
    let filteredProduct = food.filter((item) => cartProduct.includes(item.id));
    setFilterProduct(
      filteredProduct.map((item) => ({ ...item, itemNumber: 1 }))
    );
    setCheckOutItem(filteredProduct.length);
  };

  const deleteProduct = (id) => {
    const filteredProducts = filterProduct.filter((item) => item.id !== id);
    setFilterProduct(filteredProducts);
    dispatch(remove(id));
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    if (food.length > 0) {
      productFilter();
    }
  }, [food, cartProduct]);

  useEffect(() => {
    let cost = filterProduct.reduce(
      (acc, item) => acc + item.caloriesPerServing,
      0
    );
    setSubtotal(cost);
    setTotal(cost + shippingFee);
  }, [filterProduct, shippingFee]);

  const checkOutfunc = () => {
    setCheckOut(!checkOut);
  };

  const changeAddressFunc = () => {
    setChangeAddress(!changeAddress);
  };

  return (
    <>
      <NavBar />

      {checkOut ? (
        <div className="m-14 p-10">
          {changeAddress && (
            <div className="w-screen h-[240%] overflow-hidden left-1 -top-10 bg-opacity-50 backdrop-blur-sm absolute">
              <div className="m-14">
                <div className="bg-slate-100 w-[30vw] m-auto p-7">
                  <div className="float-right">
                    <button onClick={() => setChangeAddress(false)}>
                      <X />
                    </button>
                  </div>
                  <div>
                    <h1 className="font-bold text-center">Shipping Address</h1>
                  </div>
                  <div>
                    <h1 className="text-xs my-1">Shipping Address</h1>
                    <div>
                      <div className="flex flex-wrap h-10">
                        <input
                          type="text"
                          placeholder="ktm"
                          className="border-2 border-slate-200 w-56 rounded-sm px-2 text-xs"
                        />
                        <button className="w-20 ml-5 bg-red-200 text-red-500 hover:bg-red-300 hover:text-red-500 rounded-sm">
                          Search
                        </button>
                      </div>
                      <div className="flex text-green-400 mb-5 my-1">
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
            </div>
          )}

          <div className="w-44 h-12">
            <div className="float-right bg-black text-white w-12 h-12 p-1 flex text-center rounded-full">
              <button onClick={() => setCheckOut(false)}>
                <Undo2 size={40} />
              </button>
            </div>
          </div>
          <div className="w-[36vw] bg-slate-300 m-auto flex flex-col justify-center p-2">
            <div className="text-center text-2xl font-bold">
              <h1>Checkout</h1>
            </div>
            <div>
              <div className="my-2">
                <h1>Shipping Address</h1>
              </div>

              <div className="flex justify-between">
                <div>
                  <input
                    type="text"
                    placeholder="Kathamandu bhakatpur"
                    className="ml-4 border-2 border-slate-300 w-64 p-2 rounded-md"
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      setChangeAddress(true);
                    }}
                    className="bg-red-500 text-white hover:bg-red-300 hover:text-red-500 w-32 rounded p-2 pb-3 mr-7"
                  >
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
                    placeholder="First Name"
                    className="border-2 border-slate-300 p-1 rounded-md"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border-2 border-slate-300 p-1 rounded-md"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="border-2 border-slate-300 p-1 rounded-md"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="border-2 border-slate-300 p-1 rounded-md"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    name="Message"
                    className="border-2 border-slate-300 w-[398px] min-h-20 p-1 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <h1>Payment Method</h1>
              <div className="flex flex-wrap justify-around">
                <div className="m-5 w-44">
                  <input
                    type="checkbox"
                    id="cashondelivery"
                    name="myCheckbox"
                    value="Cash On delivery"
                  />
                  <label htmlFor="cashondelivery">Cash On delivery</label>
                </div>

                <div className="m-5 w-44">
                  <input
                    type="checkbox"
                    id="BCAVertualAccount"
                    name="BCAVertualAccount"
                    value="BCAVertualAccount"
                  />
                  <label htmlFor="cashondelivery">BCA Virtual Account</label>
                </div>

                <div className="w-44">
                  <input
                    type="checkbox"
                    id="TransferBank"
                    name="TransferBank"
                    value="TransferBank"
                  />
                  <label htmlFor="cashondelivery">Transfer Bank</label>
                </div>

                <div className="w-44">
                  <input
                    type="checkbox"
                    id="Creditcard"
                    name="Creditcard"
                    value="Credit card"
                  />
                  <label htmlFor="cashondelivery">Credit card</label>
                </div>
              </div>
              <div className="mx-5 m-5">
                <button
                  onClick={() => {
                    alert("Development is in progress");
                  }}
                  className="bg-red-500 text-white hover:bg-red-300 hover:text-red-500 px-4 p-2 rounded w-[398px]"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex my-10">
          <div className="flex flex-col">
            {filterProduct && filterProduct.length > 0 ? (
              filterProduct.map((item, index) => {
                let rateItem = Math.floor(item.rating);

                return (
                  <div
                    key={index}
                    className="bg-slate-200 min-h-52 w-[60vw] m-10 flex flex-row justify-around p-5"
                  >
                    <div>
                      <img className="w-44" src={item.image} alt="" />
                    </div>

                    <div className="w-60">
                      <h1 className="text-3xl font-bold">{item.name}</h1>
                      <p>{item.ingredients}</p>
                    </div>

                    <div className="leading-10">
                      <div className="text-3xl">
                        RS.{item.caloriesPerServing}
                      </div>
                      <div className="text-3xl my-3">
                        <div className="flex gap-1">
                          {[...Array(rateItem)].map((_, index) => (
                            <span key={index}>
                              <Star size={15} />
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <button
                          onClick={() => {
                            let id = item.id;
                            deleteProduct(id);
                            dispatch(remove(id));
                          }}
                          className="bg-red-500 text-white hover:bg-red-300 hover:text-red-500 px-4"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() => {
                          if (item.itemNumber > 1) {
                            item.itemNumber--;
                            setTotalItem(totalItem - 1);
                            setSubtotal(subtotal - item.caloriesPerServing);
                            setTotal(
                              subtotal + shippingFee - item.caloriesPerServing
                            );
                          }
                        }}
                        className="bg-red-500 text-white hover:bg-red-300 hover:text-red-500 rounded w-7 p-1"
                      >
                        -
                      </button>
                      <span className="border-2 border-slate-100 bg-white text-black hover:bg-slate-100 hover:text-black hover:border-2 hover:border-slate-300 hover:rounded-sm w-7 p-1 px-3">
                        {item.itemNumber}
                      </span>
                      <button
                        onClick={() => {
                          item.itemNumber++;
                          setTotalItem(totalItem + 1);
                          setSubtotal(subtotal + item.caloriesPerServing);
                          setTotal(
                            subtotal + shippingFee + item.caloriesPerServing
                          );
                        }}
                        className="bg-red-500 text-white hover:bg-red-300 hover:text-red-500 rounded w-7 p-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="bg-slate-100 min-h-52 w-[60vw] m-10 flex flex-row justify-around p-5">
                <button
                  onClick={() => {
                    navigate("/menu");
                  }}
                  className="m-auto rounded-full p-2 h-10 hover:bg-red-300 hover:text-white bg-slate-700 text-white"
                >
                  There is No Item in cart keep Ordering
                </button>
              </div>
            )}
          </div>

          <div className="bg-slate-100 w-[30vw] h-80 leading-10 p-3 my-2">
            <div>
              <h1 className="text-xl">Order summary </h1>
            </div>
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>
                <h1>Rs.{subtotal}</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div>Shipping Fee</div>
              <div>
                <h1>Rs.{shippingFee}</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div>Discount on shipping Fee</div>
              <div>
                <h1>Rs.{shippingFeeDiscount}</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div>Total Items</div>
              <div>
                <h1>{totalItem}</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div>Total</div>
              <div>
                <h1>Rs.{total}</h1>
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  checkOutfunc();
                }}
                className="bg-red-500 text-white hover:bg-red-300 hover:text-red-500 rounded w-full p-2"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default OrderOnline;
