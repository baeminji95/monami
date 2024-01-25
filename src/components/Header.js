import { useState } from "react";
import { Link } from "react-router-dom";

const langs = [
  { name: "KOR", img: "/images/lang_kor.gif", alt: "한국 국기" },
  { name: "ENG", img: "/images/lang_eng.gif", alt: "미국 국기" },
];

export default function Header() {
  const saveLang = localStorage.getItem("lang");

  if (!saveLang) {
    localStorage.setItem("lang", "KOR");
  }

  const [selectedLang, setSelectedLang] = useState(saveLang);
  const [view, setView] = useState(false);

  function changelang(lang) {
    setSelectedLang(lang)
    localStorage.setItem("lang" , lang);
    setView(false);
  }

  return (
    <>
      <header
        id="header"
        className="w-[100%] h-16 flex justify-between z-20 items-center px-5 py-4 fixed top-0 border-b-[1px] bg-white
        sm:px-7"
      >
        <div className="flex justify-center items-center gap-3">
          <ul
            id="langBox"
            onBlur={() => setView(false)}
            className={`relative w-20 flex flex-col gap-2 border border-gray-300 rounded-md pt-[0.3rem] bg-white duration-[0.5s] ease-in-out ${
              view ? "h-[3.2rem] mt-6" : "overflow-hidden h-7"
            }`}
          >
            {langs.map((lang) => (
              <li
                key={lang.name}
                className={`${
                  selectedLang === lang.name ? "order-1" : "order-2"
                }`}
                onClick={() => changelang(lang.name)}
              >
                <div className="flex px-2 hover:cursor-pointer">
                  <img
                    className="object-none"
                    src={process.env.PUBLIC_URL + lang.img}
                    alt={lang.alt}
                  />
                  <span
                    className={`text-[11px] ml-2 ${
                      view && "hover:font-semibold"
                    }`}
                  >
                    {lang.name}
                  </span>
                </div>
              </li>
            ))}

            <button
              className={`self-center pl-5cursor-pointer
                        absolute top-[8px] right-2 ${
                          view ? "scale-y-[-1]" : ""
                        }`}
            >
              <svg
                onClick={() => setView(!view)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-2 fill-gray-500 hover:fill-[#C40F37] cursor-pointer"
              >
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
              </svg>
            </button>
          </ul>
          <div id="sns" className="flex items-center gap-2">
            <Link to="https://www.facebook.com/monami1960/?locale=ko_KR">
              <img
                src={process.env.PUBLIC_URL + "/images/sns_facebook.gif"}
                alt="페이스북"
                className="hover:cursor-pointer"
              />
            </Link>
            <Link to="https://www.instagram.com/monami_official/?hl=ko">
              <img
                src={process.env.PUBLIC_URL + "/images/sns_insta.gif"}
                alt="인스타그램"
                className="hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-2 text-gray-400 text-[0.7rem]">
            <li>
              <Link to="#" className=" font-Montserrat">HOME</Link>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/tm_bar.gif"}
                alt="경계선"
              />
            </li>
            <li>
              <Link to="#sitemap">SITE MAP</Link>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/tm_bar.gif"}
                alt="경계선"
              />
            </li>
            <li>
              <Link to="#contactus">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
