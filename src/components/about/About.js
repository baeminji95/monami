
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function About() {
  const {pathname} = useLocation()

  return (
    <main>
      <article className="relative h-[18rem] max-w-[100vw] mx-auto mt-[10rem] bg-visual1 bg-cover bg-no-repeat bg-center border-b border-[#666]">
        <div
          id="mainText"
          className="h-[18rem] flex flex-col justify-center items-center"
        >
          <h1 className="text-[1.8rem] font-[500] tracking-wider text-white">
            모나미 소개
          </h1>
          <div className="w-7 h-1 bg-[#C40F37] my-3"></div>
          <p className="text-[0.9rem] font-[300] tracking-wider text-white/80">
            언제 어디서나 모나미는 당신 곁에 있습니다.
          </p>
        </div>
        <nav className="absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] bg-white w-[80%] h-12 flex justify-center text-[#666]">
          <input
            id="ceo"
            type="radio"
            name="about"
            value="/about/ceo"
            checked={`${pathname}` === "/about/ceo"}
            className="hidden peer/ceo"
          />
          <label
            htmlFor="ceo"
            className="border basis-0 grow text-center leading-[3rem]
                        peer-checked/ceo:bg-[#C40F37] peer-checked/ceo:text-[#fff]
                        peer-checked/ceo:border-[#C40F37]"
          >
            <Link to={"/about/ceo"}>CEO 메시지</Link>
          </label>

          <input
            id="info"
            type="radio"
            name="about"
            value="/about/info"
            checked={`${pathname}` === "/about/info"}
            className="hidden peer/story"
          />
          <label
            htmlFor="info"
            className="border basis-0 grow text-center leading-[3rem] peer-checked/story:bg-[#C40F37] peer-checked/story:text-[#fff] peer-checked/story:border-[#C40F37]"
          >
            <Link to={"/about/info"}>회사소개</Link>
          </label>

          <input
            id="directions"
            type="radio"
            name="about"
            value="/about/directions"
            checked={`${pathname}` === "/about/directions"}
            className="hidden peer/directions"
          />
          <label
            htmlFor="directions"
            className="border basis-0 grow text-center leading-[3rem] peer-checked/directions:bg-[#C40F37] peer-checked/directions:text-[#fff] peer-checked/directions:border-[#C40F37]"
          >
            <Link to="/about/directions">찾아오시는길</Link>
          </label>
        </nav>
      </article>
    </main>
  );
}
