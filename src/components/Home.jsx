import "./Home.css";
import Product from "./Product.jsx";

const Home = () => {
  return (
    <div className="home">
      <img className="home__image" src="banner.jpg" alt="" />

      <div className="home__row">
        <Product
          id="0297454"
          title="Circulon A1 Series with ScratchDefense Technology Nonstick Induction Cookware/Pots and Pans Set, 9 Piece, Graphite"
          price={279.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81JWSdoNqGL._AC_SL1500_.jpg"
        />
        <Product
          id="0297454"
          title="Hisense 40-Inch Class A4 Series FHD 1080p Google Smart TV (40A4K) - DTS Virtual: X, Game & Sports Modes, Chromecast Built-in, Alexa Compatibility, Black"
          price={149.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71vd0UkOYOL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="0297454"
          title="INTEX Dura-Beam Deluxe Comfort-Plush Luxury Air Mattress: Fiber-Tech Construction"
          price={70.35}
          rating={4}
          image="https://m.media-amazon.com/images/I/71WGsXRgQrL._AC_SL1500_.jpg"
        />
        <Product
          id="0297454"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="product1.jpg"
        />
        <Product
          id="0297454"
          title="
          Qhou KRIB-XQB201A-GREY6 Full Automatic Washing Machine, Gold"
          price={225.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51NyvM7IVrL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="0297454"
          title='SAMSUNG 34" Odyssey G85SB Series QD-OLED Ultra WQHD Curved Gaming Monitor, 175Hz, 0.03ms, DisplayHDR True Black 400, AMD FreeSync Premium Pro, Advanced Game Streaming, LS34BG850SNXZA, 2023'
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61-foZT3rkL._AC_SL1200_.jpg"
        />
      </div>

      {/* product */}
    </div>
  );
};

export default Home;
