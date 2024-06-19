import React, { useState } from "react";

import { FaPlusCircle } from "react-icons/fa";
import { useAuth } from "../store/auth";

const MenuSection = () => {
  const { myOrders } = useAuth();
  const [order, setOrder] = useState([]);
  const [filterOption, setFilterOption] = useState("all");
  const [menuItems, setMenuItems] = useState([
    {
      type: "burger",
      image: "./images/f7.png",
      title: "Ham Burger",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$20",
      add: false,
    },
    {
      type: "pizza",
      image: "./images/f1.png",
      title: "Indian Pizza",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$20",
      add: false,
    },
    {
      type: "burger",
      image: "./images/f2.png",
      title: "Delicious Burger",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$15",
      add: false,
    },
    {
      type: "pizza",
      image: "./images/f3.png",
      title: "Delicious Pizza",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$17",
      add: false,
    },
    {
      type: "pasta",
      image: "./images/f4.png",
      title: "Delicious Pasta",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$18",
      add: false,
    },
    {
      type: "burger",
      image: "./images/f8.png",
      title: "Tasty Burger",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$14",
      add: false,
    },
    {
      type: "fries",
      image: "./images/f5.png",
      title: "French Fries",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$10",
      add: false,
    },
  ]);

  const filterSelection = (option) => {
    setFilterOption(option);
  };

  const handleItemClick = (item, index) => {
    const updateMenu = menuItems.map((mItem) => {
      if (item.title === mItem.title) {
        return {
          ...mItem,
          add: !item.add,
        };
      }
      
      return mItem;
    });
    setMenuItems(updateMenu);
    const updatedItem = { ...item, add: !item.add };

    // if (filterOption === "all") {
    //   const updatedMenuItems = [...menuItems];
    //   updatedMenuItems[index] = updatedItem;
    //   setMenuItems(updatedMenuItems);
    // } else {
    //   const updatedMenuItems = [...filteredItems];
    //   updatedMenuItems[index] = updatedItem;
    //   filteredItems = updatedMenuItems;
    //   // setMenuItems(updatedMenuItems);
    // }

    if (updatedItem.add) {
      const newOrder = [
        ...order,
        { items: updatedItem.title, top: false, toppings: "" },
      ];
      setOrder(newOrder);
      myOrders(newOrder);
    } else {
      const newOrder = order.filter(
        (orderItem) => orderItem.items !== updatedItem.title
      );
      setOrder(newOrder);
      myOrders(newOrder);
    }
  };

  let filteredItems =
    filterOption === "all"
      ? menuItems
      : menuItems.filter((item) => item.type === filterOption);

  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    "Extra spicy",
    "Extra cheese",
    "Extra onion",
    "Extra veg",
    "Extra sausage",
  ];

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSelectAll = () => {
    setSelectedItems(items);
  };

  const handleTopping = () => {
    const updatedOrder = order.map((orderItem) => {
      const menuItem = menuItems.find((item) => item.title === orderItem.items);
      if (menuItem && orderItem.top) {
        return {
          ...orderItem,
          top: false,
          toppings: selectedItems.join(", "),
        };
      }
      return orderItem;
    });
    setOrder(updatedOrder);
    myOrders(updatedOrder);
    setSelectedItems([]);
  };

  const toggleToppingModal = (item) => {
    const updatedOrder = order.map((oItem) => {
      if (item.title === oItem.items) {
        return {
          ...oItem,
          top: !oItem.top,
        };
      }
      return oItem;
    });
    setOrder(updatedOrder);
    myOrders(updatedOrder);
  };

  console.log("from order: ", order);

  return (
    <section className="section-menu" id="menu">
      <h2 className="section-menu__h2">Our Menu</h2>
      <div className="section-menu__container" id="btn-container">
        <button
          id="all-btn"
          className={`button--light ${filterOption === "all" ? "active" : ""}`}
          onClick={() => filterSelection("all")}
        >
          All
        </button>
        <button
          id="burger-btn"
          className={`button--light ${
            filterOption === "burger" ? "active" : ""
          }`}
          onClick={() => filterSelection("burger")}
        >
          Burger
        </button>
        <button
          id="pizza-btn"
          className={`button--light ${
            filterOption === "pizza" ? "active" : ""
          }`}
          onClick={() => filterSelection("pizza")}
        >
          Pizza
        </button>
        <button
          id="pasta-btn"
          className={`button--light ${
            filterOption === "pasta" ? "active" : ""
          }`}
          onClick={() => filterSelection("pasta")}
        >
          Pasta
        </button>
        <button
          id="fries-btn"
          className={`button--light ${
            filterOption === "fries" ? "active" : ""
          }`}
          onClick={() => filterSelection("fries")}
        >
          Fries
        </button>
      </div>
      <div className="section-menu__container section-menu__container--food">
        {filteredItems.map((item, index) => (
          <div key={index} className={`section-menu__filter-card `}>
            <div
              className="filter-card__img-container"
              onClick={() => handleItemClick(item, index)}
            >
              <img
                src={item.add ? "./images/check.png" : item.image}
                alt={item.type}
                className="filter-card__img"
              />
            </div>
            <div className="filter-card__text-container relative">
              <h3 className="filter-card__h3">{item.title}</h3>
              <p className="filter-card__p">{item.description}</p>
              <div className="flex justify-between">
                <h4 className="filter-card__h4">{item.price}</h4>
                {item.add && (
                  <div className="">
                    <div onClick={() => toggleToppingModal(item)} className="">
                      <FaPlusCircle size={30} />
                    </div>
                    {order.find(
                      (orderItem) =>
                        orderItem.top && orderItem.items === item.title
                    ) && (
                      <div className="absolute">
                        <div className="flex justify-center items-center ">
                          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                            <ul>
                              {items.map((topping, index) => (
                                <li
                                  key={index}
                                  className="flex items-center py-2"
                                >
                                  <input
                                    type="checkbox"
                                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    checked={selectedItems.includes(topping)}
                                    onChange={() =>
                                      handleCheckboxChange(topping)
                                    }
                                  />
                                  {topping}
                                </li>
                              ))}
                            </ul>
                            <div className="flex justify-between mt-4">
                              <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                onClick={handleSelectAll}
                              >
                                Select All
                              </button>
                              <button
                                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                                onClick={handleTopping}
                              >
                                Add Topping
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
