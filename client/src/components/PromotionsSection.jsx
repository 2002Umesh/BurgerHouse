import React from "react";

const PromotionsSection = () => {
  return (
    <section className="section-promotions" id="promotions">
      <div className="section-promotions__card card">
        <div className="card__container--img">
          <img src="./images/o1.jpg" alt="burger" className="card__img" />
        </div>
        <div className="card__container">
          <h5 className="card__h5">Tasty Thursdays</h5>
          <h6 className="card__h6">
            <span className="card__span">20%</span> Off
          </h6>
          <a href="#book">
            <button className="button">
              <p className="button__p">Book Table</p>
            </button>
          </a>
        </div>
      </div>
      <div className="section-promotions__card card">
        <div className="card__container--img">
          <img src="./images/o2.jpg" alt="pizza" className="card__img" />
        </div>
        <div className="card__container">
          <h5 className="card__h5">Pizza Days</h5>
          <h6 className="card__h6">
            <span className="card__span">15%</span> Off
          </h6>
          <a href="#book">
            <button className="button">
              <p className="button__p">Book Table</p>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
