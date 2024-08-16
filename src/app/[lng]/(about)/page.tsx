"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import logo_viva from "../../../../public/images/viva_logo.jpg";
import pointed_bg from "../../../../public/images/point_black_wave.png";
import { HiArrowDownRight, HiArrowLongRight } from "react-icons/hi2";
import {
  Carousel,
  InfiniteHorizontalScroll,
  ScrollArrays,
} from "@/components/carousel";
import { BIZ_UDGothic } from "next/font/google";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useContext, useEffect, useState, useTransition } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useAsyncStorage, useDeviceType } from "../../../hooks/index";
import { EDeviceScreen } from "@/utils/enum/IDevices";
import { EAsyncStorageState } from "@/utils/enum/EAsyncKeys";
import { ContextWeb } from "@/context/context";
import { useTranslation } from "../../../../i18n/client";
import { Trans } from "react-i18next";

const bIZ_UDGothic = BIZ_UDGothic({ subsets: ["latin"], weight: "400" });
interface ICardTo {
  text: string;
  description?: string;
  imageUrl?: string | StaticImageData;
  second_imageUrl?: string | StaticImageData | StaticImport;
  bg_color?: string;
  shouldHaveQuotes: boolean;
}

interface IParamsType {
  params: {
    lng: string;
  };
}
/**
 *
 * @param lng
 * @returns /lng/page.tsx
 */
