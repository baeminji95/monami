import { useState } from "react";
import { NewsList } from "../objects/NewsList";

export default function News() {
  const [newsNo, setNewsNo] = useState(0);
  console.log(NewsList.length);

  function prebtn() {
    setNewsNo(newsNo - 1);
  }
  function nextbtn() {
    setNewsNo(newsNo + 1);
  }

  function changeNewsNo(num) {
    setNewsNo(num)
  } 

  return (
    <article id="news" className="w-[100%] mx-auto lg:w-[70%] p-10">
      <div className="border-b-2 border-t-2 border-[#666]">
        <div className="py-7 px-3 border-b border-[#bbb] mb-5">
          <h4 className="text-center text-[1.5rem] font-[600] mb-4">
            {NewsList[newsNo].header}
          </h4>
          <div className="flex justify-center gap-2 text-[0.9rem]">
            <p className="text-[#666]">작성자</p>
            <p>모나미</p>
            <sapn>|</sapn>
            <p className="text-[#666]">날짜</p>
            <p>{NewsList[newsNo].dateCreated}</p>
          </div>
        </div>
        <img className="mx-auto" src={NewsList[newsNo].img[0]} />
        <img className="mx-auto" src={NewsList[newsNo].img[1]} />
        <img className="mx-auto" src={NewsList[newsNo].img[2]} />

        <div className="text-[0.9rem] mt-4 text-center text-[#666]">
          <p>{NewsList[newsNo].point[0]}</p>
          <p>{NewsList[newsNo].point[1]}</p>
          <p>{NewsList[newsNo].point[2]}</p>
        </div>

        <pre className="py-10 whitespace-pre-wrap text-[#444]">
          {NewsList[newsNo].detail}
        </pre>
      </div>
      <div className="flex justify-center items-center gap-3">
        {newsNo === 0 || (
          <a href="#news" onClick={prebtn}>
            이전
          </a>
        )}
        <div className="flex gap-2">
            <a href="#news" onClick={() =>changeNewsNo(0)}>1</a>
        <div>|</div>
            <a href="#news" onClick={() =>changeNewsNo(1)}>2</a>
        <div>|</div>
            <a href="#news" onClick={() =>changeNewsNo(2)}>3</a>
        <div>|</div>
            <a href="#news" onClick={() =>changeNewsNo(3)}>4</a>
        <div>|</div>
            <a href="#news" onClick={() =>changeNewsNo(4)}>5</a>
        <div>|</div>
            <a href="#news" onClick={() =>changeNewsNo(5)}>6</a>
        <div>|</div>
            <a href="#news" onClick={() =>changeNewsNo(6)}>7</a>
        <div>|</div>
 

        </div>
        <a href="#news" onClick={nextbtn}>
          다음
        </a>
      </div>
    </article>
  );
}
