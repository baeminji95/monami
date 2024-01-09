import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function Directions() {
    return (
        <>
            <article className="py-[6rem] flex flex-col items-center tracking-[0.2rem]">
                <h3 className="text-[2.4rem] font-semibold">MONAMI
                    <span className="text-[#c40f39]"> CONTACT</span>
                </h3>
                <div className="w-[1.9rem] h-[0.25rem] bg-[#c40f39]"></div>
            </article>

            <article className="w-[90%] xl:w-[80%] m-auto">
                <section className="lg:flex">
                    {/* 카카오맵 */}
                    <div className="w-[100%] h-[30rem] border-2 border-gray-200">
                        <Map
                            center={{
                                lat: 37.3355579, lng: 127.1006789
                            }}
                            style={{ width: "100%", height: "100%" }}
                        >
                            <MapMarker position={{ lat: 37.3355579, lng: 127.1006789 }}>
                            </MapMarker>
                        </Map>
                    </div>

                    {/* 정보 */}
                    <div className="min-w-[27rem] lg:h-[30rem] p-10 bg-[#363636] text-white text-[0.95rem] font-[300] md:flex md:gap-5 md:justify-between lg:flex-col">
                        <div>
                            <img src={process.env.PUBLIC_URL + "/images/location_logo.jpg"} alt="모나미 로고 흑백반전" />
                            <h4 className="text-[1.45rem] my-3">모나미 본사 오시는 길</h4>

                            <div className="w-[1.6rem] h-[0.2rem] bg-white"></div>

                            <div className="grid grid-cols-3rem_1fr my-7 lg:mb-0">
                                <p className="row-span-2">ADDRESS</p>
                                <p>경기도 용인시 수지구 손곡로 17</p>
                                <p className="mb-2">(구)경기도 용인시 수지구 동천동 854-2</p>

                                <p className="row-span-2">TEL</p>
                                <p className="">031-216-0153 / 080-022-0153</p>
                            </div>
                        </div>
                        <div className="grow w-[100%] md:w-[50%] lg:w-[100%] h-[20rem] bg-office_img bg-center bg-no-repeat"></div>
                    </div>
                </section>

                {/* 찾아오는 방법 */}
                <section className="text-[#777] text-[0.9rem] font-[400] lg:flex my-5 border-2 border-gray-200">
                    <div className="lg:w-[50%] flex flex-col items-center p-7 gap-4 ">
                        <img className="w-10" src={process.env.PUBLIC_URL + "/images/location_bg1.gif"} alt="자동차 이모지" />
                        <p className="text-[#c40f39] font-[600]">자가용 이용 시</p>
                        <ul className="w-[100%]">
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-[#c40f39] mr-2"></div>
                                판교IC를 빠져 나와 '수지/신갈' 방향으로 오시면 됩니다.
                            </li>
                        </ul>
                    </div>

                    <div className="lg:w-[50%] flex flex-col items-center p-7 gap-4 border-t-2 lg:border-t-0 lg:border-l-2">
                        <img className="w-10" src={process.env.PUBLIC_URL + "/images/location_bg2.gif"} alt="지하철 이모지" />
                        <p className="text-[#c40f39] font-[600]">대중교통 이용 시</p>
                        <ul className="w-[100%]">
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-[#c40f39] mr-2"></div>
                                지하철 : 신분당선 동천역 2번 출구 도보 10분 거리
                            </li>

                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-[#c40f39] mr-2"></div>
                                일반버스 :
                            </li>
                            <li className="ml-3">
                                분당선 미금역 7번 출구에서 버스 11번을 이용, 프레시원 정거장 하차
                                또는 700-2번, 5번을 이용, KT 수지지사.물류센터 정거장 하차
                            </li>

                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-[#c40f39] mr-2"></div>
                                광역버스 :
                            </li>
                            <li className="ml-3">
                                M4101번 (종로,을지로,남대문→동천동 현대홈타운2차아파트 정거장 하차)
                                6900번(잠실→동천동 현대홈타운2차아파트 정거장 하차)
                            </li>

                        </ul>
                    </div>
                </section>
            </article>

        </>
    )
}