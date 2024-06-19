import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/pagination";

const HeroSection = () => {
  useEffect(() => {
    new Swiper(".section-hero__swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }, []);

  return (
    <section className="section-hero">
      <div className="swiper section-hero__swiper">
        <div className="swiper-wrapper section-hero__swiper__wrapper">
          <div className="swiper-slide">
            <h1 className="section-hero__swiper__h1">
              Fast food <br />
              Restaurant
            </h1>
            <p className="section-hero__swiper__p">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <a href="#book">
              <button className="button">
                <p className="buttonn__p">Book Table</p>
              </button>
            </a>
          </div>
          <div className="swiper-slide">
            <h1 className="section-hero__swiper__h1">
              Fast food <br /> Restaurant
            </h1>
            <p className="section-hero__swiper__p">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <a href="#book">
              <button className="button">
                <p className="buttonn__p">Book Table</p>
              </button>
            </a>
          </div>
          <div className="swiper-slide">
            <h1 className="section-hero__swiper__h1">
              Fast food <br />
              Restaurant
            </h1>
            <p className="section-hero__swiper__p">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <a href="#book">
              <button className="button">Book Table</button>
            </a>
          </div>
        </div>
        <div className="swiper-pagination section-hero__swiper__pagination"></div>
      </div>
    </section>
  );
};

export default HeroSection;
