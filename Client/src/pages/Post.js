import Buttons from "../components/Post/Buttons";
import DropDown from "../components/Post/DropDown";
import Form from "../components/Post/Form";
import { GoBook, GoDiffIgnored, GoThreeBars } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function Post() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [stack, setStack] = useState([]);
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newData = {
      memberId: 1,
      title,
      category: stack,
      content,
    };
    axios.post(`http://3.36.120.221:8080/questions`, newData);
    alert("질문이 등록되었어요.");
    navigate("/");
  };

  return (
    <>
      <main className="flex flex-col items-center m-[20px] w-[70vw] m-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <section className="flex">
              <GoBook size={24} />
              <span className="text-[20px] ml-[10px]">제목</span>
            </section>
            <Form
              sx={{ width: "70vw" }}
              placeholder="질문 제목을 입력해주세요."
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="mb-5 flex flex-col">
            <section className="flex">
              <GoThreeBars size={24} />
              <span className="text-[20px] ml-[10px]">기술 스택</span>
            </section>
            <DropDown sx={{ width: "70vw" }} displayEmpty setStack={setStack} stack={stack} />
          </div>
          <div className="flex flex-col">
            <section className="flex">
              <GoDiffIgnored size={24} />
              <span className="text-[20px] ml-[10px]">질문 내용</span>
            </section>
            <Form
              direction="row"
              className="w-[70vw]"
              sx={{
                width: "70vw",
                "& .MuiInputBase-root": {
                  height: 500,
                },
              }}
              rows={20}
              onChange={e => setContent(e.target.value)}
              value={content}
              placeholder="질문 내용을 입력해주세요."
            />
            <div className="flex justify-end mt-5 mb-7">
              <Link to="/">
                <Buttons
                  sx={{ width: 140, fontSize: 18, marginRight: "30px", border: "0.5px solid gray", color: "black" }}
                  text="취소"
                />
              </Link>
              <Buttons
                sx={{ width: 140, fontSize: 18, border: "0.5px solid gray", color: "black" }}
                text="등록"
                type="submit"
              />
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
