"use client";
import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import logo_viva from "../../../public/images/viva_logo.jpg";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useTranslation } from "../../../i18n/client";

const images = [
  "https://i.imgur.com/xzDWGdl.jpeg",
  "https://i.imgur.com/i7OJwsg.jpeg",
  "https://i.imgur.com/U2f5n1E.jpeg",
  "https://i.imgur.com/AM3A7Pu.jpeg",
];

export function getMiddleIndex(arr: [] | ICardTo[]) {
  const length = arr.length;

  if (length === 0) return []; // Se o array estiver vazio, retorne um array vazio

  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Se o array tiver um número par de elementos, retorne as duas posições centrais
    return [middleIndex - 1, middleIndex];
  } else {
    // Se o array tiver um número ímpar de elementos, retorne a posição central
    return [middleIndex];
  }
}

export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const slideInterval = useRef<number | undefined>(undefined);

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    slideInterval.current = setInterval(nextSlide, 8000) as unknown as number; // Change slides every 3000ms (3 seconds)

    return () => clearInterval(slideInterval.current); // Clean up the interval on component unmount
  }, [length]);

  // const manualNextSlide = () => {
  //   setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //   // Resetting the interval when manually changing slides
  //   clearInterval(slideInterval.current as number);
  //   slideInterval.current = setInterval(() => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //   }, 5000) as unknown as number;
  // };

  // const manualPrevSlide = () => {
  //   setCurrent((current) => (current === 0 ? length - 1 : current - 1));
  //   // Resetting the interval when manually changing slides
  //   clearInterval(slideInterval.current);
  //   slideInterval.current = setInterval(() => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //   }, 5000) as unknown as number;
  // };

  if (!Array.isArray(images) || images.length <= 0) {
    return null; // or display an error message
  }

  return (
    <div className="relative rounded-3xl h-full w-full overflow-hidden">
      <div className="absolute top-[50%] flex justify-between w-full rounded-3xl ">
        {/* <HiArrowLeft
          onClick={() => manualPrevSlide()}
          className="left-0 z-10 cursor-pointer select-none text-white text-2xl"
        />
        <HiArrowRight
          onClick={() => manualNextSlide()}
          className="right-0 cursor-pointer select-none text-white text-2xl"
        /> */}
      </div>

      {/* {images.map((img, index) => ( */}
      <div
        className={`h-full w-full absolute transition-transform duration-5000 ease-in-out slide `}
        // key={index}
      >
        {/* {index === current && ( */}
        <Image
          src={"https://i.imgur.com/ci4yF0D.jpeg"}
          alt="Viva boa vista"
          // layout="fill"
          width={1000}
          height={1000}
          className="h-full w-full object-fill  rounded-3xl  "
        />
        {/* )} */}
      </div>
      {/* ))} */}
    </div>
  );
};

