import Image, { StaticImageData } from "next/image";
import Header from "@/components/header";
import logo_viva from "../../../public/images/viva_logo.jpg";
import pointed_bg from "../../../public/images/point_black_wave.png";
import { HiArrowDownRight, HiArrowLongRight } from "react-icons/hi2";
import { Carousel, InfiniteHorizontalScroll } from "@/components/carousel";
import { BIZ_UDGothic } from "next/font/google";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const bIZ_UDGothic = BIZ_UDGothic({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const arrCardTo: ICardTo[] = [
    {
      text: "Nosso propósito é ajudar quem mais precisa. E o seu?",
      shouldHaveQuotes: true,
      imageUrl: logo_viva,
      second_imageUrl: "https://i.imgur.com/tTJ8Yz6.png",
      bg_color: "pallet_orange",
    },
    {
      text: "Nosso propósito é ajudar quem mais precisa. E o seu?",
      shouldHaveQuotes: true,
      imageUrl: logo_viva,
      second_imageUrl: "https://i.imgur.com/tTJ8Yz6.png",
      bg_color: "pallet_yellow",
    },
    {
      text: "Nosso propósito é ajudar quem mais precisa. E o seu?",
      shouldHaveQuotes: true,
      imageUrl: logo_viva,
      second_imageUrl: "https://i.imgur.com/tTJ8Yz6.png",
      bg_color: "pallet_salmon",
    },
    {
      text: "Nosso propósito é ajudar quem mais precisa. E o seu?",
      shouldHaveQuotes: true,
      imageUrl: logo_viva,
      second_imageUrl: "https://i.imgur.com/tTJ8Yz6.png",
      bg_color: "pallet_beige",
    },
  ];

  const comp_cardsTo = (item: ICardTo) => (
    <>
      <div className="absolute bg-pallet_orange w-[50%] h-full flex flex-col rounded-3xl border-2 border-black md:w-[60%] scale-95">
        <div className="rounded-3xl p-[15px] z-20 h-[55%] md:h-[70%]">
          {item.shouldHaveQuotes && (
            <p className=" text-black font-clash font-black text-6xl">
              &#8220;
            </p>
          )}
          <h1 className="text-black font-clash font-medium text-3xl md:text-5xl">
            {item.text}
          </h1>
        </div>

        <div className="h-full w-full flex flex-row z-10 p-[15px] rounded-3xl">
          <Image
            src={item.imageUrl ?? ""}
            alt="viva taekwondo"
            className="w-[30%] h-[20%] object-cover rounded-full md:w-[40%] md:h-[30%]"
          />
          <Image
            src={item.second_imageUrl ?? logo_viva}
            alt="viva taekwondo"
            width={1}
            height={1}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="relative h-full w-[70%] object-cover  top-[15px] md:-top-[1%] md:-left-[1%] md:w-full"
          />
        </div>
      </div>
    </>
  );

  return (
    <>
      <Header />
      <div className=" grid grid-cols-1 grid-rows-1 md:grid-rows-2 w-full md:min-h-screen ">
        {/* page - 1 */}
        <div
          id={"page_one"}
          className="bg-background grid sm:grid-cols-1 md:grid-cols-2 md:p-[15px]"
        >
          {/* side A */}
          <div className="w-full h-screen p-[10px] ">
            {/* fisrt block */}
            <div className="bg-fisrt_color rounded-3xl h-[65%] sm:max-w-full p-[20px] border-2 border-black">
              <div className="flex justify-between flex-col h-full">
                <div className="w-[80%]">
                  <h1 className="text-black font-clash font-medium text-4xl md:text-6xl">
                    Amor é atitude. Somos <u>Viva Boa Vista</u>
                  </h1>
                </div>

                <div className="md:w-3/4 ">
                  <p className="text-black font-clash font-normal text-[0.85rem] mobS:text-[0.75rem]  md:text-[0.95rem] md:leading-5">
                    Nossa ONG em Jacareí oferece segurança, educação e amor,
                    transformando vidas em um ambiente vibrante e acolhedor.
                    Cultivamos um espaço onde cada interação é guiada pelo amor.
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
              <button className="bg-pallet_orange w-[55%] cursor-pointer flex rounded-3xl items-end justify-end border-2 border-black">
                <HiArrowDownRight className="text-white h-full w-full" />
              </button>
            </div>
          </div>

          {/* Side B */}
          <div className="h-screen w-full p-[10px] ">
            <div className=" rounded-3xl bg-slate-500 h-full w-full border-2 border-black ">
              {/* <div className="h-screen "> */}
              <Carousel />
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* page - 2 */}
        <div
          id={"page_two"}
          className="flex mobS:min-h-[110vh] mobM:min-h-[80vh]  w-full md:p-[15px]"
        >
          {/* page2 - side A */}
          <div className="flex w-full">
            <div
              className={`flex absolute mt-[-3rem] md:mt-[-0.5rem] right-[60%] -z-10`}
            >
              <p className=" text-slate-200 font-clash font-black text-[15.5rem] md:text-[20.5rem]">
                &#8220;
              </p>
            </div>

            {/* <div
              className={` bg-pallet_bg_logo flex absolute h-1 rounded-full   mt-[9rem] md:mt-[7rem] md:right-[10%] -z-10`}
            /> */}

            {/* dotted bg - 1 */}
            <div
              className={`md:flex hidden absolute md:mt-[5rem] md:right-[20%] -z-10`}
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
            </div>

            <div
              className={`flex flex-col justify-between absolute z-10 w-[60%] mt-[20%] md:mt-[15%] right-[5%]`}
            >
              <h6 className="text-black font-clash font-medium  text-xl md:text-2xl leading-6">
                Amor vai além do sentimento. Amor é atitude. Em cada gesto de
                carinho, em cada palavra de apoio, em cada momento de dedicação,
                o amor se manifesta não apenas como um sentimento passivo, mas
                como uma ação dinâmica e transformadora. Amor é atitude porque
                requer mais do que sentir; exige fazer.
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
                      Viva Boa Vista
                    </p>

                    <p className="text-gray-500 font-clash font-medium text-[0.55rem] md:text-xs">
                      Organização não governamental
                    </p>
                  </div>
                </div>
                <div className="md:flex">
                  <button className="flex gap-5 cursor-pointer items-center justify-center border-2 px-6 py-2 rounded-3xl border-cyan-900">
                    <p className=" text-xs font-clash font-medium text-black">
                      Sobre nós
                    </p>
                    <HiArrowLongRight className="text-xs text-black" />
                  </button>
                </div>
              </div>
              {/* dotted bg - 2 */}
              <div
                className={`flex absolute left-[-50%] md:left-[-40%] mt-[9rem] md:mt-[7rem] md:right-[20%] -z-10`}
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
              </div>
            </div>
          </div>
        </div>

        {/* page - 3 */}
        <div
          id={"page_three"}
          className="bg-background flex flex-col w-full h-screen overflow-hidden "
        >
          <div className="min-w-[100%] h-full flex  flex-row justify-center gap-2 items-center ">
            {/* first */}
            <div
              className={`hidden md:flex -ml-[15rem] bg-pallet_beige w-[80%] h-full flex-col rounded-3xl border-2 border-black md:w-[60%] scale-90`}
            >
              {/* <div className="rounded-3xl p-[15px] z-20 h-[55%] md:h-[70%]">
                {arrCardTo[3].shouldHaveQuotes && (
                  <p className=" text-black font-clash font-black text-6xl">
                    &#8220;
                  </p>
                )}
                <h1 className="text-black font-clash font-medium text-3xl md:text-5xl">
                  {arrCardTo[3].text}
                </h1>
              </div>

              <div className="h-full w-full flex flex-row z-10 p-[15px] rounded-3xl">
                <Image
                  src={arrCardTo[3].imageUrl ?? ""}
                  alt="viva taekwondo"
                  className="w-[30%] h-[20%] object-cover rounded-full md:w-[40%] md:h-[30%]"
                />
                <Image
                  src={arrCardTo[3].second_imageUrl ?? logo_viva}
                  alt="viva taekwondo"
                  width={1}
                  height={1}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="relative h-full w-[70%] object-cover  top-[15px] md:-top-[1%] md:-left-[1%] md:w-full"
                />
              </div> */}
            </div>

            {/* second */}
            <div
              className={`bg-pallet_yellow -ml-[8rem] md:ml-0 w-[80%] h-full flex flex-col rounded-3xl border-2 border-black md:w-[60%] scale-95`}
            >
              <div className="rounded-3xl p-[15px] z-20 h-[55%] md:h-[70%]">
                {arrCardTo[1].shouldHaveQuotes && (
                  <p className=" text-black font-clash font-black text-6xl">
                    &#8220;
                  </p>
                )}
                <h1 className="text-black font-clash font-medium text-3xl md:text-5xl">
                  {arrCardTo[1].text}
                </h1>
              </div>

              <div className="h-full w-full flex flex-row z-10 p-[15px] rounded-3xl">
                <Image
                  src={arrCardTo[1].imageUrl ?? ""}
                  alt="viva taekwondo"
                  className="w-[30%] h-[20%] object-cover rounded-full md:w-[40%] md:h-[30%]"
                />
                <Image
                  src={arrCardTo[1].second_imageUrl ?? logo_viva}
                  alt="viva taekwondo"
                  width={1}
                  height={1}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="relative h-full w-[70%] object-cover  top-[15px] md:-top-[1%] md:-left-[1%] md:w-full"
                />
              </div>
            </div>

            {/* third */}
            <div
              className={` bg-${arrCardTo[0].bg_color} w-[90%] h-full flex flex-col rounded-3xl border-2 border-black md:w-[90%]`}
            >
              <div className="rounded-3xl p-[15px] z-20 h-[55%] md:h-[70%]">
                {arrCardTo[0].shouldHaveQuotes && (
                  <p className=" text-black font-clash font-black text-6xl">
                    &#8220;
                  </p>
                )}
                <h1 className="text-black font-clash font-medium text-3xl md:text-5xl">
                  {arrCardTo[0].text}
                </h1>
              </div>

              <div className="h-full w-full flex flex-row z-10 p-[15px] rounded-3xl">
                <Image
                  src={arrCardTo[0].imageUrl ?? ""}
                  alt="viva taekwondo"
                  className="w-[30%] h-[20%] object-cover rounded-full md:w-[40%] md:h-[30%]"
                />
                <Image
                  src={arrCardTo[0].second_imageUrl ?? logo_viva}
                  alt="viva taekwondo"
                  width={1}
                  height={1}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="relative h-full w-[70%] object-cover  top-[15px] md:-top-[1%] md:-left-[1%] md:w-full"
                />
              </div>
            </div>

            {/* fourth */}
            <div
              className={`bg-pallet_green w-[80%] -mr-[8rem]  h-full flex flex-col rounded-3xl border-2 border-black md:w-[60%]  md:mr-0 scale-95`}
            >
              <div className="rounded-3xl p-[15px] z-20 h-[55%] md:h-[70%]">
                {arrCardTo[2].shouldHaveQuotes && (
                  <p className=" text-black font-clash font-black text-6xl">
                    &#8220;
                  </p>
                )}
                <h1 className="text-black font-clash font-medium text-3xl md:text-5xl">
                  {arrCardTo[2].text}
                </h1>
              </div>

              <div className="h-full w-full flex flex-row z-10 p-[15px] rounded-3xl">
                <Image
                  src={arrCardTo[2].imageUrl ?? ""}
                  alt="viva taekwondo"
                  className="w-[30%] h-[20%] object-cover rounded-full md:w-[40%] md:h-[30%]"
                />
                <Image
                  src={arrCardTo[2].second_imageUrl ?? logo_viva}
                  alt="viva taekwondo"
                  width={1}
                  height={1}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="relative h-full w-[70%] object-cover  top-[15px] md:-top-[1%] md:-left-[1%] md:w-full"
                />
              </div>
            </div>

            {/* fifth */}
            <div
              className={`hidden -mr-[15rem] md:flex bg-pallet_salmon w-[50%] h-full flex-col rounded-3xl border-2 border-black md:w-[60%] scale-90`}
            >
              {/* <div className="rounded-3xl p-[15px] z-20 h-[55%] md:h-[70%]">
                {arrCardTo[3].shouldHaveQuotes && (
                  <p className=" text-black font-clash font-black text-6xl">
                    &#8220;
                  </p>
                )}
                <h1 className="text-black font-clash font-medium text-3xl md:text-5xl">
                  {arrCardTo[3].text}
                </h1>
              </div>

              <div className="h-full w-full flex flex-row z-10 p-[15px] rounded-3xl">
                <Image
                  src={arrCardTo[3].imageUrl ?? ""}
                  alt="viva taekwondo"
                  className="w-[30%] h-[20%] object-cover rounded-full md:w-[40%] md:h-[30%]"
                />
                <Image
                  src={arrCardTo[3].second_imageUrl ?? logo_viva}
                  alt="viva taekwondo"
                  width={1}
                  height={1}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="relative h-full w-[70%] object-cover  top-[15px] md:-top-[1%] md:-left-[1%] md:w-full"
                />
              </div> */}
            </div>
            {/* <InfiniteHorizontalScroll /> */}
          </div>
        </div>

        {/* page - 4 */}
        <div
          id={"page_four"}
          className="bg-background flex items-center h-screen justify-center p-[10px] md:p-[15px]"
        >
          <div className="bg-pallet_navy_blue flex h-full w-full items-center justify-center rounded-3xl">
            <h1 className="text-black text-xl">Quadrant 4</h1>
          </div>
        </div>
      </div>
    </>
  );
}
