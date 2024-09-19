import React, { useEffect } from "react";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./slices/Product-slice";
import { addToCart } from "./slices/Cart-slice";

const Home = () => {
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  });
  return (
    <>
      <Nav />
      <div className="container mx-auto w-screen grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-5 text-center">
        {data.map((ele) => (
          <div
            className="product-holder flex flex-col justify-start items-center my-5 px-2"
            key={ele.id}
          >
            <div className="img-holder md:w-[300px] w-[200px] md:h-[300px] h-[200px] overflow-hidden flex justify-center
            items-center">
              <img
                className="object-contain md:w-[200px] w-[150px]  md:h-[250px] h-[150px]"
                src={ele.image}
                alt="not found"
              />
            </div>
            <h1 className="text-md md:text-xl font-bold">{ele.title}</h1>
            <h1 className="text-md md:text-xl font-bold mt-3">${ele.price.toFixed(2)}</h1>
            <p className="text-sm my-3">{ele.description}</p>
            <p className="text-sm mb-2">{ele.category}</p>
            <button
              className="bg-blue-800 px-4 py-2 text-sm font-medium text-white rounded-xl mb-2 mt-auto"
              onClick={() => {
                dispatch(addToCart(ele));
                console.log(ele);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
