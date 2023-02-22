import React, { useState } from "react";
import logo from "../../img/logo.png";
import { RxBell } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyPageDropDown from "../Home/MyPageDropDown";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const handleModal = () =>{
  }
  return (
    <nav
     className="flex justify-between max-w-screen-2xl
                 m-auto p-3 relative items-center mb-8">
      <Link to="/" className="cursor-pointer">
        <img src={logo} alt="logo" className="w-[50px]" />
        <div className='text-2xl font-mono font-bold'>My OverFlow</div>
      </Link>
      <div className="flex gap-7 text-2xl">
        <Link to="/post">
          <button className="text-xl">새 글쓰기</button>
        </Link>
        <button>
          <RxBell />
        </button>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >

          <FaRegUserCircle onClick={handleModal}/>
        </button>
        {toggle && <MyPageDropDown />}
      </div>
    </nav>
  );
}
