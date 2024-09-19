import React from "react";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { clear, removeFromCart } from "./slices/Cart-slice";

const About = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Nav />
      <div className="container mx-auto  w-screen  flex flex-col gap-5 p-5">
        <button
          className="bg-slate-600 px-4 py-2 text-xl font-bold text-white rounded-xl mx-auto w-[150px]"
          onClick={() => {
            dispatch(clear());
          }}
        >
          clear
        </button>
        {data.length > 0 ? (
          <div className=" flex justify-start items-center p-5 border border-black rounded-xl">
            <span className="text-red-700 text-xl font-bold">
              Total : <span className="text-blue-800">{data.reduce((total, ele) => total + parseFloat(ele.price), 0).toFixed(2)}</span>
            </span>
          </div>
        ) : (
          ``
        )}
        {data.map((ele) => (
          <div
            className="product-holder flex justify-start items-center p-5 border border-black rounded-xl"
            key={ele.id}
          >
            <div className="img-holder w-[150px] h-full overflow-hidden">
              <img
                className="img-fluid object-cover w-[100px]"
                src={ele.image}
                alt="not found"
              />
            </div>
            <h1 className="text-base font-medium  mx-4">{ele.title}</h1>
            <h1 className="text-xl font-medium underline  mx-4 ">
              ${ele.price.toFixed(2)}
            </h1>
            <p className="text-base font-medium  mx-4 ">{ele.category}</p>
            <div className="ml-auto">
              <button
                className="border-2 border-red-800 px-4 py-2 text-xl font-bold text-red-800 rounded-md"
                onClick={() => {
                  dispatch(removeFromCart(ele));
                }}
              >
                remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
