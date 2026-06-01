export default function App() {
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
        <p>Price: ₹199</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Sujoy's Homemade Store</h1>
      <hr />

      {/* Product 1: Handmade Sticker */}
      <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px", borderRadius: "10px" }}>
        <h2>Handmade Sticker</h2>
        <p>Price: ₹99</p>
        <button>Buy Now</button>
      </div>

      {/* Product 2: Custom Gift Item */}
      <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px", borderRadius: "10px" }}>
        <h2>Custom Gift Item</h2>
        <p>Price: ₹199</p>
        <button>Buy Now</button>
      </div>

      {/* Product 3: Printed T-Shirt */}
      <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px", borderRadius: "10px" }}>
        <h2>Printed T-Shirt</h2>
        <p>Price: ₹499</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
}