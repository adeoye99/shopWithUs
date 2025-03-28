import React from "react";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-3 bg-white">
        <div>
          <h1 className="font-bold ">Furniro</h1>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
