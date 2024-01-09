import { Link } from "react-router-dom"
const subsidiary = [
    {
        name: "항소",
        detail1: "PARKER/WATERMAN",
        detail2: "TOMBOW 국내 공식 수입업체",
        img: "/images/company_info2_img1.jpg",
        imgAlt: "볼펜사진",
        logo: "/images/company_info2_logo1.jpg",
        logoAlt: "항소 로고",
    },
    {
        name: "모나미 이미징 솔루션",
        detail1: "HP전산용품 &",
        detail2: "통합출력관리 서비스' 솔루션 공급",
        img: "/images/company_info2_img2.jpg",
        imgAlt: "복사기하는 여자사진",
        logo: "/images/company_info2_logo2.jpg",
        logoAlt: "모나미 이미징 솔루션 로고",
    },
    {
        name: "엠텍",
        detail1: "모나미 문구제품",
        detail2: "전문 제조 기업",
        img: "/images/company_info2_img3.jpg",
        imgAlt: "문구용품 사진",
        logo: "/images/company_info2_logo3.jpg",
        logoAlt: "엠텍 로고",
    },
    {
        name: "모나르떼",
        detail1: "철학, 역사, 예술, 과학, 경제를",
        detail2: "미술로 만나다",
        img: "/images/company_info2_img4.jpg",
        imgAlt: "웃고있는 아이들 사진",
        logo: "/images/company_info2_logo4.jpg",
        logoAlt: "모나르떼 로고"
    },
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
                                <img src={process.env.PUBLIC_URL + sub.img} alt={sub.imgAlt} />
                                <div className="w-[80%] h-[30%] absolute bottom-3 left-[50%] translate-x-[-50%] bg-white/95 flex items-center justify-between px-3">
                                    <div className="text-[0.7rem] sm:text-[1rem] md:text-[0.65rem] lg:text-[0.8rem] 2xl:[1rem]">
                                        <p>{sub.detail1}</p>
                                        <p>{sub.detail2}</p>
                                    </div>
                                    <img className="w-[40%] max-h-[80%]" src={process.env.PUBLIC_URL + sub.logo} alt={sub.logoAlt} />
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
                    {/* 세계지도 */}
                    <div className="bg-about_map bg-cover bg-center border border-white w-[100%] h-[15rem] md:h-[20rem] lg:h-[25rem]"></div>
                    {/* 해외법인 리스트 */}
                    <article className="my-10">
                        {/* 태국 방콕 */}
                        <div className="grid grid-cols-3rem_1fr gap-2 text-start font-[400] text-[0.88rem] bg-white/60 border border-[#ccc] p-10">
                            <p className="pb-2 col-span-2 text-[1.06rem] text-[#333]">
                                <span className="text-[#c40f39] font-[600] mr-3">THAILAND</span>
                                모나미 타일랜드 (방콕)
                            </p>
                            <p className="text-[#666]">법인명</p>
                            <p className="text-[#999]">MONAMI THAILAND</p>

                            <p className="text-[#666]">주소</p>
                            <p className="text-[#999]">#475 Siripinyo Bldg.,12th floor, Si Ayutthaya Rd.,Khwaeng ThanonPhayathai, Khet Ratchathewi, Bangkok 10400 Thailand</p>

                            <p className="text-[#666]">전화</p>
                            <a href="tel:+66-2-640-0980-2" target="_blank" className="text-[#999] hover:text-[#c40f39]">+66-2-640-0980-2</a>

                            <p className="text-[#666]">팩스</p>
                            <a href="tel:+66-2-640-0980-2" target="_blank" className="text-[#999] hover:text-[#c40f39]">+66-2-640-0980-2</a>

                            <p className="text-[#666]">SNS</p>
                            <a href='https://www.facebook.com/monami.thailand/' target="_blank" className="text-[#999] hover:text-[#c40f39]">www.facebook.com/monami.thailand/</a>
                        </div>
                        {/* 태국 아마타 (공장)*/}
                        <div className="grid grid-cols-3rem_1fr gap-2 text-start font-[400] text-[0.88rem] bg-white/60 border border-[#ccc] p-10">
                            <p className="pb-2 col-span-2 text-[1.06rem] text-[#333]">
                                <span className="text-[#c40f39] font-[600] mr-3">THAILAND</span>
                                모나미 타일랜드 (아마타)
                            </p>

                            <p className="text-[#666]">주소</p>
                            <p className="text-[#999]">Amata City Industrial Estate 7/281 Moo. 6 Mabyangporn, Plaukdang, Rayong 21140 Thailand</p>

                            <p className="text-[#666]">전화</p>
                            <a href="tel:+66-38-6508091-4218" target="_blank" className="text-[#999] hover:text-[#c40f39]">+66-38-6508091-4218</a>
                        </div>
                        {/* 중국 상하이 */}
                        <div className="grid grid-cols-3rem_1fr gap-2 text-start font-[400] text-[0.88rem] bg-white/60 border border-[#ccc] p-10">
                            <p className="pb-2 col-span-2 text-[1.06rem] text-[#333]">
                                <span className="text-[#c40f39] font-[600] mr-3">CHINA</span>
                                모나미 상해 (상하이)
                            </p>
                            <p className="text-[#666]">법인명</p>
                            <p className="text-[#999]">上海慕那美文化用品有限公司 (SHANGHAI MONAMI)</p>

                            <p className="text-[#666]">홈페이지</p>
                            <a href='http://www.monami.com.cn' target="_blank" className="text-[#999] hover:text-[#c40f39]">www.monami.com.cn</a>

                            <p className="text-[#666]">주소</p>
                            <p className="text-[#999]">
                                上海市嘉定区兴贤路1388号9号楼
                                <br />
                                상하이 자딩구 싱셴로 1388호 9호 빌딩
                            </p>


                            <p className="text-[#666]">전화</p>
                            <a href="tel:+86-21-69521210-69521216" target="_blank" className="text-[#999] hover:text-[#c40f39]">+86-21-69521210-69521216</a>

                            <p className="text-[#666]">팩스</p>
                            <a href="tel:+86-21-69521250-59160776" target="_blank" className="text-[#999] hover:text-[#c40f39]">+86-21-69521250-59160776</a>

                            <p className="text-[#666]">SNS</p>
                            <a href='https://weibo.com/shmonami' target="_blank" className="text-[#999] hover:text-[#c40f39]">weibo.com/shmonami</a>
                        </div>
                        {/* 폴란드 바르샤바 */}
                        <div className="grid grid-cols-3rem_1fr gap-2 text-start font-[400] text-[0.88rem] bg-white/60 border border-[#ccc] p-10">
                            <p className="pb-2 col-span-2 text-[1.06rem] text-[#333]">
                                <span className="text-[#c40f39] font-[600] mr-3">POLAND</span>
                                모나미 제니스 (바르샤바)
                            </p>

                            <p className="text-[#666]">법인명</p>
                            <p className="text-[#999]">ZENITH MONAMI</p>

                            <p className="text-[#666]">주소</p>
                            <p className="text-[#999]">ul. Poleczki 23, 02-822, Warsaw, Poland.</p>
                        </div>
                    </article>
                </section>
            </article>
        </>
    )
}