import About from "./About";

export default function CeoMessage() {
  return (
    <>
      <About />
      <article className="py-[6rem] flex flex-col items-center tracking-[0.2rem]">
        <h3 className="text-[2.4rem] font-semibold">
          CEO
          <span className="text-[#c40f39]"> MESSAGE</span>
        </h3>
        <div className="w-[1.9rem] h-[0.25rem] bg-[#c40f39]"></div>
      </article>

      <article className="w-[95%] m-auto md:w-[85%] max-w-[70rem] duration-500">
        <div className="relative p-[0.3rem]">
          <div className="bg-[#c40f39] w-[9.5rem] h-[9.5rem] absolute top-0 left-0 z-[-1]"></div>
          <img
            className="z-10"
            src={process.env.PUBLIC_URL + "/images/message_ceo.jpg"}
            alt="CEO사진"
          />

          <div className="w-[50%] h-[50%] max-w-[30rem] m-1 absolute right-[-0.5rem] md:right-[-2rem] top-[50%] translate-y-[-50%] bg-[#e3e3e3] bg-message_slg bg-center bg-cover flex justify-center items-center">
            <p
              className="m-auto pl-5 text-[1rem]
                    sm:text-[1.3rem] lg:text-[1.5rem] sm:pl-7 lg:pl-10"
            >
              항상 당신 곁의
              <br />
              <span className="text-[#c40f39]"> 소중한 친구</span>로 남겠습니다.
            </p>
          </div>
        </div>
      </article>
      <article className="relative flex gap-4 flex-col lg:flex-row lg:gap-12 p-10 text-[0.88rem] font-[400] text-[#777] lg:w-[80%] mx-auto">
        <p>
          안녕하십니까? (주)모나미 대표이사 송하경입니다.
          <br />
          <br />
          언제나 한결같이 모나미에 애정과 관심을 보여주시는 고객 및 주주
          여러분들께 깊은 감사를 드립니다.
          <br />
          <br />
          1960년 창립된 광신화학공업사에서 출발한 모나미의 역사가 어느덧
          반백년이 넘었습니다. 지금의 모나미를 있게한 ‘모나미 153’볼펜은 지난
          50여 년간 꾸준한 사랑을 받으며 모나미를 필기구의 대명사이자 국민
          브랜드로 성장시켰습니다. 이처럼 많은 분들의 사랑에 힘입어 문구 업계의
          혁신을 주도할 수 있었으며, 사인펜, 프러스펜, 네임펜, 보드 마카 등 수
          많은 히트작들을 선보일 수 있었습니다.
          <br />
          <br />
          필기구를 넘어 종합문구 분야의 선도적인 기업으로 건실한 성장을 이뤄온
          모나미는 국내시장 뿐 아니라 해외시장에서도 꾸준한 성장을 거둬 전세계
          다양한 국가로 수출되고 있습니다.
          <br />
          <br />
          하지만 모나미는 지난 50여 년간의 성과에 만족하지 않고 새로운 출발에
          나서려고 합니다.
        </p>

        <p className="pb-10">
          종합문구분야의 선두 자리를 넘어 문구와 유통을 아우르는 새로운 비즈니스
          모델을 만들어 나가고 있습니다. 하루가 다르게 변하는 트렌드와 시대의
          변화에 대처하기 위해서 모나미의 기업 문화 역시 새롭게 만들어 나가고
          있습니다. 미래를 긍정적으로 바라보면서 준비하고, 항상 즐거운 변화를
          추구하는 기업이 되겠습니다. 시장에 대해서는 항상 겸손하고, 고객에
          대해서는 항상 함께하는 친구 같은 마음과 자세로 대할 것입니다.
          <br />
          <br />
          앞으로 모나미는 '오래된 친구지만 항상 신선하고 놀라움으로 가득찬,
          그리고 미래를 위해 쉼 없이 노력하는' 기업이 되고자 합니다. 모나미의
          새로운 변화와 도전을 지켜봐 주시길 바라며, 앞으로도 변함없는 사랑과
          격려를 부탁드립니다.
          <br />
          <br />
          감사합니다.
        </p>
        <div className="flex items-center gap-5 absolute bottom-0 right-0 m-10">
          <p className="text-[1rem] text-[#555]">(주)모나미 대표</p>
          <img
            src={process.env.PUBLIC_URL + "/images/message_sign.jpg"}
            alt="송하경대표 사인"
          />
        </div>
      </article>
    </>
  );
}
