import { useState } from "react";

export default function App() {
  const [showTshirts, setShowTshirts] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛍️ Sujoy's Homemade Store</h1>

      <div style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "10px"
      }}>
        <h2>Handmade Sticker</h2>
        <p>Price: ₹99</p>
        <button>Buy Now</button>
      </div>

      <div style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "10px"
      }}>
        <h2>Custom Gift Item</h2>
        <p>Price: ₹150</p>
        <button>Buy Now</button>
      </div>

      <div style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "10px"
      }}>
        <h2>Printed T-Shirt</h2>
        <p>Price: ₹149</p>
        <button onClick={() => setShowTshirts(true)}>
          Buy Now
        </button>
      </div>

      {showTshirts && (
        <>
          <div style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px"
          }}>
            <img src="/tshirt1.jpg" alt="Black T-Shirt" width="200" />
            <h2>Black T-Shirt</h2>
            <p>Price: ₹199</p>
          </div>

          <div style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px"
          }}>
            <img src="/tshirt2.jpg" alt="White T-Shirt" width="200" />
            <h2>White T-Shirt</h2>
            <p>Price: ₹149</p>
          </div>

          <div style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px"
          }}>
            <img src="/tshirt3.jpg" alt="Blue T-Shirt" width="200" />
            <h2>Blue T-Shirt</h2>
            <p>Price: ₹149</p>
          </div>
        </>
      )}
    </div>
  );
}