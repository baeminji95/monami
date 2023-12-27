import { Link } from "react-router-dom"

export default function Footer() {
    const familysite = [
        { name: "모나미몰", to: "#fam-list" },
        { name: "모나리떼", to: "#fam-list" },
        { name: "모나미 컨셉스토어", to: "#fam-list" },
        { name: "주식회사 황소", to: "#fam-list" },
        { name: "모나미 스테이션", to: "#fam-list" },
        { name: "모나미 미술대회", to: "#fam-list" },
        { name: "모나미 기업서비스", to: "#fam-list" },
        { name: "모나미 코스메틱", to: "#fam-list" },
    ]
    return (
        <footer id="footer" className="h-[100%] py-[3rem] px-3 bg-[#111]">
            {/* logo & 회사소개,정보처리 */}
            <article className="w-[95%] m-auto flex justify-between ">
                <img src="img\foot_logo.jpg" alt="모나미 로고 흑백반전" />

                <div className="flex gap-2 items-center font-semibold text-[0.6rem] text-white/30
                sm:text-[0.7rem]
                xl:text-[0.8rem]
                2xl:text-[0.88rem]">
                    <Link to="#footer">회사소개</Link>
                    <div className="w-[1px] h-[0.6rem] bg-white/30"></div>
                    <Link to="#footer">개인정보처리방침</Link>
                    <div className="w-[1px] h-[0.6rem] bg-white/30"></div>
                    <Link to="#footer">이메일무단수집거부</Link>
                </div>
            </article>
            {/* hr */}
            <div className="mx-auto w-[100%] h-[1px] my-[2rem] bg-white/10"></div>
            {/* 인포 */}
            <article className="w-[95%] m-auto flex flex-col justify-between
        lg:flex-row xl:flex-row 2xl:flex-row">
                <div className="flex flex-col
            sm:flex-row sm:justify-between">
                    <div>
                        <p className="font-semibold text-[0.95rem] text-white font-['Montserrat']">
                            INFO</p>
                        {/* 주소 */}
                        <div className="flex flex-col 
                    2xl:flex-row 2xl:items-center 2xl:gap-2">
                            <p className="text-[0.9rem] text-white/30">
                                ADDRESS:경기도 용인시 수지구 손곡로 17</p>
                            <div className="hidden w-[1px] h-[0.8rem] bg-white/30"></div>
                            <p className="text-[0.9rem] text-white/30">
                                TEL : 031-216-0153</p>
                            <div className="hidden w-[1px] h-[0.8rem] bg-white/30"></div>
                            <p className="text-[0.9rem] text-white/30">
                                FAX : 031-270-5154</p>
                        </div>
                        <p className="text-[0.75rem] text-white/30 pb-4
                    sm:pb-4">
                            COPYRIGHT(C) 2017 MONAMI.CO.,LTD. ALL RIGHTS RESERVED.</p>
                    </div>
                    {/* 고객센터 */}
                    <div className="lg:ml-10 2xl:py-4">
                        <p className="text-[0.95rem] text-white font-semibold font-['Montserrat']
                    2xl:text-[0.95rem]">CUSTOMER CENTER</p>
                        <p className="text-[0.9rem] text-white/30
                    pb-4
                    2xl:text-[1.5rem]">080-022-0153</p>
                    </div>
                </div>

                {/* family site */}
                <div className="relative group w-[15.1rem] h-[2.1rem] " >
                    <button className="w-[15.1rem] h-[2.1rem] border-2 p-2 border-white/30 cursor-pointer text-white/40 text-left text-[0.8rem]
                    flex justify-between items-center
                    2xl:px-3">
                        <Link to="#fam-list" className="font-semibold">FAMILY SITE</Link>
                        <span className="text-[1rem]">+</span>
                    </button>

                    <div
                        className="hidden w-[15.1rem] absolute border border-white/30 rounded-lg left-0 top-[auto] bottom-[100%] z-10 overflow-auto group-hover:block bg-[#111]">
                        {familysite.map(list => (
                            <Link to={list.to} key={list.name} className="block text-white/60 text-[0.8rem] p-2 border-t border-white/30 hover:font-semibold hover:text-white/80">
                                {list.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </article>
        </footer>
    )
}