import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";
import Comparison from "./Comparison";

const Home = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCompare = (product) => {
    // Eğer ürün zaten seçili değilse ekleyin
    if (!selectedProducts.find((p) => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
    console.log("Comparing product with ID:", product.id);
  };

  const handleRemoveComparison = (productId) => {
    setSelectedProducts(selectedProducts.filter((product) => product.id !== productId));
  };

  return (
    <div className="home">
      <div className="home__container">
      <img
        className="home__image"
        src="https://resmim.net/cdn/2024/06/19/fUD7Rk.png"
        alt=""
      />
        <div className="home__row">
          <Product
            id="12321341"
            title="Eric Ries-The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={324.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            onCompare={() => handleCompare({
              id: "12321341",
              title: "Eric Ries-The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
              price: 324.99,
              rating: 5,
              image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
            })}
            isSelected={selectedProducts.some((p) => p.id === "12321341")}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Pişirme için Stand Mikser, K-çırpıcılı Şık Mutfak Mikseri, Hamur Kancası ve Çırpma Teli, 5 Litre Cam Kase"
            price={12499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            onCompare={() => handleCompare({
              id: "49538094",
              title: "Kenwood kMix Pişirme için Stand Mikser, K-çırpıcılı Şık Mutfak Mikseri, Hamur Kancası ve Çırpma Teli, 5 Litre Cam Kase",
              price: 12499.99,
              rating: 4,
              image: "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
            })}
            isSelected={selectedProducts.some((p) => p.id === "49538094")}
          />
          <Product
            id="4903850"
            title="Fitbit Charge 4 Akıllı Fitness Saati"
            price={4499.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            onCompare={() => handleCompare({
              id: "4903850",
              title: "Fitbit Charge 4 Akıllı Fitness Saati",
              price: 4499.99,
              rating: 3,
              image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
            })}
            isSelected={selectedProducts.some((p) => p.id === "4903850")}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3. nesil) | Alexa Akıllı Hoparlor"
            price={3999.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            onCompare={() => handleCompare({
              id: "23445930",
              title: "Amazon Echo (3. nesil) | Alexa Akıllı Hoparlor",
              price: 3999.99,
              rating: 5,
              image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
            })}
            isSelected={selectedProducts.some((p) => p.id === "23445930")}
          />
        </div>

        <div className="home__row">
          <Product
            id="3254354345"
            title="Yeni Apple iPad Pro (12,9 inç, Wi-Fi, 128 GB) - Gümüş (4. Nesil)"
            price={24999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            onCompare={() => handleCompare({
              id: "3254354345",
              title: "Yeni Apple iPad Pro (12,9 inç, Wi-Fi, 128 GB) - Gümüş (4. Nesil)",
              price: 24999.99,
              rating: 4,
              image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
            })}
            isSelected={selectedProducts.some((p) => p.id === "3254354345")}
          />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Kavisli Led Oyuncu Monitörü - WQHD 5120 x 1440"
            price={32999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            onCompare={() => handleCompare({
              id: "90829332",
              title: "Samsung LC49RG90SSUXEN 49' Kavisli Led Oyuncu Monitörü - WQHD 5120 x 1440",
              price: 32999.99,
              rating: 4,
              image: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
            })}
            isSelected={selectedProducts.some((p) => p.id === "90829332")}
          />
          <Product
            id="90829333"
            title="Sony WH-1000XM4 Kablosuz Gürültü Önleyici Kulaklık"
            price={9799.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SX466_.jpg"
            onCompare={() => handleCompare({
              id: "90829333",
              title: "Sony WH-1000XM4 Kablosuz Gürültü Önleyici Kulaklık",
              price: 9799.99,
              rating: 5,
              image: "https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SX466_.jpg",
            })}
            isSelected={selectedProducts.some((p) => p.id === "90829333")}
          />
          <Product
            id="90829334"
            title="Dell XPS 15 9500 - 15.6' 4K UHD+ Touch - 10th Gen Intel Core i7-10750H - 32GB RAM - 1TB SSD"
            price={29999.99}
            rating={5}
            image="https://resmim.net/cdn/2024/06/19/fUDaoQ.png"
            onCompare={() => handleCompare({
              id: "90829334",
              title: "Dell XPS 15 9500 - 15.6' 4K UHD+ Touch - 10th Gen Intel Core i7-10750H - 32GB RAM - 1TB SSD",
              price: 29999.99,
              rating: 5,
              image: "https://resmim.net/cdn/2024/06/19/fUDaoQ.png",
            })}
            isSelected={selectedProducts.some((p) => p.id === "90829334")}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829335"
            title="LG OLED65C1PUB 65 Inch 4K Smart OLED TV"
            price={62999.99}
            rating={4}
            image="https://resmim.net/cdn/2024/06/19/fUDU87.png"
            onCompare={() => handleCompare({
              id: "90829335",
              title: "LG OLED65C1PUB 65 Inch 4K Smart OLED TV",
              price: 62999.99,
              rating: 4,
              image: "https://resmim.net/cdn/2024/06/19/fUDU87.png",
            })}
            isSelected={selectedProducts.some((p) => p.id === "90829335")}
          />
                    <Product
            id="90829336"
            title="Garmin Forerunner 945 GPS Premium Multisport Smartwatch"
            price={19999.99}
            rating={4}
            image="https://resmim.net/cdn/2024/06/19/fUDvHR.png"
            onCompare={() => handleCompare({
              id: "90829336",
              title: "Garmin Forerunner 945 GPS Premium Multisport Smartwatch",
              price: 19999.99,
              rating: 4,
              image: "https://resmim.net/cdn/2024/06/19/fUDvHR.png",
            })}
            isSelected={selectedProducts.some((p) => p.id === "90829336")}
          />
          <Product
            id="90829337"
            title="Canon EOS R6 Full-Frame Mirrorless Camera with 4K Video"
            price={65499.99}
            rating={5}
            image="https://resmim.net/cdn/2024/06/19/fUNfTy.png"
            onCompare={() => handleCompare({
              id: "90829337",
              title: "Canon EOS R6 Full-Frame Mirrorless Camera with 4K Video",
              price: 65499.99,
              rating: 5,
              image: "https://resmim.net/cdn/2024/06/19/fUNfTy.png",
            })}
            isSelected={selectedProducts.some((p) => p.id === "90829337")}
          />
          <Product
            id="90829338"
            title="HP Envy 17 Laptop, Intel Core i7-1165G7, NVIDIA GeForce MX450 Graphics, 16 GB RAM, 1 TB SSD"
            price={50999.99}
            rating={5}
            image="https://resmim.net/cdn/2024/06/19/fUNmAI.png"
            onCompare={() => handleCompare({
              id: "90829338",
              title: "HP Envy 17 Laptop, Intel Core i7-1165G7, NVIDIA GeForce MX450 Graphics, 16 GB RAM, 1 TB SSD",
              price: 50999.99,
              rating: 5,
              image: "https://resmim.net/cdn/2024/06/19/fUNmAI.png",
            })}
            isSelected={selectedProducts.some((p) => p.id === "90829338")}
          />
        </div>

        <Comparison
          selectedProducts={selectedProducts}
          removeFromComparison={handleRemoveComparison}
        />
      </div>
    </div>
  );
}

export default Home;
