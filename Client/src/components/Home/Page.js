import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Buttons from "../Post/Buttons";
export default function Page({ page, onPage }) {
  const totalPage = 3;

  const handleLeftPage = () => {
    if (page === 1) return;
    onPage(page - 1);
  };

  const handleRightPage = () => {
    if (page === totalPage) return;
    onPage(page + 1);
  };
  return (
    <div className="flex justify-between w-full mt-5">
      <Buttons text={<AiOutlineArrowLeft className="text-3xl" />} onClick={handleLeftPage} />
      <div>
        <ul className="flex gap-3">
          {Array(totalPage)
            .fill()
            .map((page, idx) => (
              <li key={idx} className="list-none" onClick={() => onPage(idx + 1)}>
                <Buttons text={idx + 1}></Buttons>
              </li>
            ))}
        </ul>
      </div>
      <Buttons text={<AiOutlineArrowRight className="text-3xl" />} onClick={handleRightPage} />
    </div>
  );
}
