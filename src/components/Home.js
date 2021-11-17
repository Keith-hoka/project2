import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
      >
        <img className="home-image" src="https://m.media-amazon.com/images/I/61SrpGYn+OL._SX3000_.jpg" alt="" />
        <img className="home-image" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" />
        <img className="home-image" src="https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg" alt="" />
        <img className="home-image" src="https://m.media-amazon.com/images/I/71H5hK4wUqL._SX3000_.jpg" alt="" />
        <img className="home-image" src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" />
        <img className="home-image" src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" alt="" />
        <img className="home-image" src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="" />
      </AliceCarousel>

      <div className="home-row">
        <Product
          id="12345"
          title="A Bike"
          price={11.96}
          rating={5}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1606749953-yoji16-neongreen-1606749936.png"
        />

        <Product
          id="12345"
          title="A Bike"
          price={11.96}
          rating={5}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1606749953-yoji16-neongreen-1606749936.png"
        />
      </div>

    </div>
  );
}

export default Home;
