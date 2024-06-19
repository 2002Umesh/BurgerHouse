import React, { useState } from "react";
import { useAuth } from "../store/auth";

const BookSection = () => {
  const { orders, isRegister } = useAuth();
  let isOrder = !!orders;
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    order: "",
    date: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (e) => {
    e.preventDefault();

    if (isRegister) {
      if (
        !formData.fullName ||
        !formData.phone ||
        !formData.email ||
        !formData.date
        // ||formData.order === ""
      ) {
        alert("Please fill in all fields.");
        return false;
      }

      if (formData.persons === "") {
        alert("Please select the items.");
        return false;
      }

      submitForm();
      window.location.reload();
      return true;
    } else {
      alert("Please login!!!");
    }
  };

  const submitForm = () => {
    alert("Your order has been placed!");

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      order: "",
      date: "",
    });
  };

  return (
    <section className="section-book" id="book">
      <div className="section-book__container">
        <h2 className="section-book__h2">Book A Table</h2>
        <form
          onSubmit={validateForm}
          className="section-book__form"
          id="form-book"
        >
          <input
            name="fullName"
            type="text"
            className="section-book__input"
            placeholder="Your Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <input
            name="phone"
            type="text"
            className="section-book__input"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            name="email"
            type="email"
            className="section-book__input"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {!isOrder ? (
            <input
              name="order"
              type="text"
              className="section-book__input"
              placeholder="Your order"
              value={formData.order}
              onChange={handleInputChange}
              required
            ></input>
          ) : (
            <ul className="list-disc list-inside max-h-20 overflow-y-auto">
              {orders?.map((item, index) => (
                <div
                  key={index}
                  className="mb-2 p-4 border border-gray-200 rounded shadow-sm"
                >
                  <li className="font-semibold text-lg">
                    {item.items}:{item.toppings}
                  </li>
                </div>
              ))}
            </ul>
          )}
          <input
            type="date"
            className="section-book__input"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
          <input
            type="submit"
            value="BOOK NOW"
            className="button"
            id="submit-btn"
          />
        </form>
      </div>
      <div className="section-book__container">
        <img
          src="./images/map.png"
          alt="google maps"
          className="section-book__img"
        />
      </div>
    </section>
  );
};

export default BookSection;
