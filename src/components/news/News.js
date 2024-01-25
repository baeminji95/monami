import { useEffect, useState } from "react";
import { NewsList } from "../objects/NewsList";
import MoveBtn from "./MoveBtn";

export default function News() {
  const [newsNo, setNewsNo] = useState(0);

  console.log(newsNo);

  useEffect(() => {
    window.scroll({
      top: 300,
      behavior: "smooth",
    });
  }, [newsNo]);

  const [veiwBtn, setVeiwBtn] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY < 500 || window.scrollY > 3500) {
      setVeiwBtn(false);
    } else {
      setVeiwBtn(true);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <span>|</span>
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

        <pre className="py-20 whitespace-pre-wrap text-[#444] font-Montserrat max-w-[50rem] mx-auto">
          {NewsList[newsNo].detail}
        </pre>
      </div>
      <div className="flex justify-center items-center gap-3 py-5">
        {newsNo === 0 || (
          <button
            onClick={() => setNewsNo(newsNo - 1)}
            className="hover:text-[#C40F37]"
          >
            이전
          </button>
        )}
        <div className="flex gap-2">
          <button onClick={() => setNewsNo(0)} className="hover:text-[#C40F37]">
            1
          </button>
          <div>|</div>
          <button onClick={() => setNewsNo(1)} className="hover:text-[#C40F37]">
            2
          </button>
          <div>|</div>
          <button onClick={() => setNewsNo(2)} className="hover:text-[#C40F37]">
            3
          </button>
          <div>|</div>
          <button onClick={() => setNewsNo(3)} className="hover:text-[#C40F37]">
            4
          </button>
          <div>|</div>
          <button onClick={() => setNewsNo(4)} className="hover:text-[#C40F37]">
            5
          </button>
          <div>|</div>
          <button onClick={() => setNewsNo(5)} className="hover:text-[#C40F37]">
            6
          </button>
          <div>|</div>
          <button onClick={() => setNewsNo(6)} className="hover:text-[#C40F37]">
            7
          </button>
        </div>
        <button
          onClick={() => setNewsNo(newsNo + 1)}
          className="hover:text-[#C40F37]"
        >
          다음
        </button>
      </div>

      {veiwBtn && (
        <>
          <button
            className="fixed top-[50%] left-2"
            onClick={() => setNewsNo(newsNo - 1)}
          >
            <svg
              className="w-8 fill-[#333]/70 hover:fill-[#333]/95"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>

          <button
            className="fixed top-[50%] right-2"
            onClick={() => setNewsNo(newsNo + 1)}
          >
            <svg
              className="w-8 fill-[#333]/70 hover:fill-[#333]/95"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </button>
        </>
      )}
    </article>
  );
}
