// import react from "react";
import React from "react"
const Pack = () => {
  const packagedetails = {
    title: 'Package 2',
    price: 'Rs 3000',
    cartype: 'Sedan',
    destination: 'BHOPAL to INDORE',
  };
  return (
    <div class='container3' > 
    
      <img
        src="https://manthandiary.files.wordpress.com/2013/11/rajwada-palace.jpg"
        height="160px"
        width="180px"
        alt="picture of black car" class="image-content" 
      />
      <div class="container1" >
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