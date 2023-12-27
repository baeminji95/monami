const subsidiary = [
    {
        name: "항소",
        detail1: "PARKER/WATERMAN",
        detail2: "TOMBOW 국내 공식 수입업체",
        img: "/img/company_info2_img1.jpg",
        imgAlt: "볼펜사진",
        logo: "/img/company_info2_logo1.jpg",
        logoAlt: "항소 로고",
    },
    {
        name: "모나미 이미징 솔루션",
        detail1: "HP전산용품 &",
        detail2: "통합출력관리 서비스' 솔루션 공급",
        img: "/img/company_info2_img2.jpg",
        imgAlt: "복사기하는 여자사진",
        logo: "/img/company_info2_logo2.jpg",
        logoAlt: "모나미 이미징 솔루션 로고",
    },
    {
        name: "엠텍",
        detail1: "모나미 문구제품",
        detail2: "전문 제조 기업",
        img: "/img/company_info2_img3.jpg",
        imgAlt: "문구용품 사진",
        logo: "/img/company_info2_logo3.jpg",
        logoAlt: "엠텍 로고",
    },
    {
        name: "모나르떼",
        detail1: "철학, 역사, 예술, 과학, 경제를",
        detail2: "미술로 만나다",
        img: "/img/company_info2_img4.jpg",
        imgAlt: "웃고있는 아이들 사진",
        logo: "/img/company_info2_logo4.jpg",
        logoAlt: "모나르떼 로고"
    },
]

const OverseasCorporation =[
    {name:"모나미 타일랜드", 
    CorporationName:"MONAMI THAILAND",
    
}
]

export default function CompanyInfo() {
    return (
        <>
            <article className="py-[6rem] flex flex-col items-center tracking-[0.2rem]">
                <h3 className="text-[2.4rem] font-semibold">COMPANY
                    <span className="text-[#c40f39]"> INFO</span>
                </h3>
                <div className="w-[1.9rem] h-[0.25rem] bg-[#c40f39]"></div>
            </article>

            <article className="bg-[#dedede]">
                {/* 계열사 소개 */}
                <section className="px-10 xl:w-[80%] mx-auto">
                    <h4 className="text-[1.3rem] font-[300] py-10">
                        <span className="bg-[#c40f39] text-white p-1 mr-2">01</span>
                        계열사 소개
                    </h4>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {subsidiary.map(sub => (
                            <div className="relative mt-[3rem]">
                                <div className="absolute top-[-1.8rem] left-0 flex items-center gap-1 text-[1.1rem] font-[300]">
                                    <div className="bg-[#c40f39] w-1 h-1"></div>
                                    <p>
                                        {sub.name}
                                    </p>
                                </div>
                                <img src={sub.img} alt={sub.imgAlt} />
                                <div className="w-[80%] h-[30%] absolute bottom-3 left-[50%] translate-x-[-50%] bg-white/95 flex items-center justify-between px-3">
                                    <div className="text-[0.8rem] sm:text-[1rem] md:text-[0.65rem] lg:text-[0.8rem] 2xl:[1rem]">
                                        <p>{sub.detail1}</p>
                                        <p>{sub.detail2}</p>
                                    </div>
                                    <img className="w-[40%] max-h-[80%]" src={sub.logo} alt={sub.logoAlt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="px-10 xl:w-[80%] mx-auto mt-10">
                    <h4 className="text-[1.3rem] font-[300] py-10">
                        <span className="bg-[#c40f39] text-white p-1 mr-2">02</span>
                        해외법인
                    </h4>
                    <div className="bg-about_map bg-cover bg-center border border-white w-[100%] h-[15rem] md:h-[20rem] lg:h-[25rem]"></div>
                </section>
            </article>
        </>
    )
}