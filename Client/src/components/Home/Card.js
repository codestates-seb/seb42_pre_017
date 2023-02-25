import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getFormatDate } from "../../util/data";
import Stack from "./Stack";
import * as dayjs from "dayjs";
export default function Card({ data }) {
  const navigate = useNavigate();
  const { answerCount, category, content, createdAt, likeCount, title, nickname, questionId } = data;
  const handleClick = () => {
    navigate(`/postdetail/${questionId}`, { state: { data } });
  };
  return (
    <li
      onClick={handleClick}
      className="border-2 border-gray-400 rounded-3xl cursor-pointer
                    hover:scale-105 duration-300 w-[19rem] h-[25rem] p-9 flex flex-col justify-between"
    >
      <div className="flex flex-col justify-center items-start gap-3 text-darkMode">
        <div className="opacity-50 mb-3 text-sm mt-3 ">등록날짜 | {dayjs(createdAt).format("YYYY-MM-DD")}</div>
        <div className=" font-semibold">{title}</div>
        <div className="bg-gray-300 rounded-2xl p-1 text-sm">{category}</div>
        {/* 카드 예외처리 (subNav.js에서의 string과 서버데이터로 받아오는 array 값을 처리하기 위함) */}
        {Array.isArray(category) ? (
          category.map((stack, idx) => <Stack key={idx} stack={stack} />)
        ) : (
          <Stack stack={category} />
        )}
        <div className="line-clamp-2 text-sm">{content}</div>
      </div>
      <div className="flex justify-between mb-3">
        <div className="font-semibold">{nickname}</div>
        <div className="flex gap-1">
          <div className="flex gap-1">
            <AiOutlineHeart />
            {likeCount}
          </div>
          <div className="flex gap-1">
            <AiOutlineComment />
            {answerCount}
          </div>
        </div>
      </div>
    </li>
  );
}
