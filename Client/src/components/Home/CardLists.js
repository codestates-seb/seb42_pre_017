import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { getAllData, getCategoryData } from "../../util/data";
=======
import { getAllData } from "../../util/data";
>>>>>>> 9e0d534c9c3f51e410ba35e742086c711e473ac0
import Card from "./Card";
import SubNav from "./SubNav";
import PopularTap from "./PopularTap";
import Page from "./Page";
<<<<<<< HEAD
const filteredTap = ['Javascript','Typescript','React','Java','Spring'];
export default function CardLists() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("전체");
  const [pagenation, setPagenation] = useState({
  page:1,
  totalElements:0,
  totalPages:0
  });
  console.log(filter);
  const [click,setClick] = useState([])

  useEffect(() => {
    const stack = click.join(',')
    if (filter  === "전체") {
      getAllData(pagenation.page)
        .then(res => {
          setData(res.data)
          setPagenation({
            page:res.pageInfo.page,
            totalElements:res.pageInfo.totalElements,
            totalPages:res.pageInfo.totalPages
          })
        })
        .catch(err => console.log(err));   
    } else {
      getCategoryData(pagenation.page,stack)
        .then(res => {
          setData(res.data)
          setPagenation({
            page:res.pageInfo.page,
            totalElements:res.pageInfo.totalElements,
            totalPages:res.pageInfo.totalPages
          })
      })
        .catch(err => console.log(err));
      console.log( data);
    }
  }, [filter, pagenation.page,click]);
  console.log(pagenation);
  return (
    <section className="max-w-screen-2xl m-auto p-5">
      <SubNav
       onFilter={setFilter}
       filter='전체'
       onClick={setClick}
       click={click} />
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 basis-2/3 "
      >
        {data && data.map((data, idx) => <Card key={idx} data={data} />)}
      </ul>
      <Page pagenation={pagenation} onPagenation={setPagenation} data={data} />
=======
const filteredTap = ["전체", "JavaScript", "TypeScript"];
export default function CardLists() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("전체");
  const [page, setPage] = useState(1);
  useEffect(() => {
    const stack = filter.toLowerCase();
    if (filter !== "전체") {
      getAllData().then(res => setData(res));
    } else {
      getAllData().then(res => setData(res));
    }
  }, [filter, page]);
  return (
    <section className="m-auto p-5">
      <PopularTap />
      <nav className="gap-6 mb-10 flex">
        {filteredTap.map((filter, idx) => (
          <SubNav key={idx} data={data} onData={setData} filter={filter} onFilter={setFilter} />
        ))}
      </nav>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
                              basis-2/3"
      >
        {data && data.map((data, idx) => <Card key={idx} data={data} />)}
      </ul>
      <Page page={page} onPage={setPage} data={data} />
>>>>>>> 9e0d534c9c3f51e410ba35e742086c711e473ac0
    </section>
  );
}
