"use client";

import { useState } from "react";
import data from "../../utils/placeholder.json";

export default function tripPlanner() {
  const [showCart, cartVisibility] = useState(false);

  interface LabelInfo {
    calories: number;
    totalFat: number;
  }

  interface Item {
    price: number;
    src: string;
    category: string;
  }

  interface Store {
    logo: string;
    items?: { [itemName: string]: Item };
  }

  interface Stores {
    [key: string]: Store;
  }

  const stores: Stores = data.stores;

  return (
    <div>
      <div className="grocery">
        <div className="grocery-filters">
          <form className="search-form">
            <input className="search-bar" placeholder="Search..."></input>
            <button className="button-main">Search</button>
          </form>
          <span>Filter</span>
          <span>Sort By</span>
          <span className="cart-button">
            <img src="/cart.svg" className="svg" alt="Cart Icon" />
          </span>
        </div>
        <div className="grocery-container">
          <div className="grocery-categories">
            <span>All Groceries</span>
            <ul>{}</ul>
          </div>
          <div className="grocery-items">
            {Object.entries(stores).map(([storeName, store]) => (
              <div key={storeName}>
                {store.items && (
                  <div className="grocery-items-available">
                    {Object.entries(store.items).map(([itemName, itemData]) => (
                      <div key={itemName} className="grocery-card">
                        <img src={itemData.src} alt={itemName} />
                        <p>{itemName}</p>
                        <p>${itemData.price.toFixed(2)}</p>
                        <button className="button-main">Add To Cart</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {showCart && <div className="grocery-cart"></div>}
      </div>
    </div>
  );
}
