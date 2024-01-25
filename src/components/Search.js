import { useState } from "react";
import { Products } from "./objects/Products";
import { Link } from "react-router-dom";
import Header from "./Header"
import Nav from "./Nav"
import TopButton from "./TopButton"

export default function Search() {
    const [searchInput, setSearchInput] = useState('')
    const filterdItems = Products.filter(
        (product) =>
            product.name.toLocaleLowerCase().includes(searchInput.toLowerCase())
            ||
            product.category.includes(searchInput.toLowerCase())
            ||
            product.smallCategory.includes(searchInput.toLowerCase())
    )

    return (
        <>
            <Header />
            <Nav />
            <TopButton />
            <article className="h-[18rem] max-w-[100vw] mx-auto mt-[10rem] bg-visual2 bg-cover bg-no-repeat bg-center">

                <div id="mainText" className="h-[18rem] flex flex-col justify-center items-center">
                    <h1 className="text-[1.8rem] font-[500] tracking-wider text-white">
                        모나미 제품
                    </h1>
                    <div className="w-7 h-1 bg-[#C40F37] my-3"></div>
                    <p className="text-[0.9rem] font-[300] tracking-wider text-white/80">
                        모나미는 당신의 행복한 기록과 늘 함께합니다.
                    </p>
                </div>
            </article>

            <section>
                <article>
                    <div className="w-[100%] mx-auto flex flex-col gap-5 justify-center items-center py-4 lg:py-8">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[1.8rem] font-semibold tracking-widest">
                                PRODUCT <span className="text-[#C40F37]">DETAIL SEARCH</span>
                            </h1>
                            <div className="w-7 h-1 bg-[#C40F37] mt-1"></div>
                        </div>
                        {/* 검색창 */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="S e a r c h"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                maxLength={15}
                                spellcheck="false"
                                className="h-12 w-[20rem] border-4 rounded-[3rem] placeholder:font-['Montserrat'] border-[#ddd]/80 pl-4 outline-none text-[0.8rem] text-[#999]">
                            </input>
                        </div>
                    </div>
                </article>
                {/* 제품 */}
                <article className="p-4">
                    <div className="pt-4">
                        <p className="text-[0.8rem] text-[#777] pb-2">총 <span id="productEa">{filterdItems.length}</span>개의 상품이 검색되었습니다.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        2xl:grid-cols-8">
                        {filterdItems.map((product =>
                            <div>
                                <Link to="/search" className="block overflow-hidden rounded-[1rem] outline outline-1 outline-[#ddd] 
            hover:outline hover:outline-[3px] hover:outline-[#C40F37]">
                                    <img src={product.src}
                                        alt={product.alt} className="hover:scale-110 duration-[0.7s]" />
                                    <div className="bg-white px-[10%] py-4">
                                        <div className="text-[0.65rem] text-[#b3b3b3] font-[Montserrat]">{product.smallCategory}</div>
                                        <p className="text-[0.8rem] h-[2.3rem] self-center font-semibold font-[Montserrat]">{product.name}</p>
                                    </div>
                                </Link>
                            </div>

                        ))}
                    </div>
                </article>
            </section >
        </>
    )
};