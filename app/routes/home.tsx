import type { Route } from "./+types/home";
import { useState } from "react";
import "../styles/home.css";
import data from "../utils/placeholder.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SmartMart" },
    { name: "description", content: "Welcome to SmartMart!" },
  ];
}

export default function Home() {
  const [zipcode, setZipcode] = useState(53715);
  const [deal, setDeal] = useState(1);
  const [show, changeShow] = useState(false);

  // Define the structure of each store in the JSON
  interface Store {
    logo: string;
    sales?: Sales;
  }

  interface Sales {
    name: string;
    img: string;
  }

  interface Questions {
    question: string;
  }

  // Define the structure of the stores object
  interface Stores {
    [key: string]: Store;
  }

  // Type the imported data
  const stores: Stores = data.stores;

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
            <div className="card" key={key} onClick={(e) => {}}>
              <div className="card-img">
                <img src={store.logo} />
              </div>
              <p>{key}</p>
            </div>
          ))}
          <div className="card">
            <div className="card-img">
              <p>See More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="deals">
        <h1>Today's Hot Deals</h1>
        <div className="carousel">
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
        </div>
      </div>
      <div className="map">
        <h1>Stores Near You</h1>
        <img src="public/google-maps-placeholder.png" />
      </div>
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <div>Question 1</div>
      </div>
    </>
  );
}
