import { useState } from "react"
import CeoMessage from "./CeoMessage";
import Directions from "./Directions";
import CompanyInfo from "./CompanyInfo";

export default function About() {
    const [selectcate, setSelectcate] = useState("CEO 메시지")
    function changecate(e) {
        setSelectcate(e.target.value)
    }

    return (
        <main>
            <article className="relative h-[18rem] max-w-[100vw] mx-auto mt-[10rem] bg-visual1 bg-cover bg-no-repeat bg-center border-b border-[#666]">

                <div id="mainText" className="h-[18rem] flex flex-col justify-center items-center">
                    <h1 className="text-[1.8rem] font-[500] tracking-wider text-white">
                        모나미 소개
                    </h1>
                    <div className="w-7 h-1 bg-[#C40F37] my-3"></div>
                    <p className="text-[0.9rem] font-[300] tracking-wider text-white/80">
                        언제 어디서나 모나미는 당신 곁에 있습니다.
                    </p>
                </div>
                <nav className="absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] bg-white w-[80%] h-12 flex justify-center text-[#666]">

                    <input id="ceo" type="radio" name="about" value="CEO 메시지"
                        checked={selectcate === "CEO 메시지"}
                        className="hidden peer/ceo"
                        onChange={changecate} />
                    <label htmlFor="ceo"
                        className="border basis-0 grow text-center leading-[3rem]
                        peer-checked/ceo:bg-[#C40F37] peer-checked/ceo:text-[#fff]
                        peer-checked/ceo:border-[#C40F37]">
                        CEO 메시지
                    </label>

                    <input id="story" type="radio" name="about" value="회사소개"
                        checked={selectcate === "회사소개"}
                        className="hidden peer/story"
                        onChange={changecate} />
                    <label htmlFor="story"
                        className="border basis-0 grow text-center leading-[3rem] peer-checked/story:bg-[#C40F37] peer-checked/story:text-[#fff] peer-checked/story:border-[#C40F37]">
                        회사소개
                    </label>

                    <input id="directions" type="radio" name="about" value="찾아오시는길"
                        checked={selectcate === "찾아오시는길"}
                        className="hidden peer/directions"
                        onChange={changecate} />
                    <label htmlFor="directions"
                        className="border basis-0 grow text-center leading-[3rem] peer-checked/directions:bg-[#C40F37] peer-checked/directions:text-[#fff] peer-checked/directions:border-[#C40F37]">
                        찾아오시는길
                    </label>
                </nav>

            </article>
            {selectcate === "CEO 메시지" &&
                <CeoMessage />}
            {selectcate === "회사소개" &&
                <CompanyInfo />}
            {selectcate === "찾아오시는길" &&
                <Directions />}
        </main>
    )
}





