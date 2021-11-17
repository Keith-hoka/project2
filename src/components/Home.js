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
          id="1"
          title="Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card | Neon Red/Neon Blue Joy-Con | 1080p Resolution | 802.11ac WiFi | HDMI | Surround Sound | IR Motion Camera"
          price={296}
          rating={5}
          image="https://www.techinn.com/f/13795/137956126/nintendo-switch-mario-edition-console.jpg"
        />

        <Product
          id="2"
          title="GreenForest Queen Size Bed Frame with Headboard, Metal Platform Bed with Heavy Duty Support 11inch Mattress Foundation, No Box Spring Needed, Black"
          price={3333.33}
          rating={4}
          image="https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/1180x664/e4d92e6aceaad517e7b5c12e0dc06587/g/p/gp1042686_1.jpg"
        />
      </div>

      <div className="home-row">
        <Product
          id="3"
          title="Apple iPhone 13 Pro Max, US Version, 128GB, Midnight Green - Unlocked"
          price={1896}
          rating={5}
          image="https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_13_Pro/4_to_3_Teaser_Apple_iPhone_13_Pro.jpg"
        />

        <Product
          id="6"
          title="SAMSUNG 55-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55AU8000FXZA, 2021 Model)"
          price={11960}
          rating={4}
          image="https://assets.kogan.com/files/product/2020/KALED42RF9230STA_v2/KALED42RF9230STA_1a.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753"
        />

        <Product
          id="5"
          title="Toshiba EM131A5C-SS Microwave Oven with Smart Sensor, Easy Clean Interior, ECO Mode and Sound On/Off, 1.2 Cu. ft, Stainless Steel"
          price={129.99}
          rating={5}
          image="https://pyxis.nymag.com/v1/imgs/898/e9e/b9a917553c28fc6aff930af317823db693-microwave-lede.2x.rsocial.w600.jpg"
        />
      </div>

      <div className="home-row">
      <Product
        id="4"
        title="METALTIGER Metal Storage Cabinet - Multifunctional Garage Storage Closet with Doors, Adjustable Shelf Height and Leg Levelers, Includes Pegboard and Accessories, 900 lbs Full Capacity (Dark Gray)"
        price={1350.99}
        rating={4}
        image="https://blog.architizer.com/wp-content/uploads/Plywood-kitchen-cabinetry-pros-and-cons-KBR-1024x533-1.jpg"
      />

      </div>

    </div>
  );
}

export default Home;
