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
  const { data } = useLocation().state;
  const { id, answer, content, likes, stack, title, updatedAt, author } = data;
  console.log(data);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <main className="w-[60vw] overflow-auto">
          <Link to="/">
            <FiArrowLeft size={40} />
          </Link>
          <h1 className="text-[45px] font-bold mb-5 mt-5">{title}</h1>
          <section className="flex items-center mb-5">
            <VscAccount size={35} />
            <span className="text-[20px] font-bold border-solid border-r-4 pr-5 ml-5">{author}</span>
            <span className="text-[20px] pl-5 text-gray-500">{updatedAt}</span>
            <span className="text-[20px] ml-[30px]">{stack}</span>
          </section>
          <div className="w-[60vw] border-solid border-[2px] mb-[20px]" />
          <article className="text-xl h-auto pt-[20px] pb-[20px] leading-10">{content}</article>
          <div className="mt-5">
            <div className="w-[60vw] border-solid border-[2px] mb-[20px]" />
            <div>
              <section className="text-[20px] flex items-center">
                <div className="flex items-center cursor-pointer mr-3" onClick={() => setIsLike(!isLike)}>
                  {isLike ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />}
                </div>
                <IoChatbubbleOutline size={26} />
                <span className="ml-2">
                  {answer.length > 0 ? `${answer.length}개의 답변이 있습니다.` : "답변 대기중입니다."}
                </span>
              </section>
              <div className="h-auto pt-[30px] pb-[30px]">
                {answer.length > 0
                  ? answer.map((el, i) => {
                      const { nickname, content, createdAt } = el;
                      return (
                        <div className="mb-5" key={i}>
                          <div className="flex items-center mb-2">
                            <span>
                              <VscAccount size={35} />
                            </span>
                            <div className="flex flex-col">
                              <span className="ml-3 font-extrabold text-[15px]">{nickname}</span>
                              <span className="ml-3 text-[12px] text-gray-500">{createdAt}</span>
                            </div>
                          </div>
                          <span>{content}</span>
                          <div className="flex items-center cursor-pointer" onClick={() => setIsLike(!isLike)}>
                            {isLike ? <FcLike size={24} /> : <FcLikePlaceholder size={24} />}
                          </div>
                          <div className="w-[60vw] border-solid border-[1px] border-gray mt-3" />
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          <div className="mb-[70px] mt-5">
            <section className="flex">
              <GoDiffIgnored size={26} />
              <span className="text-[20px] ml-2">답변하기</span>
            </section>
            <TextEditor style={{ height: "20vh" }} />
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
