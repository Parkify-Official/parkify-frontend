import React, { useEffect } from "react";
import { onGetData } from "../../../apicalling";

import "./dashboard.css";

export default function NotFound() {
 const [garages, setGarages] = React.useState([
  {
   name: "Garage Name",
   location: "Kalyani",
   latitude: "22.576431",
   longitude: "88.453630",
  },
  {
   name: "Garage Name",
   location: "Kolkata",
   latitude: "22.576431",
   longitude: "88.453630",
  },
  {
   name: "Garage Name",
   location: "Delhi",
   latitude: "22.576431",
   longitude: "88.453630",
  },

  {
   name: "Garage Name",
   location: "Delhi",
   latitude: "22.576431",
   longitude: "88.453630",
  },]);

 // useEffect(() => {
 //  onGetData("garages").then((res) => {
 //   setGarages(res);
 //  });
 // }, []);

 return (
  <section>
   <div className="top-part">
    <h1>All Garages</h1>
   </div>

   <div className="garage-card-container">
    {/* <img src="garage.jpg" alt="John" style="width:100%" /> */}
    {garages &&
     garages.map((garage, i) => {

      return (
       <div className="garage-card" key={i}>
        <h2>{garage.name}</h2>
        <div className="content-container">
         <div className="content-row">
          <p className="title">Location :</p>
          <p className="data">{garage.location}</p>
         </div>
         <div className="content-row">
          <p className="title">Latitude :</p>
          <p className="data">{garage.latitude}</p>
         </div>
         <div className="content-row">
          <p className="title">Longitude :</p>
          <p className="data">{garage.longitude}</p>
         </div>


         <p>
          <button>Manage</button>
         </p>
        </div>
       </div>
      );
     })}
   </div>
  </section>
 );
}
