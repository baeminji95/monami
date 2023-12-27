import { useState, useRef } from "react"
import Header from "./Header"
import Nav from "./Nav"
import TopButton from "./TopButton"

export default function App() {

    const [isDropdwonView, setDropdwonView] = useState(false)
    const [selectInquiry, setSelectInquiry] = useState("문의내용을 선택해 주세요.")
    function handleDropdwon() {
        setDropdwonView(!isDropdwonView)
    } 
    function handleBlur() {
        setDropdwonView(false)
    }
    function select(e) {
        setSelectInquiry(e.target.id)
    }
    const [fileName, setFileName] = useState("파일을 업로드해주세요.")
    function changeFileName(e) {
        if (e.target.value) {
            setFileName(e.target.value.split('\\')[2])
            console.log(e.target.value.split('\\')[2])
        }
    }
    const fileInput = useRef("");

    function ClearAttachment() {
        fileInput.current.value = "";
        setFileName("파일을 업로드해주세요.")
    }
    return (
        <>
            <Header />
            <Nav />
            <TopButton />
            <main>
                <article className="h-[18rem] max-w-[100vw] mx-auto mt-[10rem] 
                bg-visual4 bg-cover bg-no-repeat bg-center">
                    <div className="h-[18rem] flex flex-col justify-center items-center gap-3">
                        <h3 className="text-[1.8rem] font-[500] tracking-wider text-white">
                            고객지원
                        </h3>
                        <div className="bg-[#c40f39] w-[3rem] h-[0.2rem]"></div>
                        <p className="text-[0.9rem] font-[300] tracking-wider text-white/80">모나미는 언제나 소중한 의견에 귀 기울이겠습니다.</p>
                    </div>
                </article>

                {/* <div className="w-[100%] py-[4rem] text-[3rem] font-semibold flex gap-3 flex-col items-center">
        <h3>MONAMI <span className="text-[#c40f39]">INQUITY</span></h3>
        <div className="bg-[#c40f39] w-[4rem] h-[0.3rem]"></div>
      </div> */}

                <div className="bg-inquity_bg bg-cover bg-center p-12 max-w-[100rem] mx-auto my-10">

                    <h4 className="col-span-2 text-white text-[3rem] pb-7">CONTACT US</h4>

                    <form className="flex flex-col text-white w-[18rem] mx-auto">
                        <label htmlFor="selsct" className="text-[1.2rem] font-semibold">문의내용
                            <button id="selsct" onClick={handleDropdwon} onBlur={handleBlur} className="relative border rounded-md px-2 py-1 w-[18rem] flex justify-between">
                                {selectInquiry}
                                <span className="text-center">
                                    {isDropdwonView ? '▲' : '▼'}
                                </span>
                                {isDropdwonView &&
                                    <ul className="absolute top-[90%] left-[50%] translate-x-[-50%] w-[100%] text-amber-950 bg-white border-2 rounded-md px-2 py-1 mt-1">
                                        <li onClick={select} id="제품문의(대량구매 포함)"
                                            className="border-b hover:text-[#c40f39]">
                                            제품문의(대량구매 포함)
                                        </li>
                                        <li onClick={select} id="제안사항(콜라보레이션 포함)"
                                            className="border-b hover:text-[#c40f39]">
                                            제안사항(콜라보레이션 포함)
                                        </li>
                                        <li onClick={select} id="기타문의"
                                            className="border-b hover:text-[#c40f39]">
                                            기타문의
                                        </li>
                                        <li onClick={select} id="산업용 제품문의"
                                            className="hover:text-[#c40f39]">
                                            산업용 제품 문의
                                        </li>
                                    </ul>
                                }
                            </button>
                        </label>

                        <div className="h-[1px] bg-white my-3"></div>

                        <label htmlFor="name" className="text-[1.2rem] font-semibold">이름</label>
                        <input id="name" type="text" spellCheck="false" className="px-2 py-1 rounded-md mb-3 text-amber-950" />

                        <label htmlFor="email" className="text-[1.2rem] font-semibold">이메일</label>
                        <input id="email" type="email" className="px-2 py-1 rounded-md mb-3 text-amber-950" />

                        <label htmlFor="tel" className="text-[1.2rem] font-semibold">연락처</label>
                        <div id="tel" className="flex flex-nowrap gap-1 items-center">
                            <p>010</p>
                            <span>-</span>
                            <input className="text-amber-950 rounded-md px-2 py-1 grow w-[4rem]"
                                type="text" maxLength={4} spellCheck="false" />
                            <span>-</span>
                            <input className="text-amber-950 rounded-md px-2 py-1 grow w-[4rem]"
                                type="text" maxLength={4} spellCheck="false" />
                        </div>

                        <div className="h-[1px] bg-white my-3"></div>

                        <label htmlFor="header" className="text-[1.2rem] font-semibold">제목</label>
                        <input id="header" spellCheck="false" className="text-amber-950 rounded-md px-2 py-1" />

                        <label htmlFor="detail" className="text-[1.2rem] font-semibold">내용</label>
                        <textarea id="detail" spellCheck="false" placeholder="내용을 입력해 주세요." className="text-amber-950 rounded-md px-2 py-1 overflow-y-scroll" />


                        <div className="flex justify-between items-center mt-4 py-2 bg-white/30 rounded-md">
                            <p className="shrink grow overflow-hidden ml-3 text-ellipsis whitespace-nowrap">{fileName}
                            </p>

                            {fileName !== "파일을 업로드해주세요." &&
                                <span className="hover:text-[#c40f39] hover:cursor-pointer text-center px-1 text-[1.5rem]"
                                    onClick={ClearAttachment}>
                                    ×
                                </span>
                            }
                            <label htmlFor="file" className="border-2 font-semibold p-1 mx-3 rounded-md shrink-0 hover:text-[#c40f39] hover:border-[#c40f39] transform duration-[0.3s]">첨부파일</label>
                            <input id="file" ref={fileInput} type="file" className="hidden" onChange={changeFileName} />
                        </div>

                        <div className="h-[1px] bg-white my-3"></div>

                        <button className="mx-auto px-5 py-1 border-2 rounded-md text-center text-[#fff] font-bold
                        transform duration-[1s] hover:bg-[#C40F37] hover:text-[#fff]"
                        type="submit">
                            S E N D
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}