export default function News() {
    return (
        <main>
            <article className="h-[18rem] max-w-[100vw] mx-auto mt-[10rem] 
            bg-visual5 bg-cover bg-no-repeat bg-center">
                <div className="h-[18rem] flex flex-col justify-center items-center gap-3">
                        <h3 className="text-[1.8rem] font-[500] tracking-wider text-white">
                            NEWS
                        </h3>
                        <div className="bg-[#c40f39] w-[3rem] h-[0.2rem]"></div>
                        <p className="text-[0.9rem] font-[300] tracking-wider text-white/80">모나미는 늘 밝고 새로운 미래를 그려나갑니다.</p>
                </div>
            </article>
        </main>
    )
}