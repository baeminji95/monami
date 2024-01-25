import { useState } from "react"
import { Link } from "react-router-dom"
import { navMenu } from "./objects/Navmenu"


export default function Nav() {
    const [handleMenu, setHandleMenu] = useState(false)
    function fullMenu() {
        setHandleMenu(!handleMenu)
    }

    function toTop() {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <nav id="nav" className="w-[100%] h-24 flex text-center justify-between fixed top-[4rem] z-10 border-b-[1px] px-7 bg-white">
                {/* 로고 */}
                <Link to="/" onClick={()=>toTop} className="items-center">
                    <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="모나미로고" />
                </Link>
                {/* 메뉴 */}
                <ul className="hidden justify-between items-center gap-8
                md:flex
                lg:gap:10
                2xl:gap-16">
                    {navMenu.map(meue =>
                        <li className="relative inline-block group" key={meue.head}>
                            <Link to={meue.to} className="block text-[1.1rem] text-[#666] hover:text-[#C40F37] leading-[6rem]
                            xl:text-[1.1rem] xl:leading-[6rem]">
                                {meue.head}
                            </Link>
                            {!handleMenu &&
                                <ul 
                                    className={`h-0 overflow-hidden w-[11.2rem] absolute top-[100%] left-[50%] translate-x-[-50%] z-10 duration-500 bg-white/95 px-4 ${meue.height}`}>
                                    {meue.lists.map(l =>
                                    <li key={l.list}>
                                        <Link to={l.to} className="block text-[0.88rem] text-[#6e6e6e] hover:text-[#C40F37] border-b border-[#e1e1e1] py-4">{l.list}</Link>
                                    </li>
                                    )}
                                </ul>
                            }
                        </li>
                    )}
                </ul>


                <div className="flex items-center gap-6 hover:cursor">
                    {/* <!-- searchBtn --> */}
                    <div>
                        <Link to="/search">
                            <img src={process.env.PUBLIC_URL + '/images/btn_search.gif'}  alt="돋보기" />
                        </Link>
                    </div>
                    {/* <!-- 전체메뉴 버튼 --> */}
                    <div className="flex flex-col hover:cursor-pointer">
                        <div onClick={fullMenu} className="flex flex-col gap-[0.2]"
                        >
                            <div className={`menuBtnBar bg-gray-700 w-5 h-[2px] my-[3px] duration-300 ${handleMenu ? 'rotate-45 translate-y-[0.25rem]': ''}`}></div>
                            <div className={`menuBtnBar bg-gray-700 w-5 h-[2px] my-[3px] duration-300 ${handleMenu ? 'hidden': ''}`}></div>
                            <div className={`menuBtnBar bg-gray-700 w-5 h-[2px] my-[3px] duration-300 ${handleMenu ? 'rotate-[-45deg] translate-y-[-0.25rem]': ''}`}></div>
                        </div>
                        {/* <!-- 전체 메뉴 --> */}
                        {handleMenu &&
                            <div className="w-[95%] bg-white/90 fixed top-[10rem] left-[50%] translate-x-[-50%] flex border">
                                {navMenu.map(meue => (
                                    <div className="flex flex-grow basis-0 flex-col p-1 border-r border-[#c7c7c7]
                                    md:p-6 2xl:p-8 ">
                                        <h3 className="text-[0.7rem] font-semibold py-2 text-left
                                        md:text-[0.9rem] md:py-3
                                        2xl:text-[1.5rem]">{meue.head}</h3>
                                        <div className="w-5 h-[2px] my-1 bg-[#C40F37]"></div>
                                        {meue.lists &&
                                            meue.lists.map(l => (
                                                <Link to={l.to} 
                                                onClick={fullMenu}className="text-[0.6rem] text-[#6e6e6e] text-left py-1
                                            md:text-[0.8rem] md:py-2
                                            2xl:text-[1.1rem]">
                                                    {l.list}
                                                </Link>
                                            ))}
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}