export default function Home({ params }: IParamsType) {
  const { lng } = params;
  const { t } = useTranslation(lng, "translation", undefined);
  const { getStorageData, setStorageData } = useAsyncStorage();
  // const { themeLanguage, setThemeLanguage } = useThemeLanguage();

  function scrollIntoSection(section: string) {
    const element = document.getElementById(section);

    return element?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    console.log({ lng });
  }, [lng]);

  const DonationCarousel: React.ElementType = () => {
    interface cardDon {
      id: number;
      title: string;
      subtitle: string;
      image: string;
      bg_Color: string;
      btnText: string;
    }
    const [currentIndex, setCurrentIndex] = useState(1);
    const [currentDevice, setCurrentDevice] = useState(EDeviceScreen.unknown);
    const [slideDirection, setSlideDirection] = useState("");
    const [slideDirectionAnimation, setSlideDirectionAnimation] = useState("");
    const [isSliding, setIsSliding] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [items, setItems] = useState<cardDon[]>([
      {
        id: 1,
        title: t("bronzeTitle"),
        subtitle: t("bronzeSubtitle"),
        image:
          "data:image/png;base64,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",
        bg_Color: "bg-pallet_bg_bronze_don",
        btnText: t("bronzeBtnText"),
      },
      {
        id: 2,
        title: t("goldTitle"),
        subtitle: t("goldSubtitle"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png",
        bg_Color: "bg-pallet_bg_gold_don",
        btnText: t("goldBtnText"),
      },
      {
        id: 3,
        title: t("silverTitle"),
        subtitle: t("silverSubtitle"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png",
        bg_Color: "bg-pallet_bg_silver_don",
        btnText: t("silverBtnText"),
      },
    ]);

    const handleNext = () => {
      setSlideDirection("next");
      // setCurrentIndex((currentIndex + 1) % items.length);
    };

    const handlePrev = () => {
      setSlideDirection("prev");
      // setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };

    const device = useDeviceType();

    useEffect(() => {
      if (slideDirection) {
        setIsSliding(true);
        const timeout = setTimeout(() => {
          handleSlide(slideDirection);
          setSlideDirection("");
          setIsSliding(false);
        }, 500); // Duração da animação
        return () => clearTimeout(timeout);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slideDirection]);

    useEffect(() => {
      setCurrentDevice(device);
      console.log(device);
      console.log(currentIndex);
      console.log(slideDirection);
    }, [currentIndex, slideDirection, device]);

    function onTouchStart(event: any) {
      const touch = event.changedTouches[0];
      setStartX(touch.screenX);
      setStartY(touch.screenY);
    }

    function onTouchEnd(event: any) {
      const touch = event.changedTouches[0];
      const endX = touch.screenX;
      const endY = touch.screenY;

      const directionX = endX - startX;
      const directionY = endY - startY;

      if (Math.abs(directionX) > Math.abs(directionY)) {
        if (directionX < 0) {
          setIsSliding(true);
          setSlideDirection("next");

          handleNext();
        } else {
          setIsSliding(true);
          setSlideDirection("prev");

          handlePrev();
        }
      }
    }

    const handleSlide = (direction: any) => {
      let newItems = [...items];
      if (direction === "next") {
        const firstItem = newItems.shift();
        if (firstItem) {
          newItems.push(firstItem);
        }
      } else if (direction === "prev") {
        const lastItem = newItems.pop();
        if (lastItem) {
          newItems.unshift(lastItem);
        }
      }
      setItems(newItems);
    };

    return (
      <div className=" md:w-auto md:h-auto mt-4 flex flex-col">
        {/* <div className="h-[5%] self-end animate-pulse md:block hidden flex-row">
          <button
            className="text-white hover:text-gray-900"
            onClick={handlePrev}
          >
            <FaChevronLeft size={30} />
          </button>
          <button
            className="text-white hover:text-gray-900"
            onClick={handleNext}
          >
            <FaChevronRight size={30} />
          </button>
        </div> */}

        <div className="flex h-full w-auto ">
          <div
            onTouchStart={(event) => onTouchStart(event)}
            onTouchEnd={(event) => onTouchEnd(event)}
            className={`items-center justify-center relative gap-4 h-full flex `}
          >
            {items.map((item, index) => (
              <>
                <div
                  key={item.id}
                  onMouseOver={() => {
                    device !== EDeviceScreen.computer
                      ? null
                      : setCurrentIndex(index);
                    console.log(index, isSliding);
                  }}
                  onMouseLeave={() => {
                    device !== EDeviceScreen.computer
                      ? null
                      : setCurrentIndex(1);
                    console.log(index, isSliding);
                  }}
                  className={` 
                  

                    ${
                      // ""

                      // ""
                      isSliding
                        ? index === currentIndex
                          ? slideDirection === "next"
                            ? "animate-don_animation_down"
                            : "animate-don_animation_up "
                          : ""
                        : ""
                    }
                  
                   
                  
                    w-[16rem] h-[32.5rem] md:h-[32.5rem] absolute md:relative flex flex-col overflow-clip
                    ${item.bg_Color} 
                    backdrop-blur-md border-4 border-black rounded-xl md:items-start p-4 transition duration-500 
                    ${
                      index === currentIndex &&
                      "md:-translate-y-14 md:-translate-x-12 z-30 md:scale-105"
                    } 
                    ${
                      index !== currentIndex &&
                      "md:-translate-y-0 md:-translate-x-0 md:block scale-95"
                    } 
                  
                     ${
                       index === currentIndex
                         ? "md:-translate-y-14 md:-translate-x-12 z-30 md:scale-105"
                         : ""
                     }
                     ${
                       index === currentIndex
                         ? "-translate-y-2 -translate-x-[10%] z-30 transition-transform duration-500 "
                         : index < currentIndex
                         ? "translate-y-2 translate-x-[15%] z-10 transition-transform duration-500"
                         : "translate-y-1 translate-x-[5%] z-20 transition-transform duration-500"
                     }

                                        
                    `}
                >
                  <div
                    key={item.id}
                    className={`hidden sm:block w-[16rem] h-[33.1rem] absolute rounded-xl items-start transition-opacity duration-500 ${
                      index !== currentIndex
                        ? "md:-translate-y-6 md:-translate-x-6 -translate-x-6 -translate-y-5 z-10 bg-white/40 backdrop-blur-sm "
                        : "md:-translate-y-10 md:-translate-x-10 -z-20"
                    }`}
                  />

                  <div
                    className={`border-4 border-black flex transition hover:duration-100 hover:scale-105 bg-white rounded-xl`}
                  >
                    <Image
                      width={500}
                      height={500}
                      src={item.image}
                      alt={item.title}
                      className="w-[15rem] h-[15rem] rounded-xl"
                    />
                  </div>

                  <div className={`flex flex-col w-full p-4 gap-3`}>
                    <div
                      className={`flex justify-start transition hover:duration-100 hover:scale-110 w-full`}
                    >
                      <h1 className="text-black font-semibold text-center hover:font-bold font-clash text-2xl">
                        {item.title}
                      </h1>
                    </div>

                    <div
                      className={`flex justify-center transition hover:duration-100 hover:scale-110 border-black border-2 items-center rounded-lg p-1 w-full h-[60%] md:overflow-clip`}
                    >
                      <h5 className="text-black text-center font-semibold font-clash text-sm">
                        {item.subtitle}
                      </h5>
                    </div>

                    <button
                      className={`h-[2.5rem] w-full flex justify-center items-center transition hover:duration-100 hover:scale-110  bg-pallet_navy_blue border-black border-2 rounded-lg p-1  md:overflow-clip`}
                    >
                      <h5 className="text-white text-center font-medium font-clash text-sm">
                        {item.btnText}
                      </h5>
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="flex flex-col flex-1 w-full h-auto gap-5 p-[5px] md:p-[15px] ">
        {/* page - 1 */}
        <div
          id={"page_one"}
          className="bg-background  grid sm:grid-cols-1 md:grid-cols-2 md:p-[15px]"
        >
          {/* side A */}
          <div className="w-full h-full p-[10px] ">
            {/* fisrt block */}
            <div className="bg-fisrt_color rounded-3xl h-[65%] sm:max-w-full p-[20px] border-2 border-black">
              <div className="flex justify-between flex-col h-full">
                <div className="w-[80%]">
                  <h1
                    dangerouslySetInnerHTML={{ __html: t("title1") }}
                    className="text-black font-clash font-medium text-4xl  mobS:text-[2.5rem]  md:text-6xl"
                  ></h1>
                </div>

                <div className="md:w-3/4 ">
                  <p className="text-black font-clash font-normal text-[0.85rem] mobS:text-[0.75rem]  md:text-[0.95rem] md:leading-5">
                    {/* Nossa OSC em Jacareí oferece segurança, educação e amor,
                    transformando vidas em um ambiente vibrante e acolhedor.
                    Cultivamos um espaço onde cada interação é guiada pelo amor. */}
                    {t("description1")}
                  </p>
                </div>
              </div>
            </div>

            {/* 2-3 blocks container  */}
            <div className="mt-[20px] h-[30%] md:h-[32.5%] w-full rounded-3xl flex flex-row gap-2">
              {/* second block */}
              <div className="bg-pallet_bg_logo h-full w-[80%] rounded-3xl border-2 border-black">
                <Image
                  src={logo_viva}
                  alt="logo"
                  className="h-full w-full rounded-3xl object-contain "
                />
              </div>

              {/* third block */}
              <button
                onClick={() => scrollIntoSection("page_two")}
                className="bg-pallet_orange w-[55%] cursor-pointer flex rounded-3xl items-end justify-end border-2 border-black"
              >
                <HiArrowDownRight className="text-white h-full w-full" />
              </button>
            </div>
          </div>

          {/* Side B */}
          <div className="min-h-[110vh] w-full p-[10px] ">
            <div className=" rounded-3xl bg-slate-500 h-full w-full border-2 border-black ">
              <div className="h-full ">
                <Carousel />
              </div>
            </div>
          </div>
        </div>

        {/* page - 2 */}
        <div
          id={"page_two"}
          className="mobS:min-h-[80vh] overflow-clip grid grid-cols-1  grid-rows-1 h-[50%] w-full md:p-[15px]"
        >
          {/* page2 - side A */}
          <div className="md:grid flex md:grid-cols-2  md:grid-rows-1 w-full">
            <div
              className={`flex md:mt-[-0.5rem] md:mx-10 w-[40%] md:w-full justify-end -z-10`}
            >
              <p className=" text-slate-200 font-clash  font-black text-[15.5rem] md:text-[20.5rem]">
                &#8220;
              </p>

              {/* dotted bg - 2 */}
              {/* <div
                className={`flex absolute md:-translate-x-[100%] md:translate-y-[60vh]  mt-[9rem] md:mt-[7rem] -z-20`}
              >
                <p className="text-slate-200 font-extralight text-xl leading-[0.5rem] md:text-3xl md:leading-[0.5rem]">
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  ............................................. <br />
                  .............................................
                </p>
              </div> */}
            </div>

            <div
              className={`flex flex-col justify-center items-center w-[60%] md:w-full z-10`}
            >
              {/* dotted bg - 1 */}
              {/* <div
                className={`md:flex hidden absolute md:mt-[5rem] translate-x-[50%] -z-20`}
              >
                <p className="text-slate-200 font-extralight text-3xl leading-[0.5rem]">
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ................................... <br />
                  ...................................
                </p>
              </div> */}
              <h6 className="text-black font-clash font-medium  text-xl md:text-2xl leading-6">
                {/* Amor vai além do sentimento. Amor é atitude. Em cada gesto de
                carinho, em cada palavra de apoio, em cada momento de dedicação,
                o amor se manifesta não apenas como um sentimento passivo, mas
                como uma ação dinâmica e transformadora. Amor é atitude porque
                requer mais do que sentir; exige fazer. */}
                {t("quote")}
              </h6>

              {/* volunteers */}
              <div className={`flex flex-col gap-5 w-[100%] `}>
                <div
                  className={`flex flex-row gap-1 items-center w-[100%] mt-[10%] md:mt-[5%]`}
                >
                  <Image
                    src={logo_viva}
                    alt="logo"
                    className="h-[50px] w-[50px] rounded-full border-black "
                  />

                  <div
                    className={`flex flex-col justify-center h-full w-3/4 md:w-auto `}
                  >
                    <p className="text-black font-clash font-medium text-xs md:text-xl">
                      {/* Viva Boa Vista */}
                      {t("organizationName")}
                    </p>

                    <p className="text-gray-500 font-clash font-medium text-[0.55rem] md:text-xs">
                      {/* Organização não governamental */}
                      {t("organizationDescription")}
                    </p>
                  </div>
                </div>
                <div className="md:flex">
                  <button className="flex gap-5 cursor-pointer items-center justify-center border-2 px-6 py-2 rounded-3xl border-cyan-900">
                    <p className=" text-xs font-clash font-medium text-black">
                      {t("aboutUs")}
                    </p>
                    <HiArrowLongRight className="text-xs text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* page - 3 */}
        <div
          id={"page_four"}
          // className="bg-background flex items-center justify-center p-[15px] md:p-[15px]"
          className="bg-pallet_green h-[50rem] md:h-[35rem] border-black border-2 w-full overflow-clip md:overflow-visible flex flex-col-reverse md:flex-row rounded-3xl"
        >
          {/* <div className="bg-pallet_green border-black border-2 w-full overflow-clip md:overflow-visible flex flex-col-reverse md:flex-row rounded-3xl"> */}
          <div className="h-full md:h-full w-full md:w-[65%] p-[10px] pt-5 justify-center items-center flex md:p-[15px] ">
            <DonationCarousel />
          </div>

          {/* 4 - texts */}
          <div className="h-1/4 md:h-full w-[100%] md:w-[40%] justify-center md:justify-between flex flex-col rounded-e-3xl md:p-[20px]">
            <div className="w-full h-[30%] mb-10 flex p-2 items-start ">
              <h1 className="text-white space font-semibold font-clash text-3xl text-center md:scale-110 md:text-4xl">
                {/* Seja um Agente Transformador e Apoie o VIVA! */}
                {t("title4")}
              </h1>
            </div>
            <div className="w-full h-[30%] p-4 mt-10 flex items-start">
              {/* <Trans i18nKey="subtitle4" components={{ 1: <b></b> }}> */}
              <h4
                dangerouslySetInnerHTML={{ __html: t("subtitle4") }}
                className="text-white space font-normal text-center text-[0.9rem] font-clash md:text-xl md:text-right"
              >
                {/* Junte-se à nossa missão de transformar vidas e fazer a
                  diferença no mundo. <b>Seja um agente de mudança</b> e ajude a
                  criar um futuro melhor para a <b>osc</b>. */}
                {/* {t("subtitle4", {})} */}
              </h4>
              {/* </Trans> */}
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* page - 4 */}
        <div
          id={"page_three"}
          className="bg-background flex flex-col h-[30rem] md:w-full"
        >
          {/* scroll */}
          <div className="grid grid-cols-1 grid-rows-1 w-full h-full rounded-2xl overflow-visible">
            <ScrollArrays lng={lng} />
          </div>
        </div>

        {/* page - 5 */}
        <div
          id={"page_four"}
          className="bg-slate-100 border-black border-2 rounded-3xl flex flex-col md:flex-row items-start h-[40rem] md:h-[20rem]"
        >
          <div className=" md:h-[100%] h-1/2 w-full md:w-1/2 flex flex-row rounded-3xl">
            <div className=" h-[100%] w-full gap-2  p-[5px] flex flex-row overflow-clip rounded-3xl">
              <div className=" h-[100%] w-[50%] bg-pallet_navy_blue  flex flex-col-reverse overflow-clip items-end rounded-3xl">
                <div className=" h-[70%] w-[100%] bg-white/30 backdrop-blur-sm border-4 flex flex-col items-end rounded-3xl">
                  {/* first */}
                  <div className=" md:h-[50%] h-[30%] w-[100%] items-end p-2 flex backdrop-blur-sm flex-row rounded-tl-2xl rounded-tr-2xl">
                    <h1 className="text-black font-clash font-normal md:text-2xl text-1xl text-left">
                      <b>2024</b> - 1820 pessoas transformadas
                    </h1>
                  </div>

                  {/* second */}
                  <div className="md:h-[50%] h-[70%] w-[100%] bg-white/30 overflow-clip z-20 items-start justify-end p-2 flex backdrop-blur-sm flex-row rounded-br-2xl rounded-bl-2xl">
                    <h1 className="text-black font-clash font-normal md:text-2xl  text-1xl text-right">
                      <b>2019</b> - 200 pessoas transformadas
                    </h1>
                  </div>
                </div>
              </div>
              <div className=" h-[100%] w-[50%] bg-slate-300  flex flex-row items-end rounded-3xl">
                <div className=" h-[50%] w-[100%] bg-white/30 border-2 border-black flex backdrop-blur-sm flex-row rounded-3xl"></div>
              </div>
            </div>
          </div>
          <div className=" md:h-[100%] h-1/2 w-full md:w-1/2 flex-col p-[5px] justify-end items-end flex rounded-3xl">
            <h1 className="text-black font-clash font-medium md:text-4xl text-3xl text-left">
              São 465 dias transformando vidas!{" "}
            </h1>
            <h1 className="text-black font-clash font-normal md:text-4xl text-3xl text-left">
              Viva boa vista. Since 2019
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
