import Buttons from "../components/Post/Buttons";
import DropDown from "../components/Post/DropDown";
import Form from "../components/Post/Form";
import TextEditor from "../components/Post/TextEditor";
import { GoBook, GoDiffIgnored, GoThreeBars } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

export function Post() {
  const navigate = useNavigate();
  return (
    <>
      <main className="flex flex-col items-center m-[20px]">
        <div className="mb-[20px]">
          <section className="flex">
            <GoBook size={24} />
            <span className="text-[20px] ml-[10px]">제목</span>
          </section>
          <Form sx={{ width: "70vw" }} placeholder="질문 제목을 입력해주세요!" />
        </div>
        <div className="mb-[20px] flex flex-col">
          <section className="flex">
            <GoThreeBars size={24} />
            <span className="text-[20px] ml-[10px]">기술 스택</span>
          </section>
          <DropDown sx={{ width: "70vw" }} />
        </div>
        <div className="flex flex-col">
          <section className="flex">
            <GoDiffIgnored size={24} />
            <span className="text-[20px] ml-[10px]">질문 내용</span>
          </section>
          <TextEditor className="w-[70vw] mb-[70px]" style={{ height: "50vh" }} />
          <div className="flex justify-end">
            <Link to="/">
              <Buttons
                sx={{ width: 140, fontSize: 18, marginRight: "30px", border: "0.5px solid gray", color: "black" }}
                text="취소"
              />
            </Link>
            <Buttons sx={{ width: 140, fontSize: 18, border: "0.5px solid gray", color: "black" }} text="등록" />
          </div>
        </div>
      </main>
    </>
  );
}
