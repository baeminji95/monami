import { useState } from "react"
import { Link } from "react-router-dom"
import { Products } from "../objects/Products"

const FILTER_MAP = {
    펜: ({ category }) => category[0] === "펜",
    마카: ({ category }) => category[0] === "마카",
    형광펜: ({ category }) => category[0] === "형광펜",
    미술용품: ({ category }) => category[0] === "미술용품",
}
const FILTER_NAME = Object.keys(FILTER_MAP)

export default function BestProduct() {
    const [filter, setFilter] = useState("펜")
    const filterBtns = FILTER_NAME.map(name => (
        <button
            key={name}
            className="label max-w-[9.7rem] h-[2.15rem] flex-grow border-2 border-[#bcbcbc] 
            text-[#898989] text-center text-[0.9rem] leading-[2rem]
            hover:border-[#888] hover:text-[#666]
            disabled:border-[#c40f37] disabled:text-[#c40f37]"
            onClick={() => setFilter(name)}
            disabled={name === filter}
        >
            {name}
        </button>
    ))

    const productList = Products.filter(FILTER_MAP[filter])
        .map(product => (
            <li key={product.name} className="list-none">
                <Link to="/search" className="block overflow-hidden">
                    <img src={product.src} alt={product.alt}
                        className="w-[10rem] h-[15.1rem] max-w-none hover:scale-110 duration-[0.7s]
                            lg:w-[16rem] lg:h-auto"/>
                    <div className="bg-white h-24 pl-[10%] pt-9
                        lg:h-[6.5rem]">
                        <div className="text-[0.65rem] text-[#b3b3b3] 
                            lg:text-[0.75rem]">{product.smallCategory}</div>
                        <p className="text-[0.8rem] font-semibold 
                            lg:text-[0.95rem]">{product.name}</p>
                    </div>
                </Link>
            </li>
        ))

    return (
        <>
            <article className="bg-[#eee] py-[5rem]">
                {/* 타이틀 */}
                <div className="flex flex-col justify-center items-center pb-10">
                    <h2 className="text-[1.5rem] tracking-[0.25rem] font-semibold text-center 
                    sm:text-[2rem]">
                    BEST PRODUCT
                    </h2>
                    <div className="w-7 h-1 my-[0.4rem] bg-[#C40F37] sm:my-[0.6rem]"></div>
                    <p className="text-[0.7rem] tracking-wide pt-[0.15rem] text-black/70
                    sm:text-[0.85rem]">
                        언제 어디서나 생활 속에 함께하는 모나미
                    </p>
                </div>
                {/* 카테고리 */}
                <div className="flex flex-wrap justify-center items-center gap-1 px-2">
                    {filterBtns}

                    <div className="w-[100vw]"></div>

                    <div className="mt-10 w-[90%]">
                        <div className="flex gap-5 px-[1.25rem] flex-nowrap overflow-x-auto scrollbar-hide">
                            {productList}
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}