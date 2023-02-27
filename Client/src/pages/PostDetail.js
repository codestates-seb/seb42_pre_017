import { FiArrowLeft } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { IoChatbubbleOutline } from "react-icons/io5";
import { GoDiffIgnored } from "react-icons/go";
import Buttons from "../components/Post/Buttons";
import { Link, useLocation } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useEffect, useState } from "react";
import { getAnswerData } from "../util/data";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { SlOptionsVertical } from "react-icons/sl";
import * as dayjs from "dayjs";

export function PostDetail() {
  const [answerData, setAnswerData] = useState([]);
  const [userAnswerInput, setUserAnswerInput] = useState("");
  const [isLike, setIsLike] = useState(false);
  const { data } = useLocation().state;
  const [isLogin, setIsLogin] = useState(true);
  const { category, content, createdAt, nickname, likeCount, title, answerCount } = data;
  // console.log(data);
  useEffect(() => {
    getAnswerData().then(res => setAnswerData(res));
  }, []);
  const handleSubmit = e => {
    const baseUrl = "http://13.209.121.17:8080/answers";
    const newAnswer = {
      answerId: 1005,
      content: userAnswerInput,
      memberId: 5,
      answerLike: {
        memberId: [4, 7, 5],
      },
      nickName: "user6",
    };
    axios.post(baseUrl, newAnswer);
    e.preventDefault();
    alert("답변이 등록되었어요.");
    setUserAnswerInput("");
  };

  const handleOptionButtonClick = () => {
    alert("선택");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-screen-2xl w-[70vw] m-auto">
        <main className="w-[60vw] overflow-auto">
          <Link to="/">
            <FiArrowLeft size={40} />
          </Link>
          <h1 className="text-[45px] font-bold mb-5 mt-5">{title}</h1>
          <section className="flex items-center mb-5">
            <VscAccount size={38} />
            <span className="text-[20px] font-bold border-solid border-r-4 pr-5 ml-5">{nickname || "-"}</span>
            <span className="text-[20px] pl-5 text-gray-500">{createdAt && dayjs(createdAt).format("YYYY-MM-DD")}</span>
            {category?.map((el, i) => (
              <span key={i} className="text-[20px] ml-[30px]">
                {el}
              </span>
            ))}
            {isLogin && <SlOptionsVertical size={25} onClick={handleOptionButtonClick} />}
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
                  {answerCount > 0 ? `${answerCount}개의 답변이 있습니다.` : "답변 대기중입니다."}
                </span>
              </section>
              <div className="h-auto pt-[30px] pb-[30px]">
                {answerCount > 0 &&
                  answerData.map((el, i) => {
                    const { answerLike, answerId, content, createdAt } = el;
                    return (
                      <div className="mb-5" key={i}>
                        <div className="flex items-center mb-2">
                          <span>
                            <VscAccount size={38} />
                          </span>
                          <div className="flex flex-col">
                            <span className="ml-3 font-extrabold text-[15px]">{answerId}</span>
                            <span className="ml-3 text-[12px] text-gray-500">
                              {dayjs(createdAt).format("YYYY-MM-DD")}
                            </span>
                          </div>
                        </div>
                        <div className="mb-2">{content}</div>
                        <div className="flex items-center cursor-pointer" onClick={() => setIsLike(!isLike)}>
                          {isLike ? <FcLike size={26} /> : <FcLikePlaceholder size={26} />}
                          <span className="ml-1 text-[12px]">{answerLike.memberId.length}</span>
                        </div>
                        <div className="w-[60vw] border-solid border-[1px] border-gray mt-5" />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="mb-[70px] mt-5">
            <section className="flex">
              <GoDiffIgnored size={26} />
              <span className="text-[20px] ml-2 mb-3">답변하기</span>
            </section>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{
                  width: "60vw",
                  "& .MuiInputBase-root": {
                    height: 200,
                  },
                }}
                value={userAnswerInput}
                rows={7}
                multiline
                placeholder="질문에 답변을 등록해보세요."
                onChange={e => setUserAnswerInput(e.target.value)}
              />
              <div className="flex justify-end mb-[40px] mt-5">
                <Buttons
                  sx={{ width: 140, fontSize: 18, border: "0.5px solid gray", color: "black" }}
                  text="등록"
                  color="black"
                  className="justify-end"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
