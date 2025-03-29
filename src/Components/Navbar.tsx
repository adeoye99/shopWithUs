import React from "react";
import heart from "../assets/akar-icons_heart.png";
import search from "../assets/akar-icons_search.png";
import shoppingCart from "../assets/ant-design_shopping-cart-outlined.png";
import alert from "../assets/mdi_account-alert-outline.png";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div>
      <div className="flex py-auto w-screen text-sm h-[80px] px-10  justify-between bg-white items-center">
        <div>
          <p className="font-bold text-sm">Furniro</p>
        </div>
        <div className="flex gap-18 text-[12px] font-medium mx-auto">
          <div>Home</div>
          <div>Shop</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="flex gap-6">
          <div>
            <img src={heart} className="w-5 h-5" alt="heart" />
          </div>
          <div>
            <img src={search} className="w-5 h-5" alt="heart" />
          </div>
          <div>
            <img src={shoppingCart} className="w-5 h-5" alt="heart" />
          </div>
          <div>
            <img src={alert} className="w-5 h-5" alt="heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
