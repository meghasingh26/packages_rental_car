// import react from "react";
import React from "react"
const Pack = () => {
  const packagedetails = {
    title: 'Package 3',
    price: 'Rs 17/km',
    cartype: 'Sedan',
    destination: 'BHOPAL to all india',
  };
  return (
    <div class='container3'>
      
      <img
        src="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg"
        height="160px"
        width="180px"
        alt="picture of black car" class="image-content" 
      />
       <div  class="container2">
      <h1 class='title'>{packagedetails.title}</h1>
      <div class="text-content">
      <p>Price:{packagedetails.price}</p>
      <p>Car Type:{packagedetails.cartype}</p>
      <p>Destination:{packagedetails.destination}</p>
      <button>Book Now</button>
    </div>
    </div>
    </div>
  );
};

export default Pack;