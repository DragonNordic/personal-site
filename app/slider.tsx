"use client";

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./css/slider.css";
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: 'Winds of Change',
    description: 'Gentle pink and blue hues remind us of moments when everything changes for the better.',
    author: { name: 'Andrew Kelman', image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/author-1.jpg' },
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-1.jpg',
    url: '#',
    price: '$275',
  },
  {
    id: 2,
    title: 'Flames of Passion',
    description: 'This piece represents the fire of inspiration burning within us all.',
    author: { name: 'Alex Bilyk', image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/author-2.jpg' },
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-2.jpg',
    badge: 'Popular Now',
    url: '#',
    price: '$375',
  },
  {
    id: 3,
    title: 'Oceans of Serenity',
    description: 'Immerse yourself in the depths of calm and harmony.',
    author: { name: 'Inna Grande', image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/author-3.jpg' },
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-3.jpg',
    url: '#',
    price: '$280',
  },
  {
    id: 4,
    title: 'Winds of Change',
    description: 'Gentle pink and blue hues remind us of moments when everything changes for the better.',
    author: { name: 'Andrew Kelman', image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/author-1.jpg' },
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-1.jpg',
    url: '#',
    price: '$175',
  },
  {
    id: 5,
    title: 'Flames of Passion',
    description: 'This piece represents the fire of inspiration burning within us all. Feel the warmth of emotions in a swirl of red and yellow tones.',
    author: { name: 'Alex Bilyk', image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/author-2.jpg' },
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-2.jpg',
    badge: 'Popular Now',
    url: '#',
    price: '$270',
  },
  {
    id: 6,
    title: 'Oceans of Serenity',
    description: 'Immerse yourself in the depths of calm and harmony. Blue waves of art take you into a world of meditation and inner balance.',
    author: { name: 'Inna Grande', image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/author-3.jpg' },
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-3.jpg',
    url: '#',
    price: '$225',
  },
  {
    id: 7,
    title: 'Winds of Change',
    description: 'Gentle pink and blue hues remind us of moments when everything changes for the better.',
    author: { name: 'Andrew Kelman', image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/author-1.jpg' },
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-1.jpg',
    url: '#',
    price: '$175',
  },
  {
    id: 8,
    title: 'Flames of Passion',
    description: 'This piece represents the fire of inspiration burning within us all. Feel the warmth of emotions in a swirl of red and yellow tones.',
    author: { name: 'Alex Bilyk', image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/author-2.jpg' },
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-2.jpg',
    badge: 'Popular Now',
    url: '#',
    price: '$270',
  },
  {
    id: 9,
    title: 'Oceans of Serenity',
    description: 'Immerse yourself in the depths of calm and harmony. Blue waves of art take you into a world of meditation and inner balance.',
    author: { name: 'Inna Grande', image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/author-3.jpg' },
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-1/slide-3.jpg',
    url: '#',
    price: '$225',
  },
];

const Slider = () => {
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (prevRef.current && nextRef.current) {
          prevRef.current.classList.add('swiper-button-prev');
          nextRef.current.classList.add('swiper-button-next');
      }
    }, [prevRef, nextRef]);

    return (
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-4">Whirl of Emotions in Color and Form</h1>
        <p className="text-center text-gray-600 mb-8">
            Dive into the world of abstract art, where every stroke and color tells a unique story.
        </p>
        <div className="wrapper base-template__wrapper">
          <div className="base-template__content">
            <div className="emotions-slider">
              <div className="emotions-slider__nav slider-nav">
                <div ref={prevRef} className="slider-nav__item slider-nav__item_prev">
                  <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 26L2 14L14 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div ref={nextRef} className="slider-nav__item slider-nav__item_next">
                  <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 26L14 14L2 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <Swiper className="emotions-slider__slider swiper"
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={0}
                direction="horizontal"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                loopAdditionalSlides={3}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                centeredSlides={true}
                pagination= {{
                  el: '.slider-pagination',
                  type: "bullets",
                  modifierClass: "slider-pagination",
                  bulletClass: "slider-pagination__item",
                  bulletActiveClass: "active",
                  clickable: true,
                }}          
                onBeforeInit={(swiper) => {
                    if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
              >
                <div className="emotions-slider__wrapper swiper-wrapper">
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="emotions-slider__slide swiper-slide">
                      <div className="emotions-slider__item emotions-slider-item">
                        {slide.badge && (
                          <div className="emotions-slider-item__badge">Popular Now</div>
                        )}

                        <div className="emotions-slider-item__image">
                          <Image src={slide.image} alt={slide.title} width={500} height={300} />
                        </div>

                        <div className="emotions-slider-item__content">
                          <div className="emotions-slider-item__header">
                            <div className="emotions-slider-item__header-inner">
                              <div className="emotions-slider-item__price">{slide.price}</div>
                              <div className="emotions-slider-item__author">
                                <div className="emotions-slider-item__author-image">
                                  <Image src={slide.author.image} alt={slide.author.name} width={40} height={40} />
                                </div>
                                <div className="emotions-slider-item__author-name">
                                  {slide.author.name}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="emotions-slider-item__info">
                            <h2 className="emotions-slider-item__title">
                              {slide.title}
                            </h2>
                            <div className="emotions-slider-item__text">
                              {slide.description}
                            </div>
                          </div>

                          <div className="emotions-slider-item__footer">
                            <a
                              className="emotions-slider-item__btn"
                              href={slide.url}
                              onClick={(e) => e.preventDefault()}
                            >
                              <span className="emotions-slider-item__btn-text">View more</span>
                              <span className="emotions-slider-item__btn-icon"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>

              <div className="emotions-slider__pagination slider-pagination"></div>

            </div>
          </div>
        </div>
      </section>
    );
};

export default Slider;
