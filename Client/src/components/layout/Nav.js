import React, { useState } from "react";
import logo from "../../img/logo.png";
import { RxBell } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyPageDropDown from "../Home/MyPageDropDown";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const handleModal = () => {};
  return (
    <div className="m-10">
      <nav
        className="flex justify-between max-w-screen-2xl w-[70vw] h-0
                 m-auto p-3 relative items-center"
      >
        <div className="flex">
          <Link to="/" className="cursor-pointer">
            <img src="/images/logo-icon2.png" alt="logo-icon" className="w-[45px] inline-block" />
            <img src={"/images/logo.png"} alt="logo" className="w-[180px] inline-block" />
          </Link>
        </div>
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
            <FaRegUserCircle onClick={handleModal} />
          </button>
          {toggle && <MyPageDropDown />}
        </div>
      </nav>
    </div>
  );
}
