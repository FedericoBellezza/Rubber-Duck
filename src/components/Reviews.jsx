"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import { useState } from "react";

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  function NextButton() {
    const swiper = useSwiper();
    return (
      <input
        type="radio"
        onClick={() => swiper.slideTo(3)}
        className={`appearance-none p-2 border  rounded-full transition ${
          currentSlide === 3
            ? "bg-blue-500 border-blue-500"
            : "bg-gray-300 border-gray-300"
        }`}
      ></input>
    );
  }
  function PrevButton() {
    const swiper = useSwiper();
    return (
      <input
        type="radio"
        onClick={() => swiper.slideTo(0)}
        className={`appearance-none p-2 border   rounded-full transition ${
          currentSlide === 0
            ? "bg-blue-500 border-blue-500"
            : "bg-gray-300 border-gray-300"
        }`}
      ></input>
    );
  }

  return (
    <section id="reviews" className="p-10  lg:px-50">
      <h1 className="lg:text-6xl text-3xl font-bold text-center">
        Cosa ne pensano i nostri sviluppatori
      </h1>

      <Swiper
        spaceBetween={200}
        slidesPerView={1}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => console.log(swiper)}
        className="text-center lg:text-2xl text-lg text-balance my-15"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex flex-col gap-5">
            <p>
              "La paperella di gomma è diventata il mio strumento di debugging
              preferito. Spiegare i problemi al mio 'assistente' silenzioso mi
              ha aiutato a risolvere bug che altrimenti mi avrebbero fatto
              impazzire. È anche un ottimo antistress nelle giornate difficili!"
            </p>
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-800 font-bold">
              David William - Feb 22, 2023
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-5">
            <p>
              "La paperella di gomma è diventata il mio strumento di debugging
              preferito. Spiegare i problemi al mio 'assistente' silenzioso mi
              ha aiutato a risolvere bug che altrimenti mi avrebbero fatto
              impazzire. È anche un ottimo antistress nelle giornate difficili!"
            </p>
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-800 font-bold">
              David William - Feb 22, 2023
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-5">
            <p>
              "La paperella di gomma è diventata il mio strumento di debugging
              preferito. Spiegare i problemi al mio 'assistente' silenzioso mi
              ha aiutato a risolvere bug che altrimenti mi avrebbero fatto
              impazzire. È anche un ottimo antistress nelle giornate difficili!"
            </p>
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-800 font-bold">
              David William - Feb 22, 2023
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-5">
            <p>
              "La paperella di gomma è diventata il mio strumento di debugging
              preferito. Spiegare i problemi al mio 'assistente' silenzioso mi
              ha aiutato a risolvere bug che altrimenti mi avrebbero fatto
              impazzire. È anche un ottimo antistress nelle giornate difficili!"
            </p>
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-800 font-bold">
              David William - Feb 22, 2023
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-5">
            <p>
              "La paperella di gomma è diventata il mio strumento di debugging
              preferito. Spiegare i problemi al mio 'assistente' silenzioso mi
              ha aiutato a risolvere bug che altrimenti mi avrebbero fatto
              impazzire. È anche un ottimo antistress nelle giornate difficili!"
            </p>
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-800 font-bold">
              David William - Feb 22, 2023
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-5">
            <p>
              "La paperella di gomma è diventata il mio strumento di debugging
              preferito. Spiegare i problemi al mio 'assistente' silenzioso mi
              ha aiutato a risolvere bug che altrimenti mi avrebbero fatto
              impazzire. È anche un ottimo antistress nelle giornate difficili!"
            </p>
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-800 font-bold">
              David William - Feb 22, 2023
            </span>
          </div>
        </SwiperSlide>
        <div className="text-center flex items-center justify-center gap-3 text-sm mt-5">
          Scorri per vedere altre recensioni
          <img
            className="w-8 inline rotate-180"
            src="https://static.vecteezy.com/system/resources/previews/017/785/206/non_2x/left-arrow-icon-on-transparent-background-free-png.png"
            alt=""
          />
        </div>
        <div className=" justify-center mt-10 gap-1 hidden lg:flex">
          <PrevButton />
          <NextButton />
        </div>
      </Swiper>
    </section>
  );
}
