import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyPageDropDown({ handleModal }) {
  const navigate = useNavigate();
  return (
    <ul className="absolute top-full right-[-15px] mt-1 z-10 bg-white p-1 text-lg ease-in-out">
      <li className="cursor-pointer">내작성글</li>
      <li onClick={() => navigate("/setting")} className="cursor-pointer">
        설정
      </li>
      <li onClick={handleModal} className="cursor-pointer">
        로그아웃
      </li>
    </ul>
  );
}
