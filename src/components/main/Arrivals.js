import { Link } from "react-router-dom"

function PlusBtn() {
    return (
        <div className="mx-auto relative w-4 h-4 transition-all duration-[1s] hover:rotate-[360deg]
        md:w-5 md:h-5
        lg:w-8 lg:h-8
        2xl:w-10 2xl:h-10"
        >
            <div className="bg-white w-4 h-[1px] absolute top-[50%]
            md:w-5 lg:w-8 2xl:w-10"></div>
            <div className="bg-white w-[1px] h-4 absolute left-[50%]
            md:h-5 lg:h-8 2xl:h-10"></div>
        </div>
    )
}

export default function Arrivals() {
    return (
        <>
            {/* 얼리버드 제품 */}
            <article id="arriveals" className="mx-auto max-w-[80rem] max-h-[56rem] my-[4rem] px-[2vw] relative">
                {/* 타이틀 */}
                <div className="absolute top-0 left-0 px-[2vw]">
                    <h2 className="text-[0.6rem] font-semibold tracking-widest font-['Montserrat'] leading-1
                    sm:text-[0.8rem]
                    md:text-[1.4rem] md:leading-7
                    lg:text-[1.6rem]
                    2xl:text-3xl 2xl:leading-10">
                        NEW <br />
                        ARRIVALS
                    </h2>
                    <div className="w-7 h-1 my-[2px] bg-[#C40F37] 
                    md:my-[0.5rem]
                    2xl:my-5"></div>
                    <p className="text-[0.55rem] text-black/70
                    md:text-[0.7rem]
                    lg:text-[0.85rem]
                    2xl:text-[1rem]">
                        가장 먼저 만나는 설레는 기다림
                    </p>
                </div>
                {/* 얼리버드 제품 */}
                <div className="flex gap-3 items-end 2xl:gap-6">
                    <div id="그리픽스" className="hover:cursor-pointer relative">
                        <div>
                            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_16808473398fw5rpdhq0.jpg"
                                alt="그리픽스 팝 샤프"
                                className="object-cover"
                            />
                        </div>
                        <Link to="/search" className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
                        bg-[#C40F37]/80 py-[5%] opacity-0 hover:opacity-100 duration-[0.7s] 
                        flex flex-col justify-center items-center
                        w-[calc(100%-0.8rem)] h-[calc(100%-0.8rem)]
                        2xl:w-[calc(100%-2rem)] 2xl:h-[calc(100%-1.8rem)]"
                        >
                            <div className="text-center">
                                <p className="text-white/60 text-[0.5rem] tracking-[0.2rem] font-['Montserrat']
                                md:text-[0.6rem]
                                lg:text-[0.8rem]
                                2xl:text-[0.75rem]"
                                >
                                    SHARP
                                </p>
                                <p className="text-white text-[0.8rem] mb-1
                                md:text-[0.9rem]
                                lg:text-[1.1rem]
                                2xl:text-[1.35rem]"
                                >
                                    그리픽스 팝 샤프
                                </p>
                            </div>
                            <PlusBtn />
                        </Link>
                    </div>

                    <div id="지퀀스" className="hover:cursor-pointer relative">
                        <div>
                            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1661135519u41sgoimnu.jpg"
                                alt="지퀀스"
                                className="object-cover" />
                        </div>
                        <Link to="/search"
                            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-[#C40F37]/80 opacity-0 hover:opacity-100 duration-[0.7s] 
                            flex flex-col justify-center items-center 
                            w-[calc(100%-0.8rem)] h-[calc(100%-0.8rem)]
                            2xl:w-[calc(100%-2rem)] 2xl:h-[calc(100%-2rem)]"
                        >
                            <div className="text-center">
                                <p className="text-white/60 text-[0.6rem] tracking-[0.2rem] font-['Montserrat']
                                md:text-[0.8rem]
                                lg:text-[1rem]
                                2xl:text-[0.75rem]"
                                >
                                    NOTE
                                </p>
                                <p className="text-white text-[0.9rem] mb-2
                                md:text-[1rem]
                                lg:text-[1.2rem]
                                2xl:text-[1.35rem]"
                                >
                                    지퀀스
                                </p>
                            </div>
                            <PlusBtn />
                        </Link>
                    </div>
                </div>

                <div id="arriBottom" className="flex gap-3 items-start mt-3
                2xl:gap-6 2xl:mt-6"
                >
                    <div id="이지클릭" className="hover:cursor-pointer relative">
                        <div>
                            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1697612774z3jp58i3nv.jpg"
                                alt="이지클릭"
                                className="object-cover" />
                        </div>
                        <Link to="/search"
                            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
                            bg-[#C40F37]/80 opacity-0 hover:opacity-100 duration-[0.7s] 
                            flex flex-col justify-center items-center
                            w-[calc(100%-0.8rem)] h-[calc(100%-0.8rem)]
                            2xl:w-[calc(100%-2rem)] 2xl:h-[calc(100%-2rem)]"
                        >
                            <div className="text-center">
                                <p className="text-white/60 text-[0.6rem] tracking-[0.2rem] font-['Montserrat']
                                md:text-[0.65rem]
                                lg:text-[0.9rem]
                                2xl:text-[0.75rem]"
                                >
                                    MARKER
                                </p>
                                <p className="text-white text-[0.8rem] mb-3
                                md:text-[0.95rem]
                                lg:text-[1.2rem]
                                2xl:text-[1.35rem]"
                                >
                                    이지클릭
                                </p>
                            </div>
                            <PlusBtn />
                        </Link>
                    </div>

                    <div id="153아이디만년필" className="hover:cursor-pointer relative">
                        <div>
                            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1681087061mb8i5l6zdx.jpg"
                                alt="153 아이디 만년필"
                                className="object-cover"
                            />
                        </div>
                        <Link to="/search" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
                        bg-[#C40F37]/80 opacity-0 hover:opacity-100 duration-[0.7s] 
                        flex flex-col justify-center items-center
                        w-[calc(100%-0.8rem)] h-[calc(100%-0.8rem)]
                        2xl:w-[calc(100%-2rem)] 2xl:h-[calc(100%-2rem)]"
                        >
                            <div className="text-center">
                                <p className="text-white/60 text-[0.6rem] tracking-[0.2rem] font-['Montserrat']
                                md:text-[0.65rem]
                                lg:text-[0.9rem]
                                2xl:text-[0.75rem]"
                                >
                                    FOUNTAIN PEN
                                </p>
                                <p className="text-white text-[0.8rem] mb-4
                                md:text-[0.95rem]
                                lg:text-[1.2rem]
                                2xl:text-[1.35rem]"
                                >
                                    153 아이디 만년필
                                </p>
                            </div>
                            <PlusBtn />
                        </Link>
                    </div>

                    <div id="클리키" className="hover:cursor-pointer relative">
                        <div>
                            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_16976119995kjxui0cgl.jpg"
                                alt="클리키 샤프"
                                className="object-cover"
                            />
                        </div>
                        <Link to="/search" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
                        bg-[#C40F37]/80 opacity-0 hover:opacity-100 duration-[0.7s] 
                        flex flex-col justify-center items-center
                        w-[calc(100%-0.8rem)] h-[calc(100%-0.8rem)]
                        2xl:w-[calc(100%-2rem)] 2xl:h-[calc(100%-2rem)] 2xl:py-[4.5rem]"
                        >
                            <div className="text-center">
                                <p className="text-white/60 text-[0.6rem] tracking-[0.2rem] font-['Montserrat']
                                md:text-[0.65rem]
                                lg:text-[0.9rem]
                                2xl:text-[0.75rem]"
                                >
                                    SHARP
                                </p>
                                <p className="text-white text-[0.8rem] mb-2
                                md:text-[0.95rem]
                                lg:text-[1.2rem]
                                2xl:text-[1.35rem]"
                                >
                                    클리키
                                </p>
                            </div>
                            <PlusBtn />
                        </Link>
                    </div>
                </div>
            </article>
        </>
    )
}