import { Link } from "react-router-dom"
import { NewsList } from "../objects/NewsList"

export default function MainNews() {
    return (
        <>
            <article className="flex flex-col bg-[#F8F8F8] border border-[#ddd] p-4 max-w-[40rem]">
                <div className="flex justify-between items-center">
                    <h3 className="text-[1.25rem] font-[Montserrat] font-semibold tracking-wide
                    sm:text-[1rem]">
                        MONAMI NEWS
                        <div className="w-7 h-1 my-[0.6rem] bg-[#C40F37]
                        sm:my-[0.2rem]"></div>
                    </h3>
                    <Link to="/news" className="underline text-[0.7rem] text-black/70
                    sm:text-[0.5rem]">MORE</Link>
                </div>
                {/* main news */}
                <Link to="/news" className="w-[100%] mt-2 flex relative">
                    {/* 이미지 */}
                    <div className="w-[30%] bg-newsMainImg bg-cover bg-center"></div>
                    {/* 기사 */}
                    <div className="flex flex-col flex-nowrap pl-3 my-4 pb-2 w-[70%]">
                        <h4 className="text-[1rem] font-semibold overflow-hidden text-ellipsis whitespace-nowrap
                        lg:text-[1.3rem]">
                            {NewsList[0].header}
                        </h4>
                        <p className="text-[0.87rem] text-[#555] pt-2 line-clamp-2">
                            {NewsList[0].detail}
                        </p>
                        <span className="text-[0.87rem] text-[#888] text-right pt-3 absolute bottom-0 right-0">{NewsList[0].dateCreated}</span>
                    </div>
                </Link>
                <div className="flex flex-col gap-0.5 py-2">
                <div className="h-[1px] bg-[#C40F37] my-2"></div>

                    {/* sub news */}
                    <div className="flex justify-between items-center">
                        <Link to="#news" className="text-[0.87rem] text-[#555] line-clamp-1">
                            -{NewsList[1].header}
                        </Link>
                        <span className="text-[0.87rem] text-[#888] whitespace-nowrap pl-2">{NewsList
                        [1].dateCreated}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <Link to="#news" className="text-[0.87rem] text-[#555] line-clamp-1">
                            -{NewsList[2].header}
                        </Link>
                        <span className="text-[0.87rem] text-[#888] whitespace-nowrap pl-2">{NewsList
                        [2].dateCreated}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <Link to="#news" className="text-[0.87rem] text-[#555] line-clamp-1">
                            -{NewsList[3].header}
                        </Link>
                        <span className="text-[0.87rem] text-[#888] whitespace-nowrap pl-2">{NewsList
                        [3].dateCreated}</span>
                    </div>
                </div>
            </article>
        </>
    )
}