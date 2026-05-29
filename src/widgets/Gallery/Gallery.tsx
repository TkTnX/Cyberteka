import { Swiper, SwiperSlide } from "swiper/react";
import "./_gallery.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
export const Gallery = () => {
  return (
    <section className="gallery">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="container gallery__swiper"
      >
        <SwiperSlide className="gallery__swiper-slide">
          <img
            loading="lazy"
            className="gallery__swiper-image"
            src="/images/gallery/01.webp"
            alt="Изображение"
          />
        </SwiperSlide>

        <SwiperSlide className="gallery__swiper-slide">
          <img
            loading="lazy"
            className="gallery__swiper-image"
            src="/images/gallery/01.webp"
            alt="Изображение"
          />
        </SwiperSlide>

        <SwiperSlide className="gallery__swiper-slide">
          <img
            loading="lazy"
            className="gallery__swiper-image"
            src="/images/gallery/01.webp"
            alt="Изображение"
          />
        </SwiperSlide>

        <SwiperSlide className="gallery__swiper-slide">
          <img
            loading="lazy"
            className="gallery__swiper-image"
            src="/images/gallery/01.webp"
            alt="Изображение"
          />
        </SwiperSlide>

        <SwiperSlide className="gallery__swiper-slide">
          <img
            loading="lazy"
            className="gallery__swiper-image"
            src="/images/gallery/01.webp"
            alt="Изображение"
          />
        </SwiperSlide>

        <SwiperSlide className="gallery__swiper-slide">
          <img
            loading="lazy"
            className="gallery__swiper-image"
            src="/images/gallery/01.webp"
            alt="Изображение"
          />
        </SwiperSlide>

        <SwiperSlide className="gallery__swiper-slide">
          <img
            loading="lazy"
            className="gallery__swiper-image"
            src="/images/gallery/01.webp"
            alt="Изображение"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
