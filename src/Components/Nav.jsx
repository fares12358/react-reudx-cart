import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Nav = () => {
  const data = useSelector((state) => state.cart);
  const NAV_LINKS = [
    { id: 1, href: "/", label: "products" },
    { id: 2, href: "/About", label: `cart-${data.length}` },
  ];
  return (
    <nav className="container p-5 mx-auto w-screen  flex justify-around">
      <div className="md:text-4xl text-xl text-black font-bold">E-commerce</div>
      <div className="flex gap-10">
        {NAV_LINKS.map((link) => (
          <Link
            className="md:text-2xl text-md text-black font-bold flex justify-center items-center cursor-pointer"
            to={link.href}
            key={link.id}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
