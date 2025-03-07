import React from "react";
import tesla from "../../assets/tesla.png";

function Navbar() {
  return (
    <div>
      <div className="flex h-12  justify-center items-center text-sm bg-gradient-to-r from-[#e4c678] via-[#f2e5c2] to-[#e8d199]">
        <p className="font-bold">
          Inventory Model Y Available Now Explore Reduced Pricing
        </p>
        <button
          type="button"
          className="px-6 py-1.5 text-xs ml-8 font-medium text-center  text-white bg-black rounded-sm"
        >
          view Inventory
        </button>
      </div>

      <div className="flex  justify-center items-center">
        <div>
          <img width={100} src={tesla} alt="" />
        </div>
        <div>
            <span>Vehicles</span>
            <span>Energy</span>
            <span>Charging</span>
            <span>Discover</span>
            <span>Shop</span>
        </div>
     
      </div>
    </div>
  );
}

export default Navbar;
