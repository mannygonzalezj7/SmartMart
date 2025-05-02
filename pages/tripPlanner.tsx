import data from "../utils/placeholder.json";
import { useState } from "react";

export default function tripPlanner() {
  const [trip, changeTrip] = useState();
  const [list, changeList] = useState();
  const [transportation, changeTransportation] = useState();

  interface Trip {
    name?: string;
  }

  interface List {
    name?: string;
    items?: object;
  }

  interface Trips {
    [key: string]: Trip;
  }

  interface Lists {
    [key: string]: List;
  }

  const trips: Trips = data.trips;
  const lists: Lists = data.groceryLists;

  return (
    <div className="planner">
      <div className="planner-trip">
        <div className="planner-section-header">
          <h1>Select Trip</h1>
          <p className="small-text">Edit or Create New Trip</p>
        </div>
        <div className="planner-card-slider">
          {Object.entries(trips).map(([key, trip]) => (
            <div className="planner-card" key={key}>
              <button className="planner-button">
                <h1>
                  {trip.name
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")}
                </h1>
              </button>
              <p>{trip.name}</p>
            </div>
          ))}
          <div className="planner-card-slider">
            <div className="planner-card">
              <button className="planner-button">
                <p>New Trip</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="planner-trip">
        <div className="planner-section-header">
          <h1>Grocery Lists</h1>
          <p className="small-text">Please select at least one</p>
        </div>
        <div className="planner-card-slider">
          {Object.entries(lists).map(([key, trip]) => (
            <div className="planner-card">
              <button className="planner-button">
                <h1>
                  {trip.name
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")}
                </h1>
              </button>
              <p>{trip.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="planner-trip">
        <div className="planner-section-header">
          <h1>Transportation Method</h1>
          <p className="small-text">Please select mode of transportation</p>
        </div>
        <div className="planner-card-slider">
          <div className="planner-card">
            <button className="planner-button">
              <h1>IMG</h1>
            </button>
            <p>Walk</p>
          </div>
          <div className="planner-card">
            <button className="planner-button">
              <h1>IMG</h1>
            </button>
            <p>Bike</p>
          </div>
          <div className="planner-card">
            <button className="planner-button">
              <h1>IMG</h1>
            </button>
            <p>Public Transportation</p>
          </div>
          <div className="planner-card">
            <button className="planner-button">
              <h1>IMG</h1>
            </button>
            <p>Car</p>
          </div>
        </div>
      </div>
      <div className="button-holder">
        <button className="button-secondary">Start Trip</button>
      </div>
    </div>
  );
}
