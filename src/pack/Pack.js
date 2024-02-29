// import react from "react";
import React from "react"
const Pack = () => {
  const packagedetails = {
    title1:'OUR AWESOME PACKAGES',
    title: 'Package 1',
    price: 'Rs 3000',
    cartype: 'Sedan',
    destination: 'BHOPAL to UJJAIN',
  };
  return (
    //the top work add class 
   <div class='container3'>
     <h1 class='textoverlap'>{packagedetails.title1}</h1>
     <img
        src="https://dropcalltaxi.in/wp-content/uploads/2022/01/young-couple-traveling-car-sunny-day-scaled.jpg"
        height="260px"
        width="1000px"
        alt="picture of black car" class='topimg' 
        />  
    <div >
     
      <img
        src="https://www.findrinsider.com/wp-content/uploads/2023/09/1-1-1024x538.jpg"
        height="160px"
        width="100%"
        alt="picture of black car" class="image-content" 
      />
       <div class="container" >
      <h1 class='title'>{packagedetails.title}</h1>
    
      <div class="text-content">
      <p>Price:{packagedetails.price}</p>
      <p>Car Type:{packagedetails.cartype}</p>
      <p>Destination:{packagedetails.destination}</p>
      <button >Book Now</button>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Pack;