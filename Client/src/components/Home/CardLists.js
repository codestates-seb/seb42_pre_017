import React, { useEffect, useState } from "react";
import { getAllData, getCategoryData } from "../../util/data";
import Card from "./Card";
import SubNav from "./SubNav";
import PopularTap from "./PopularTap";
import Page from "./Page";
const filteredTap = ['전체','Javascript','Typescript','React','Java','Spring'];
export default function CardLists() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("전체");
  const [page, setPage] = useState(1);
  const [click,setClick] = useState([])
  console.log(click);
  console.log(click.join(','));//이 방식으로 카테고리 path variable 변수 지정
  useEffect(() => {
    // const stack = filter.toLowerCase()
    //reduce
    const stack = click.join(',')
    console.log(stack);
    if (filter  === "전체") {
      getAllData(page)
        .then(res => {
          setData(res)
          
        })
        .catch(err => console.log(err));   
    } else {
      getCategoryData(page,stack)
        .then(res => setData(res))
        .catch(err => console.log(err));
      console.log( data);
    }
  }, [filter, page,click]);
  return (
    <section className="max-w-screen-2xl m-auto p-5">
      <PopularTap />
      <nav className="gap-6 mb-10 flex">
        {filteredTap.map((filter, idx) => (
          <SubNav
           key={idx}
           data={data}
           onData={setData}
           filter={filter}
           onFilter={setFilter}
           onClick={setClick}
           click={click}
           />
        ))}
      </nav>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
                                basis-2/3 "
      >
        {data && data.map((data, idx) => <Card key={idx} data={data} />)}
      </ul>
      <Page page={page} onPage={setPage} data={data} />
    </section>
  );
}
