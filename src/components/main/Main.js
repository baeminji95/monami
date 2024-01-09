import { Link } from "react-router-dom"
import NewArrivals from "./NewArrivals"
import BestProduct from "./BestProduct"
import MainNews from "./MainNews"

export default function Main() {
    return (
        <main className="w-[100%]">
            {/* 메인이미지*/}
            <article className="max-h-[41rem] mt-[9.85rem] bg-main_visual bg-no-repeat bg-center
                md:h-[30rem]
                lg:h-[35rem]
                xl:h-[38rem]
                2xl:h-[41rem]">

                <div id="mainText" className="h-[26rem] max-w-[88rem] pt-16 px-8 mx-auto
                    sm:pt-[3.2rem]
                    md:pt-[6rem] md:px-12
                    lg:pt-[7rem]
                    xl:pt-[8rem] xl:px-[5rem]
                    2xl:pt-[9.5rem]">
                    <div className="w-20 h-[1px] ml-2 my-[0.6rem] bg-white"></div>
                    <h1 className="text-[1.7rem] leading-tight font-extralight text-white mt-4
                        sm:text-3xl
                        lg:text-4xl
                        2xl:text-5xl 2xl:leading-[3.8rem]"
                    >
                        어쩌면 삶은 <br />
                        인생이라는 종이 위에 <br />
                        써 내려가는 <br />
                        펜의 기록 같습니다. <br />
                    </h1>
                    <p className="mt-6 text-[0.7rem] font-[300] text-white/80
                        sm:text-[0.7rem] sm:mt-3
                        md:text-[0.8rem]
                        2xl:text-[0.9rem] 2xl:mt-5"
                    >
                        그중에서도 지우고 싶지 않은 기록이 있습니다. <br />
                        모나미는 언제나 당신의 행복한 기록과 함께 합니다.
                    </p>
                    <div />
                </div>
            </article>

            <NewArrivals />

            <BestProduct />

            {/* 비디오 */}
            <video muted loop autoPlay className="w-full min-w-full">
                <source src={process.env.PUBLIC_URL + "/video/monami_brand_web_60.mp4"} type="video/mp4"/>
            </video>

            <div className="w-[100%] h-[1rem] bg-[#eee]"></div>

            <section className="w-[100%] bg-linear-gradient flex flex-col
            justify-center border border-[#ddd]
            sm:flex-row">

                <MainNews />

                <article className="w-[16rem] m-auto bg-[#ddd] flex flex-col justify-center items-center p-3
                md:m-0">
                        <img src={process.env.PUBLIC_URL + "/images/inquiry_tit_bg.png"} alt="종이와 펜 아이콘" className="pt-8" />
                    <h2 className="font-semibold text-[1.25rem] tracking-wide font-[Montserrat] pt-3">INQUIRY</h2>
                    <div className="w-7 h-1 my-[0.6rem] bg-[#C40F37]"></div>
                    <p className="text-[0.85rem] text-[#6a6a6a] tracking-wide text-center">
                        언제나 소중한 의견에
                        <br className="hidden sm:block lg:hidden" />
                        귀 기울이겠습니다. <br />
                        궁금한 사항은 문의하세요.
                    </p>

                    <Link to="/inquity" className="w-[10.5rem] h-[2.2rem] border-2 border-[#C40F37] text-center text-[#C40F37] text-[0.88rem] font-[Montserrat] leading-[2rem] mt-10
                    transform duration-[1s]
                    hover:bg-[#C40F37] hover:text-[#fff]">
                        INQUIRY NOW
                    </Link>
                </article>
            </section>

            <article id="fam-logo" className="grid grid-cols-2 gap-2 justify-center m-auto p-5
            md:flex
            lg:gap-5
            2xl:p-10 2xl:gap-8">
                <Link to="#fam-logo"
                    className="border border-[#ddd] hover:border-[#C40F37] transition ease-in-out duration-[0.3s] hover:outline hover:outline-1 hover:outline-[#C40F37]">
                        <img src={process.env.PUBLIC_URL + "/images/fam_img1.jpg"} alt="모나미몰 로고" />
                </Link>

                <Link to="#fam-logo"
                    className="border border-[#ddd] hover:border-[#C40F37] transition ease-in-out duration-[0.3s] hover:outline hover:outline-1 hover:outline-[#C40F37]">
                    <img src={process.env.PUBLIC_URL + "/images/fam_img6.jpg"} alt="모나르떼 로고" />
                </Link>

                <Link to="#fam-logo"
                    className="border border-[#ddd] hover:border-[#C40F37] transition ease-in-out duration-[0.3s] hover:outline hover:outline-1 hover:outline-[#C40F37]">
                    <img src={process.env.PUBLIC_URL + "/images/fam_img5.jpg"} alt="모나미스테이션 로고" />
                </Link>

                <Link to="#fam-logo"
                    className="border border-[#ddd] hover:border-[#C40F37] transition ease-in-out duration-[0.3s] hover:outline hover:outline-1 hover:outline-[#C40F37]">
                    <img src={process.env.PUBLIC_URL + "/images/fam_img2.jpg"} alt="모나미 모나르떼 어린이 미술대회" />
                </Link>
            </article>
        </main>
    )
}

