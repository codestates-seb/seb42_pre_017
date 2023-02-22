import { FiArrowLeft } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { IoChatbubbleOutline } from "react-icons/io5";
import { GoDiffIgnored } from "react-icons/go";
import Buttons from "../components/Post/Buttons";
import TextEditor from "../components/Post/TextEditor";
import { Link, useLocation } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";

export function PostDetail() {
  const [isLike, setIsLike] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <main className="w-[60vw] overflow-auto">
          <Link to="/">
            <FiArrowLeft size={40} />
          </Link>
          <h1 className="text-[45px] font-bold mb-5 mt-5">React의 내부 작동 원리는 무엇인가요?</h1>
          <div className="flex items-center mb-5">
            <VscAccount size={35} />
            <span className="text-[20px] font-bold border-solid border-r-4 pr-5 ml-5">장지우</span>
            <span className="text-[20px] pl-5 text-gray-500">2023.02.17</span>
            <span className="text-[20px] ml-[30px]">기술 스택</span>
          </div>
          <div className="w-[60vw] border-solid border-2 mb-[20px]" />
          <article className="border-solid border-4 h-[50vh]">질문 내용 들어갈 곳, 테두리 없앨 예정</article>
          <div className="mt-5">
            <div className="w-[60vw] border-solid border-2 mb-[20px]" />

            <div>
              <section className="text-[20px] flex items-center">
                <IoChatbubbleOutline size={26} />
                <span className="ml-2">2개의 답변이 있습니다.</span>
              </section>
              <div className="border-solid border-4 h-[30vh]">답변 들어갈 곳, 테두리 없앨 예정</div>
              <div className="flex items-center" onClick={() => setIsLike(!isLike)}>
                {isLike ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />}
              </div>
            </div>
          </div>

          <div className="w-[60vw] border-solid border-2 mb-5 mt-5" />

          <div className="mb-[70px] mt-5">
            <section className="flex">
              <GoDiffIgnored size={26} />
              <span className="text-[20px] ml-2">답변하기</span>
            </section>
            <TextEditor style={{ height: "30vh" }} />
          </div>
          <div className="flex justify-end mb-[40px] ">
            <Buttons
              sx={{ width: 140, fontSize: 18, border: "0.5px solid gray", color: "black" }}
              text="등록"
              color="black"
              className="justify-end"
            />
          </div>
        </main>
      </div>
    </>
  );
}
