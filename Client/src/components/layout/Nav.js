import React, { useRef, useState } from "react";
import { RxBell } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyPageDropDown from "../Home/MyPageDropDown";
import Modal from '../Home/Modal';
import SignIn from '../SignIn/SignIn';
import ModalBackGround from '../ui/ModalBackGround';

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const userMenu = useRef();
    
  const handleModal = () => {
    setIsOpen(!isOpen)
    setToggle(!toggle)
  };
  const handleCloseModal = (e) => {
    if(userMenu.current === e.target)
     setIsOpen(!isOpen)
     console.log(e.target,userMenu.current);
  }
  console.log(userMenu.current);
  return (
    <div className="m-10">
      {  isOpen &&
          <ModalBackGround
           onClose={handleCloseModal}
           userRef={userMenu}
          >
            <Modal
             children={<SignIn />}
             onClose={setIsOpen}
             
            />
          </ModalBackGround>
      }
      <nav
        className={`flex justify-between max-w-screen-2xl w-[70vw] h-0
                 m-auto p-3 relative items-center ${isOpen && 'bg-fixed'}`}
      >
        <div className="flex">
          <Link to="/" className="cursor-pointer">
            <img src="/images/logo-icon2.png" alt="logo-icon" className="w-[45px] inline-block" />
            <img src={"/images/logo.png"} alt="logo" className="w-[180px] inline-block" />
          </Link>
        </div>
        <div className="flex gap-7 text-2xl">
          <Link to="/post">
            <button className="text-xl cursor-pointer">새 글쓰기</button>
          </Link>
          <button className='hover:animate-spin-slow text-3xl'>
            <RxBell />
          </button>
          <button
            onClick={() => {setToggle(!toggle);}}>
            <FaRegUserCircle />
          </button>
          {toggle &&<MyPageDropDown onClick={handleModal}/>}
        </div>
      </nav>
    </div>
  );
}
