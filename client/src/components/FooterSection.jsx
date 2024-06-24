import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer__top-container">
        <div className="footer__card">
          <h5 className="footer__h5">Contact Us</h5>
          <a href="/" className="footer__a">
            <FontAwesomeIcon icon={faLocationDot} size="2x" />
            <p className="footer__p ml-5">Location</p>
          </a>

          <a href="/" className="footer__a">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <p className="footer__p ml-5">Call +01 1234567890</p>
          </a>
          <a href="/" className="footer__a">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <p className="footer__p ml-5">demo@gmail.com</p>
          </a>
        </div>

        <div className="footer__card">
          <h5 className="footer__h5">Burger House</h5>
          <p className="footer__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            deleniti obcaecati alias suscipit, laboriosam est excepturi
            similique reiciendis perspiciatis facilis tempora.
          </p>
          <div className="mt-3 space-x-5">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faPinterest} size="2x" />
          </div>
        </div>

        <div className="footer__card">
          <h5 className="footer__h5">Opening Hours</h5>
          <p className="footer__p footer__p--block">Everyday</p>
          <p className="footer__p footer__p--block"> 1:00 pm - 5:00 pm</p>
          <p className="footer__p footer__p--block"> 5:00 pm - 12:00 am</p>
        </div>
      </div>
      <div className="footer__bottom-container">
        <p className="footer__p footer__p--block">
          © 2024 All Rights Reserved By Burger House
        </p>
        <p className="footer__p footer__p--block">
          © Distributed By Burgerland
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
