import { useState, useRef } from "react";
import Header from "./Header";
import Nav from "./Nav";
import TopButton from "./TopButton";
import { isName, isEmail, isNum } from "../utils/validatop";

export default function Inquity() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [header, setHeader] = useState(false);
  const [detail, setDetail] = useState(false);

  const [isDropdwonView, setDropdwonView] = useState(false);
  const [selectInquiry, setSelectInquiry] =
    useState("문의내용을 선택해 주세요.");

  const disabled =
    !isEmail(email) ||
    !isName(name) ||
    !isNum(num) ||
    !header ||
    !detail ||
    selectInquiry === "문의내용을 선택해 주세요.";

  function handleDropdwon() {
    setDropdwonView(!isDropdwonView);
  }
  function handleBlur() {
    setDropdwonView(false);
  }
  function select(e) {
    setSelectInquiry(e.target.id);
  }
  const [fileName, setFileName] = useState("파일을 업로드해주세요.");
  function changeFileName(e) {
    if (e.target.value) {
      setFileName(e.target.value.split("\\")[2]);
      console.log(e.target.value.split("\\")[2]);
    }
  }
  const fileInput = useRef("");

  function ClearAttachment() {
    fileInput.current.value = "";
    setFileName("파일을 업로드해주세요.");
  }

  const [submit, setSubmit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();

    if (disabled === false) {
      return (
        setSubmit(true),
        window.scroll({
          top: 0,
          behavior: "smooth",
        })
      );
    }
  }

  return (
    <>
      <Header />
      <Nav />
      <TopButton />
      <main>
        <article
          className="h-[18rem] max-w-[100vw] mx-auto mt-[10rem] bg-visual4 bg-cover bg-no-repeat bg-center"
        >
          <div className="h-[18rem] flex flex-col justify-center items-center gap-3">
            <h3 className="text-[1.8rem] font-[500] tracking-wider text-white">
              고객지원
            </h3>
            <div className="bg-[#c40f39] w-[3rem] h-[0.2rem]"></div>
            <p className="text-[0.9rem] font-[300] tracking-wider text-white/80">
              모나미는 언제나 소중한 의견에 귀 기울이겠습니다.
            </p>
          </div>
        </article>

        <div className="bg-inquity_bg bg-cover bg-center p-12 max-w-[100rem] mx-auto my-10">
          {submit ? (
            <div className="flex-col items-center justify-center">
              <p className=" text-white text-[1.2rem] font-[300]">
                문의주셔서 감사합니다.
                <br />
                빠른 시간내로 답변드리겠습니다.
              </p>
              <button onClick={()=> setSubmit(false)} className="text-center text-white text-[1rem] border rounded-lg px-4 py-1 mt-5">추가로 질문하기</button>
            </div>
          ) : (
            <>
              <h4 className="col-span-2 text-white text-[3rem] pb-7">
                CONTACT US
              </h4>

              <form className="flex flex-col text-white w-[20rem] lg:w-[27rem] 2xl:w-[35rem] mx-auto duration-500">
                <label htmlFor="selsct" className="text-[1.2rem] font-semibold">
                  문의내용
                  {selectInquiry === "문의내용을 선택해 주세요." && <span className="text-[0.8rem] font-[400] ml-2 text-yellow-300">
                    * 문의내용이 선택되지 않았습니다.
                  </span>}
                  <button
                    id="selsct"
                    onClick={handleDropdwon}
                    onBlur={handleBlur}
                    className="relative border rounded-md px-2 py-1 w-full flex justify-between"
                  >
                    {selectInquiry}
                    <span className="text-center">
                      {isDropdwonView ? "△" : "▽"}
                    </span>
                      <ul className={`w-[100%] absolute top-[90%] left-[50%] h-0 overflow-hidden translate-x-[-50%] text-[#464646] bg-white rounded-md border-amber-950 mt-[0.3rem] duration-300 ${isDropdwonView && 'h-[8.15rem] border-2 px-2 py-1'}`} >
                        <li
                          onClick={select}
                          id="제품문의(대량구매 포함)"
                          className="border-b hover:bg-[#c40f39] hover:text-white"
                        >
                          제품문의(대량구매 포함)
                        </li>
                        <li
                          onClick={select}
                          id="제안사항(콜라보레이션 포함)"
                          className="border-b hover:bg-[#c40f39] hover:text-white"
                        >
                          제안사항(콜라보레이션 포함)
                        </li>
                        <li
                          onClick={select}
                          id="기타문의"
                          className="border-b hover:bg-[#c40f39] hover:text-white"
                        >
                          기타문의
                        </li>
                        <li
                          onClick={select}
                          id="산업용 제품문의"
                          className=" hover:bg-[#c40f39] hover:text-white"
                        >
                          산업용 제품 문의
                        </li>
                      </ul>
                    
                  </button>
                </label>

                <div className="h-[1px] bg-white my-3"></div>

                <label htmlFor="name" className="text-[1.2rem] font-semibold">
                  이름
                  {!isName(name) && <span className="text-[0.8rem] font-[400] ml-2 text-yellow-300">
                    * 이름을 확인해주세요.(한글만 입력)
                  </span>}
                </label>
                <input
                  id="name"
                  type="text"
                  spellCheck="false"
                  className="px-2 py-1 rounded-md mb-3 text-[#464646] outline-[#464646]"
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />

                <label htmlFor="email" className="text-[1.2rem] font-semibold">
                  이메일
                  {!isEmail(email) && <span className="text-[0.8rem] font-[400] ml-2 text-yellow-300">
                    * 이메일을 확인해주세요.
                  </span>}
                </label>
                <input
                  id="email"
                  type="email"
                  className="px-2 py-1 rounded-md mb-3 text-[#464646] outline-[#464646]"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />

                <label htmlFor="tel" className="text-[1.2rem] font-semibold">
                  연락처
                  {!isNum(num) && <span className="text-[0.8rem] font-[400] ml-2 text-yellow-300">
                    * 전화번호를 확인해주세요.
                  </span>}
                  <span className="text-[0.7rem] text-[#ddd]">
                    
                  </span>
                </label>
                <input
                  id="tel"
                  type="text"
                  placeholder="-없이 숫자만 입력해 주세요."
                  spellCheck="false"
                  maxLength={11}
                  className="px-2 py-1 rounded-md mb-3 text-[#464646] outline-[#464646]"
                  value={num}
                  onChange={({ target }) => setNum(target.value)}
                />

                <div className="h-[1px] bg-white my-3"></div>

                <label htmlFor="header" className="text-[1.2rem] font-semibold">
                  제목
                  {!header && <span className="text-[0.8rem] font-[400] ml-2 text-yellow-300">
                    * 제목을 입력해 주세요.
                  </span>}
                </label>
                <input
                  id="header"
                  spellCheck="false"
                  className="text-[#464646] rounded-md px-2 py-1 outline-[#464646]"
                  onChange={({ target }) =>
                    target.value.length > 0 ? setHeader(true) : setHeader(false)
                  }
                />

                <label htmlFor="detail" className="text-[1.2rem] font-semibold">
                  내용{!detail && <span className="text-[0.8rem] font-[400] ml-2 text-yellow-300">
                    * 10글자 이상 적어주세요.
                  </span>}
                </label>
                <textarea
                  id="detail"
                  spellCheck="false"
                  placeholder="내용을 입력해 주세요.(최소 10글자)"
                  className="text-[#464646] resize-none h-28 rounded-md px-2 py-1 overflow-y-scroll outline-[#464646]"
                  onChange={({ target }) =>
                    target.value.length > 10
                      ? setDetail(true)
                      : setDetail(false)
                  }
                />

                <div className="flex justify-between items-center mt-4 py-2 bg-white/30 rounded-md">
                  <p className="shrink grow overflow-hidden ml-3 text-ellipsis whitespace-nowrap">
                    {fileName}
                  </p>

                  {fileName !== "파일을 업로드해주세요." && (
                    <span
                      className="hover:text-[#c40f39] hover:cursor-pointer text-center px-1 text-[1.5rem] hover:font-[700]"
                      onClick={ClearAttachment}
                    >
                      ×
                    </span>
                  )}
                  <label
                    htmlFor="file"
                    className="border-2 font-semibold p-1 mx-3 rounded-md shrink-0 hover:text-[#c40f39] hover:border-[#c40f39] transform duration-[0.5s]"
                  >
                    첨부파일
                  </label>
                  <input
                    id="file"
                    ref={fileInput}
                    type="file"
                    className="hidden"
                    onChange={changeFileName}
                  />
                </div>

                <div className="h-[1px] bg-white my-3"></div>

                <button
                  type="submit"
                  className="mx-auto px-5 py-1 border-2 rounded-md text-center text-[#fff] font-bold duration-[0.5s] hover:bg-[#C40F37] hover:text-[#fff] disabled:hover:bg-[#474747] peer"
                  disabled={disabled}
                  onClick={handleSubmit}
                >
                  S E N D
                </button>
                {disabled ? <p id="tooltip" className="opacity-0 npm mx-auto px-3 py-2 w-[12rem] mt-3 peer-hover:opacity-100 duration-[0.5s] relative bg-[#474747] rounded-md text-white text-center">유효하지않습니다. <br/>입력 칸을 확인해 주세요.</p>
                : 
                <p className="h-[3rem] py-2 my-3"></p>}
              </form>
            </>
          )}
        </div>
      </main>
    </>
  );
}
