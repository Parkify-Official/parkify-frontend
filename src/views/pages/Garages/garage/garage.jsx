import React, { useEffect } from "react";

import "./garage.css";

export default function NotFound() {

 const [garages, setGarages] = React.useState([]);

 // useEffect(() => {

 //  // get data from url path last part
 //  const name = window.location.pathname.split("/").pop();

 //  // get data from api
 //  onGetData("garages", name).then((res) => {
 //   setGarages(res);
 //  });
 // }, []);


 return (
  <section>
   <div className="div-container">

    <div className="left-div">
     <div className="div-top">
      <h3>Manage Garages</h3>
      <a href="#" className="edit-btn">Edit</a>
     </div>
     <div className="div-row">
      <div className="div-cell">
       <p className="cell-head">
        Name
       </p>
       <p className="cell-content">Garage Name</p>
      </div>
      <div className="div-cell">
       <p className="cell-head">
        Location
       </p>
       <p className="cell-content">Kolkata</p>
      </div>
     </div>
     <div className="div-row">
      <div className="div-cell">
       <p className="cell-head">
        Latitude
       </p>
       <p className="cell-content">22.576431</p>
      </div>
      <div className="div-cell">
       <p className="cell-head">
        Longitude
       </p>
       <p className="cell-content">88.453630</p>
      </div>

     </div>
     <div className="div-row">
      <div className="div-cell">
       <p className="cell-head">
        Customers
       </p>
       <p className="cell-content">256</p>
      </div>
      <div className="div-cell">
       <p className="cell-head">
        Phone
       </p>
       <p className="cell-content">+91-8578565947</p>
      </div>
     </div>
    </div>

    <div className="right-div">
     <div className="container">
      <div className="card">
       <div className="profile-pic">
        {/* <img src="undraw_Online_organizer_re_156n-removebg-preview.png" alt="profile"> */}
       </div>
       <h2 className="name">Person name</h2>
       <h3 className="username">Admin</h3>
      </div>
      <div className="stats">
       <div className="stat">
        <h4 className="number">51</h4>
        <p className="label">Uses</p>
       </div>
       <div className="stat">
        <h4 className="number">4.82</h4>
        <p className="label">Ratings</p>
       </div>
       <div className="stat">
        <h4 className="number">3</h4>
        <p className="label">Saved</p>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="btn-container">
    <button className="button">Confirm</button>
   </div>
  </section >
 );
}