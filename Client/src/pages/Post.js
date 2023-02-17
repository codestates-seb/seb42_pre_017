import Buttons from "../components/Post/Buttons";
import DropDown from "../components/Post/DropDown";
import Form from "../components/Post/Form";
import TextEditor from "../components/Post/TextEditor";
import { GoBook, GoDiffIgnored, GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";

export function Post() {
  return (
    <>
      <main className="flex flex-col items-center">
        <div className="mb-[20px]">
          <section className="flex">
            <GoBook size={24} color="#1B76D2" />
            <span className="text-[20px] ml-[10px]">제목</span>
          </section>
          <Form sx={{ width: "80vw" }} placeholder="질문 제목을 입력해주세요!" />
        </div>
        <div className="mb-[20px] flex flex-col">
          <section className="flex">
            <GoThreeBars size={24} color="#1B76D2" />
            <span className="text-[20px] ml-[10px]">기술 스택</span>
          </section>
          <DropDown sx={{ width: "80vw" }} />
        </div>
        <div className="flex flex-col">
          <section className="flex">
            <GoDiffIgnored size={24} color="#1B76D2" />
            <span className="text-[20px] ml-[10px]">질문 내용</span>
          </section>
          <TextEditor className="w-[80vw] mb-[70px]" />
          <div className="flex justify-end">
            <Buttons sx={{ width: 140, fontSize: 18, marginRight: "30px" }} text="취소" onClick={<Link to="/" />} />
            <Buttons sx={{ width: 140, fontSize: 18 }} text="등록" />
          </div>
        </div>
      </main>
    </>
  );
}
