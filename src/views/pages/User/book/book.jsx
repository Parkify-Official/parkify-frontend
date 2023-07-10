import React from "react";
import { onGetData } from "../../../apicalling";
import "./book.css";

export default function NotFound() {

 const [garages, setGarages] = React.useState([])

 const searchForGarages = () => {

  // get current lat and long

  if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(lat, long);
    onGetData("http://localhost:5000/garages", { lat, long })
     .then((data) => {
      console.log(data);
      setGarages(data);
     })
     .catch((err) => {
      console.log(err);
     });
   });
  } else {
   console.log("Geolocation is not supported by this browser.");
  }
 };



 return (
  <main>
   <div className="search-part">
    <h1>Welcome to Parkify!</h1>
    <button className="button" onClick={searchForGarages}>Search for Garages</button>
   </div>
   <div className="result-part">

    <div className="result-row">
     <div className="result-cells">
      <h4>Garage Name :</h4>
      <p>Demo name</p>
     </div>
     <div className="result-cells">
      <h4>Location :</h4>
      <p>Kolkata</p>
     </div>
     <div className="result-cells">
      <h4>Charge per hour :</h4>
      <p>50</p>
     </div>
     <div className="result-cells" id="book-btn-cell">
      <button className="book-btn">
       Book Now
      </button>
     </div>
    </div>

    <div className="result-row">
     <div className="result-cells">
      <h4>Garage Name :</h4>
      <p>Demo name</p>
     </div>
     <div className="result-cells">
      <h4>Location :</h4>
      <p>Kolkata</p>
     </div>
     <div className="result-cells">
      <h4>Charge per hour :</h4>
      <p>50</p>
     </div>
     <div className="result-cells" id="book-btn-cell">
      <button className="book-btn">
       Book Now
      </button>
     </div>
    </div>

    <div className="result-row">
     <div className="result-cells">
      <h4>Garage Name :</h4>
      <p>Demo name</p>
     </div>
     <div className="result-cells">
      <h4>Location :</h4>
      <p>Kolkata</p>
     </div>
     <div className="result-cells">
      <h4>Charge per hour :</h4>
      <p>50</p>
     </div>
     <div className="result-cells" id="book-btn-cell">
      <button className="book-btn">
       Book Now
      </button>
     </div>
    </div>

    <div className="result-row">
     <div className="result-cells">
      <h4>Garage Name :</h4>
      <p>Demo name</p>
     </div>
     <div className="result-cells">
      <h4>Location :</h4>
      <p>Kolkata</p>
     </div>
     <div className="result-cells">
      <h4>Charge per hour :</h4>
      <p>50</p>
     </div>
     <div className="result-cells" id="book-btn-cell">
      <button className="book-btn">
       Book Now
      </button>
     </div>
    </div>

    <div className="result-row">
     <div className="result-cells">
      <h4>Garage Name :</h4>
      <p>Demo name</p>
     </div>
     <div className="result-cells">
      <h4>Location :</h4>
      <p>Kolkata</p>
     </div>
     <div className="result-cells">
      <h4>Charge per hour :</h4>
      <p>50</p>
     </div>
     <div className="result-cells" id="book-btn-cell">
      <button className="book-btn">
       Book Now
      </button>
     </div>
    </div>

   </div>
  </main>
 );
}