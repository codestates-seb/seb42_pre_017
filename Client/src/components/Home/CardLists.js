import React, { useEffect, useState } from "react";
import { getAllData } from "../../util/data";
import Card from "./Card";
import SubNav from "./SubNav";
import PopularTap from "./PopularTap";
import Page from "./Page";
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
    </section>
  );
}
