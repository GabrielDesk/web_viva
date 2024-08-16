"use client";
import { useState, useContext, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import Image, { StaticImageData } from "next/image";
import { ELanguage } from "@/utils/enum/ELanguages";
import svg_us from "../../public/images/svg/flags/us.svg";
import svg_br from "../../public/images/svg/flags/br.svg";
import { useTranslation } from "react-i18next";
import { ContextWeb } from "@/context/context";
import { useAsyncStorage } from "@/hooks";
import { EAsyncStorageState } from "@/utils/enum/EAsyncKeys";

interface IDrawer {
  shouldOpen: boolean;
}

const Header: React.FC = () => {
  const context = useContext(ContextWeb);
  const { i18n, t } = useTranslation();
  const { getStorageData, setStorageData } = useAsyncStorage();

  // const { themeLanguage, setThemeLanguage } = context;

  const [shouldOpenDrawer, setShouldOpenDrawer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [language, setLanguage] = useState(ELanguage.portuguese);
  const [languagesItems, setLanguagesItems] = useState([
    {
      id: 1,
      language: ELanguage.portuguese,
      svg: svg_br,
    },
    {
      id: 2,
      language: ELanguage.english,
      svg: svg_us,
    },
  ]);

  useEffect(() => {
    // let storedLanguageELanguage = getStorageData({
    //   id: EAsyncStorageState.STORAGE_LANGUAGE,
    // });
    // setLanguage(storedLanguage);
    const fetchStoredLanguage = async () => {
      const storedLanguage = await getStorageData({
        id: EAsyncStorageState.STORAGE_LANGUAGE,
      });
      console.log(storedLanguage);

      if (
        storedLanguage &&
        Object.values(ELanguage).includes(storedLanguage as ELanguage)
      ) {
        setLanguage(storedLanguage as ELanguage);
        setCurrentIndex(language === ELanguage.english ? 1 : 0);
      } else {
        setLanguage(ELanguage.portuguese); // fallback para português caso não seja um valor válido
        setCurrentIndex(0);
      }
    };

    fetchStoredLanguage();
  }, [language]);

  function scrollIntoSection(section: string) {
    const element = document.getElementById(section);

    return element?.scrollIntoView({ behavior: "smooth" });
  }

  function handleCurrentLanguage(language: ELanguage) {
    setCurrentIndex(language === ELanguage.english ? 1 : 0);
    i18n.changeLanguage(language);
    setStorageData({
      id: EAsyncStorageState.STORAGE_LANGUAGE,
      value: language,
    });
    console.log({ language });
    // setThemeLanguage(language);
  }

  const Drawer = ({ shouldOpen = false }: IDrawer) => {
    return shouldOpen ? (
      <div className="md:hidden bg-white/30 fixed z-50 right-0 h-screen animate-slide-in-right delay-700 backdrop-blur-sm border-x-2 border-black transform translate-x-full">
        <div className="flex flex-col p-5 gap-5 items-start justify-center">
          <button onClick={() => scrollIntoSection("page_one")}>
            <h6 className="text-xl font-clash font-medium cursor-pointer hover:font-normal text-black ">
              <u>Plataform</u>
            </h6>
          </button>
          <button onClick={() => scrollIntoSection("page_two")}>
            <h6 className="text-xl font-clash font-medium cursor-pointer hover:font-normal text-black">
              <u>Pricing</u>
            </h6>
          </button>
          <button onClick={() => scrollIntoSection("page_three")}>
            <h6 className="text-xl font-clash font-medium cursor-pointer hover:font-normal text-black">
              <u>Events</u>
            </h6>
          </button>
          <button onClick={() => scrollIntoSection("page_four")}>
            <h6 className="text-xl font-clash font-medium cursor-pointer hover:font-normal text-black">
              <u>About Us</u>
            </h6>
          </button>
          <h6 className="text-[1rem] font-clash font-medium cursor-pointer text-gray-500">
            <u>Viva!</u>
          </h6>
        </div>
      </div>
    ) : (
      <></>
    );
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white/30 backdrop-blur-sm border-y-2 border-black
      p-[15px] flex flex-row justify-between`}
      >
        <div className="flex items-center w-[40%] md:w-[25%] gap-8 ">
          {/* <div className="flex items-center justify-start w-1/2"> */}
          <h1 className="text-xl font-clash text-black font-medium">
            Viva boa vista
          </h1>
          {/* </div> */}
        </div>

        <div className="flex h-full w-[60%] md:w-[65%] md:flex-row-reverse items-center justify-between">
          <div className="flex w-[100%] h-10 gap-4 items-center justify-between md:w-1/2 ">
            {/* button language */}
            <div className="flex w-[100%] h-8 md:h-10  md:w-full md:justify-end">
              <div
                className="flex h-[100%] w-[100%] md:w-[50%]
            border-2 border-black rounded-lg 
             gap-5
             overflow-clip
             justify-center
            shadow-[1px_2px_#000]
            relative"
              >
                {languagesItems.flatMap((item, index) => (
                  <>
                    <button
                      onClick={() => {
                        handleCurrentLanguage(item.language);
                        console.log(item);
                      }}
                      className="cursor-pointer md:w-full shadow-sm rounded-lg z-20"
                    >
                      {/* <Image
                        alt={item.language.toString()}
                        src={item.svg}
                        width={10}
                        height={10}
                        className={`${
                          currentIndex === index && "scale-100"
                        }  bg-slate-500
                    w-[30%] md:w-[30%]`}
                      /> */}
                      <p
                        className={`text-black font-medium
                           font-clash text-base`}
                      >
                        {item.language === "en" ? "English" : "Português"}
                      </p>
                    </button>
                  </>
                ))}

                <div
                  className={`cursor-pointer absolute rounded-md md:w-[50%] border-2 border-black transform
                transition 0.8s backdrop-blur-md ${
                  currentIndex === 0
                    ? `md:shadow-[4px_1px_0px_1px_#000] w-[60%] shadow-[2px_1px_0px_1px_#000] left-0 top-0 bottom-0 right-0 translate-x-[0%]`
                    : `md:shadow-[-4px_1px_0px_1px_#000] w-[40%] shadow-[-2px_1px_0px_1px_#000] top-0 right-5 left-9 bottom-0 md:left-0 md:right-9 translate-x-[100%]`
                }`}
                />
              </div>
            </div>

            {/* drawer button  */}
            <div className="md:hidden w-[10%] h-10 cursor-pointer flex">
              <button
                className=""
                onClick={() => setShouldOpenDrawer((prev) => !prev)}
              >
                <HiBars3 className="text-black text-2xl h-full w-full" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex w-1/2 row px-5 gap-10 items-center justify-center">
            <button onClick={() => scrollIntoSection("page_one")}>
              <h6 className="text-xl font-clash cursor-pointer hover:font-medium text-black ">
                Plataform
              </h6>
            </button>
            <button onClick={() => scrollIntoSection("page_two")}>
              <h6 className="text-xl font-clash cursor-pointer hover:font-medium text-black">
                Pricing
              </h6>
            </button>
            <button onClick={() => scrollIntoSection("page_three")}>
              <h6 className="text-xl font-clash cursor-pointer hover:font-medium text-black">
                Events
              </h6>
            </button>
            <button onClick={() => scrollIntoSection("page_four")}>
              <h6 className="text-xl font-clash cursor-pointer hover:font-medium text-black">
                About Us
              </h6>
            </button>
          </div>
        </div>

        {/* <div className="hidden md:flex row  items-center justify-center"> */}

        {/* <button className="hidden md:flex row items-center justify-center border-2 px-6 py-2 rounded-3xl border-cyan-900">
            <p className="text-xl font-clash text-black">Login</p>
          </button> */}
        {/* </div> */}
      </header>
      <Drawer shouldOpen={shouldOpenDrawer} />
    </>
  );
};
export default Header;
