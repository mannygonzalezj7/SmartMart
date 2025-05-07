"use client";

import React, { useState } from "react";
import data from "../utils/placeholder.json";
import GoogleMap from "../maps/google-maps";

export default function Home() {
  const [zipcode, setZipcode] = useState(53715);
  const [deal, setDeal] = useState<number>(1);
  const [show, changeShow] = useState(false);

  // Define the structure of each store in the JSON
  interface Store {
    logo: string;
    sales?: Sales;
    externalLink?: string;
  }

  interface Sales {
    name: string;
    img: string;
  }

  // Define the structure of the stores object
  interface Stores {
    [key: string]: Store;
  }

  // Type the imported data
  const stores: Stores = data.stores;

  // Handle "Next" buttons

  const updateState = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    direction: "next" | "prev"
  ) => {
    setter((prevState) =>
      direction === "next" ? prevState + 1 : prevState - 1
    );
  };

  return (
    <>
      <div className="hero">
        <h1 className="">Spend Less, Save More!</h1>
        <p>
          Our users spend less time and money fulfilling their grocery needs.
        </p>
      </div>
      <div className="stores">
        <div className="stores-head">
          <h1>Save at your favorite stores</h1>
          <p>In {zipcode}</p>
        </div>
        <div className="stores-container">
          {Object.entries(stores).map(([key, store]) => (
            <a
              href={store.externalLink}
              target="_blank"
              className="card"
              key={key}
            >
              <div className="card-img">
                <img src={store.logo} alt={key} />
              </div>
              <p>{key}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="deals">
        <h1>Today's Hot Deals</h1>
        <div className="carousel">
          <button className="prev" onClick={() => updateState(setDeal, "prev")}>
            Previous
          </button>
          {Object.entries(stores)
            .slice((deal - 1) * 2, deal * 2)
            .map(([key, store]) => (
              <div className="sales-card" key={key}>
                <img
                  src={store.sales?.img}
                  alt={store.sales?.name}
                  className="sales-img"
                />
                <button className="button-card">View More</button>
              </div>
            ))}
          <button className="next" onClick={() => updateState(setDeal, "next")}>
            Next
          </button>
        </div>
      </div>
      <div className="map">
        <h1>Stores Near You</h1>
        <GoogleMap />
      </div>
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <ul className="faq-text">
          <li className="question">What is SmartMart?</li>
          <li className="answer">
            SmartMart is a smart grocery planning tool that helps users save
            time and money by finding the best deals across nearby stores.
          </li>

          <li className="question">How do I use SmartMart?</li>
          <li className="answer">
            Simply enter your location and shopping preferences, and SmartMart
            will generate a custom plan with optimized store stops and deals.
          </li>

          <li className="question">Is SmartMart free to use?</li>
          <li className="answer">
            Yes! SmartMart is currently free to use with optional premium
            features coming soon.
          </li>

          <li className="question">
            How does SmartMart choose which stores to recommend?
          </li>
          <li className="answer">
            SmartMart uses a combination of proximity, item prices, and
            real-time deals to suggest the most cost-effective shopping plan.
          </li>

          <li className="question">Can I customize my grocery list?</li>
          <li className="answer">
            Absolutely. You can create, save, and edit your grocery lists and
            even mark favorites for quicker planning.
          </li>
          <li className="question">How much do you really save?</li>
          <li>
            Heres some estimated savings:
            <table>
              <thead>
                <tr>
                  <th>Shopping Method</th>
                  <th>Total Cost</th>
                  <th>You Save</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Traditional Grocery Shopping</td>
                  <td>$45.99</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>
                    <strong>SmartMart</strong>
                  </td>
                  <td>
                    <strong>$35.99</strong>
                  </td>
                  <td>
                    <strong>$10.00</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    </>
  );
}