interface ICardTo {
  text: string;
  description?: string;
  imageUrl?: string | StaticImageData;
  second_imageUrl?: string | StaticImageData | StaticImport;
  bg_color?: string;
  shouldHaveQuotes: boolean;
}
export const InfiniteHorizontalScroll = () => {
  const cards: ICardTo[] = [
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

  const cardsComp = [
    // {/* first */}
    <div
      key={1}
      className={`hidden md:flex -ml-[15rem] bg-pallet_beige w-[80%] h-full flex-col rounded-3xl border-2 border-black md:w-[60%] scale-90`}
    >
      <div className="rounded-3xl p-[15px] z-20 h-[55%] md:h-[70%]">
        {cards[3].shouldHaveQuotes && (
          <p className=" text-black font-clash font-black text-6xl">&#8220;</p>
        )}
        <h1 className="text-black font-clash font-medium text-3xl md:text-5xl">
          {cards[3].text}
        </h1>
      </div>

      <div className="h-full w-full flex flex-row z-10 p-[15px] rounded-3xl">
        <Image
          src={cards[3].imageUrl ?? ""}
          alt="viva taekwondo"
          className="w-[30%] h-[20%] object-cover rounded-full md:w-[40%] md:h-[30%]"
        />
        <Image
          src={cards[3].second_imageUrl ?? logo_viva}
          alt="viva taekwondo"
          width={1}
          height={1}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="relative h-full w-[70%] object-cover  top-[15px] md:-top-[1%] md:-left-[1%] md:w-full"
        />
      </div>
    </div>,

    // {/* second */}
    <div
      key={2}
      className={`bg-pallet_yellow -ml-[8rem] md:ml-0 w-[80%] h-full flex flex-col rounded-3xl border-2 border-black md:w-[60%] scale-95`}
    >
      <div className="rounded-3xl p-[15px] z-20 h-[55%] md:h-[70%]">
        {cards[1].shouldHaveQuotes && (
          <p className=" text-black font-clash font-black text-6xl">&#8220;</p>
        )}
        <h1 className="text-black font-clash font-medium text-3xl md:text-5xl">
          {cards[1].text}
        </h1>
      </div>

      <div className="h-full w-full flex flex-row z-10 p-[15px] rounded-3xl">
        <Image
          src={cards[1].imageUrl ?? ""}
          alt="viva taekwondo"
          className="w-[30%] h-[20%] object-cover rounded-full md:w-[40%] md:h-[30%]"
        />
        <Image
          src={cards[1].second_imageUrl ?? logo_viva}
          alt="viva taekwondo"
          width={1}
          height={1}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="relative h-full w-[70%] object-cover  top-[15px] md:-top-[1%] md:-left-[1%] md:w-full"
        />
      </div>
    </div>,

    // {/* third */}
    <div
      key={3}
      className={` bg-${cards[0].bg_color} w-[90%] h-full flex flex-col rounded-3xl border-2 border-black md:w-[90%]`}
    >
      <div className="rounded-3xl p-[15px] z-20 h-[55%] md:h-[70%]">
        {cards[0].shouldHaveQuotes && (
          <p className=" text-black font-clash font-black text-6xl">&#8220;</p>
        )}
        <h1 className="text-black font-clash font-medium text-3xl md:text-5xl">
          {cards[0].text}
        </h1>
      </div>

      <div className="h-full w-full flex flex-row z-10 p-[15px] rounded-3xl">
        <Image
          src={cards[0].imageUrl ?? ""}
          alt="viva taekwondo"
          className="w-[30%] h-[20%] object-cover rounded-full md:w-[40%] md:h-[30%]"
        />
        <Image
          src={cards[0].second_imageUrl ?? logo_viva}
          alt="viva taekwondo"
          width={1}
          height={1}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="relative h-full w-[70%] object-cover  top-[15px] md:-top-[1%] md:-left-[1%] md:w-full"
        />
      </div>
    </div>,

    // {/* fourth */}
    <div
      key={4}
      className={`bg-pallet_green w-[80%] -mr-[8rem]  h-full flex flex-col rounded-3xl border-2 border-black md:w-[60%]  md:mr-0 scale-95`}
    >
      <div className="rounded-3xl p-[15px] z-20 h-[55%] md:h-[70%]">
        {cards[2].shouldHaveQuotes && (
          <p className=" text-black font-clash font-black text-6xl">&#8220;</p>
        )}
        <h1 className="text-black font-clash font-medium text-3xl md:text-5xl">
          {cards[2].text}
        </h1>
      </div>

      <div className="h-full w-full flex flex-row z-10 p-[15px] rounded-3xl">
        <Image
          src={cards[2].imageUrl ?? ""}
          alt="viva taekwondo"
          className="w-[30%] h-[20%] object-cover rounded-full md:w-[40%] md:h-[30%]"
        />
        <Image
          src={cards[2].second_imageUrl ?? logo_viva}
          alt="viva taekwondo"
          width={1}
          height={1}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="relative h-full w-[70%] object-cover  top-[15px] md:-top-[1%] md:-left-[1%] md:w-full"
        />
      </div>
    </div>,

    // {/* fifth */}
    <div
      key={5}
      className={`hidden -mr-[15rem] md:flex bg-pallet_salmon w-[50%] h-full flex-col rounded-3xl border-2 border-black md:w-[60%] scale-90`}
    >
      <div className="rounded-3xl p-[15px] z-20 h-[55%] md:h-[70%]">
        {cards[3].shouldHaveQuotes && (
          <p className=" text-black font-clash font-black text-6xl">&#8220;</p>
        )}
        <h1 className="text-black font-clash font-medium text-3xl md:text-5xl">
          {cards[3].text}
        </h1>
      </div>

      <div className="h-full w-full flex flex-row z-10 p-[15px] rounded-3xl">
        <Image
          src={cards[3].imageUrl ?? ""}
          alt="viva taekwondo"
          className="w-[30%] h-[20%] object-cover rounded-full md:w-[40%] md:h-[30%]"
        />
        <Image
          src={cards[3].second_imageUrl ?? logo_viva}
          alt="viva taekwondo"
          width={1}
          height={1}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="relative h-full w-[70%] object-cover  top-[15px] md:-top-[1%] md:-left-[1%] md:w-full"
        />
      </div>
    </div>,
    // <InfiniteHorizontalScroll />
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const cloneContainer = cloneRef.current;

    if (!scrollContainer || !cloneContainer) return;

    // Clonar os cartões para criar o efeito de loop
    cloneContainer.innerHTML = scrollContainer.innerHTML;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 p-4 hide-scrollbar min-w-[100%] h-full  flex-row justify-center gap-2 items-center "
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        {cards.concat(cards).map((card, index) => (
          <div
            key={index}
            className={`inline-block flex-none w-64 h-96 p-4 rounded-lg shadow-lg`}
          >
            <div className="flex flex-col h-full justify-between">
              <div className={`${card.bg_color} text-lg font-bold mb-2`}>
                {card.text}
              </div>
              <Image
                src={card.imageUrl ?? ""}
                alt="Card"
                width={1}
                height={1}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="mt-auto h-2/3 object-contain"
              />
            </div>
          </div>
        ))}
        <div
          ref={cloneRef}
          className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none"
        ></div>
      </div>
    </div>
  );
};

export const ScrollArrays: React.ElementType = (lng) => {
  const { t } = useTranslation(lng, "translation", undefined);

  const arrCardTo: ICardTo[] = [
    {
      text: "cardText1",
      shouldHaveQuotes: true,
      imageUrl: logo_viva,
      second_imageUrl: "https://i.imgur.com/tTJ8Yz6.png",
      bg_color: "bg-pallet_orange",
    },
    {
      text: "cardText1",
      shouldHaveQuotes: true,
      imageUrl: logo_viva,
      second_imageUrl: "https://i.imgur.com/tTJ8Yz6.png",
      bg_color: "bg-pallet_yellow",
    },
    {
      text: "cardText1",
      shouldHaveQuotes: true,
      imageUrl: logo_viva,
      second_imageUrl: "https://i.imgur.com/tTJ8Yz6.png",
      bg_color: "bg-pallet_salmon",
    },
    {
      text: "cardText1",
      shouldHaveQuotes: true,
      imageUrl: logo_viva,
      second_imageUrl: "https://i.imgur.com/tTJ8Yz6.png",
      bg_color: "bg-pallet_yellow",
    },
    {
      text: "cardText1",
      shouldHaveQuotes: true,
      imageUrl: logo_viva,
      second_imageUrl: "https://i.imgur.com/tTJ8Yz6.png",
      bg_color: "bg-pallet_salmon",
    },
  ];

  const middleIndices = getMiddleIndex(arrCardTo);

  const [itemsArr, setItemsArr] = useState(arrCardTo);

  const [slideDirection, setSlideDirection] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log("ScrollArrays");
  //   if (slideDirection) {
  //     setIsSliding(true);
  //     const timeout = setTimeout(() => {
  //       // handleSlide(slideDirection);
  //       setSlideDirection("");
  //       setIsSliding(false);
  //     }, 500); // Duração da animação
  //     return () => clearTimeout(timeout);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [slideDirection]);

  // const handleNext = () => {
  //   const newItems = [...items];

  //   // Reorganizar o array para que o próximo item se torne o card principal
  //   const nextItem = newItems.splice(currentIndex + 1, 1)[0]; // Remove o próximo item
  //   newItems.splice(currentIndex, 0, nextItem); // Insere o próximo item na posição do item central

  //   // Atualizar o array e o índice
  //   setItemsArr(newItems);

  //   setSlideDirection("next");
  //   setCurrentIndex((currentIndex + 1) % items.length);

  //   // setCurrentIndex((prevIndex) =>
  //   //   prevIndex === items.length - 1 ? 0 : prevIndex + 1
  //   // );
  // };

  // const handlePrev = () => {
  //   const newItems = [...items];

  //   // Reorganizar o array para que o item central se torne o card anterior
  //   const prevItem = newItems.splice(currentIndex - 1, 1)[0]; // Remove o item anterior
  //   newItems.splice(currentIndex, 0, prevItem); // Insere o item anterior na posição do item central

  //   // Atualizar o array e o índice
  //   setItemsArr(newItems);

  //   setSlideDirection("prev");
  //   setCurrentIndex((currentIndex - 1 + items.length) % items.length);

  //   // setCurrentIndex((prevIndex) =>
  //   //   prevIndex === 0 ? items.length - 1 : prevIndex - 1
  //   // );
  // };
  useEffect(() => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.clientWidth; // Assumindo que queremos focar 3 itens na tela
      scrollRef.current.scrollTo({
        left: itemWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // function onTouchStart(event) {
  //   const touch = event.changedTouches[0];
  //   setStartX(touch.screenX);
  //   setStartY(touch.screenY);
  // }

  // function onTouchEnd(event) {
  //   const touch = event.changedTouches[0];
  //   const endX = touch.screenX;
  //   const endY = touch.screenY;

  //   const directionX = endX - startX;
  //   const directionY = endY - startY;

  //   if (Math.abs(directionX) > Math.abs(directionY)) {
  //     if (directionX < 0) {
  //       setIsSliding(true);
  //       setSlideDirection("next");

  //       handleNext();
  //     } else {
  //       setIsSliding(true);
  //       setSlideDirection("prev");

  //       handlePrev();
  //     }
  //   }
  // }

  // const handleSlide = (direction) => {
  //   let newItems = [...items];
  //   if (direction === "next") {
  //     const firstItem = newItems.shift();
  //     newItems.push(firstItem);
  //   } else if (direction === "prev") {
  //     const lastItem = newItems.pop();
  //     newItems.unshift(lastItem);
  //   }
  //   setItemsArr(newItems);
  // };

  return (
    <>
      <div
        ref={scrollRef}
        // onTouchStart={(event) => onTouchStart(event)}
        // onTouchEnd={(event) => onTouchEnd(event)}
        className="grid grid-flow-col  overflow-x-scroll scrollbar-hide px-[25px] grid-rows-1 gap-4 w-full h-full rounded-2xl"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {itemsArr.map((item, index) => {
          const isMiddle = middleIndices.includes(index);

          return (
            <>
              <div
                id={index.toString()}
                className={`transition-transform duration-300 border-2 border-black ${
                  index === currentIndex ? "scale-110" : "scale-100"
                }
                ${
                  slideDirection === "next" && index === currentIndex
                    ? "animate-slide-in-right"
                    : "animate-slide-out-left"
                }
                  h-full w-[18rem] md:w-[25rem] flex flex-col 
                  scroll-snap-align-center
                  ${!item?.bg_color ? "bg-slate-600" : item.bg_color} 
                  rounded-2xl
                  `}
              >
                {/* up */}
                <div className="h-1/2 p-[15px]">
                  <h1 className="text-black font-clash font-medium md:text-4xl text-3xl">
                    {t(item.text)}
                  </h1>
                </div>

                {/* down */}
                <div className="h-1/2 w-full  flex flex-row overflow-clip ">
                  <div className="h-full w-1/2 px-[15px] justify-start ">
                    <Image
                      src={item.imageUrl ?? ""}
                      alt="viva taekwondo"
                      className="w-[6rem] h-[6rem] object-cover rounded-full md:w-[5rem] md:h-[5rem]"
                    />
                  </div>
                  <div className="h-full  overflow-clip w-1/2 md:px-[15px] items-end content-end">
                    <Image
                      src={item.second_imageUrl ?? ""}
                      width={1000}
                      height={1000}
                      alt="viva taekwondo"
                      className="w-[40rem] object-cover h-[20rem]  md:w-full md:h-[20rem]"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
