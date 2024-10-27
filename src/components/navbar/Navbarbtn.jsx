import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Navbarbtn({ handleclosemenu,setoptionselect}) {
  const [option, setOption] = useState("shop");

  const handleOption = (item) => {
    setOption(item);
    setoptionselect(item);
  };
 
  return (

    <div className="buttons">
      <div
        className={option === "shop" ? "btn active " : "btn"}
        onClick={() => handleOption('shop')}
        style={{ background: option === "shop" ? "transparent" : "#f2f2f2" }}
      >
        <CiMenuBurger />
        <p>Shop</p>
      </div>
      <div
        className={option === "account" ? "btn active" : "btn"}
        onClick={() => handleOption('account')}
        style={{ background: option === "account" ? "transparent" : "#f2f2f2" }}
      >
        <FaUser />
        <p>Account</p>
      </div>
      <div className="btn" onClick={handleclosemenu}>
        <IoMdClose />
        <p>Close</p>
      </div>
    </div>
  );
}

export default Navbarbtn;
