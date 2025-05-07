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
    <section id="reviews" className="p-10  px-50">
      <h1 className="text-6xl font-bold text-center">
        Cosa ne pensano i nostri sviluppatori
      </h1>

      <Swiper
        spaceBetween={200}
        slidesPerView={3}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => console.log(swiper)}
        className="text-center text-2xl text-balance my-15 "
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

        <div className="flex justify-center mt-10 gap-1">
          <PrevButton />
          <NextButton />
        </div>
      </Swiper>
    </section>
  );
}
