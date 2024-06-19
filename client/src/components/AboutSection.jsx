import React from "react";

const AboutSection = () => {
  return (
    <section className="section-about" id="about">
      <div className="section-about__container">
        <div className="section-about__img-container">
          <img
            src="./images/about-img.png"
            alt="burger"
            className="section-about__img"
          />
        </div>
        <div className="section-about__text-container">
          <h2 className="section-about__h2">We are Burger Shop</h2>
          <p className="section-about__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            recusandae id perspiciatis labore molestias pariatur cum suscipit
            voluptatem enim dolor odio vero nostrum inventore veritatis, harum,
            dolorem, ipsam laboriosam. Earum quos maiores quam aliquid natus.
            Reprehenderit maxime ab nobis? Quisquam similique fugit totam neque
            quaerat, ipsam provident laboriosam modi quam quibusdam enim ab
            deleniti molestias id eaque maiores?
          </p>
          <a href="#book">
            <button className="button">
              <p className="buttonn__p">Book Table</p>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
