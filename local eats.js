import React, { useState } from "react";

function App() {
  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: "Mama's Kitchen",
      cuisine: "North Indian",
      menu: ["Rajma Chawal", "Paneer Butter Masala", "Kadhi Rice"],
      whatsapp: "https://wa.me/919876543210",
      inventory: ["Rice - 20kg", "Paneer - 5kg", "Spices - 10kg"],
    },
    {
      id: 2,
      name: "Tandoori Tales",
      cuisine: "Mughlai",
      menu: ["Chicken Tikka", "Biryani", "Seekh Kebab"],
      whatsapp: "https://wa.me/919812345678",
      inventory: ["Chicken - 15kg", "Rice - 25kg", "Oil - 8L"],
    },
  ]);

  const [newVendor, setNewVendor] = useState({
    name: "",
    cuisine: "",
    whatsapp: "",
  });

  const handleRegister = () => {
    if (!newVendor.name || !newVendor.cuisine || !newVendor.whatsapp) return;
    setVendors([
      ...vendors,
      {
        ...newVendor,
        id: vendors.length + 1,
        menu: [],
        inventory: [],
      },
    ]);
    setNewVendor({ name: "", cuisine: "", whatsapp: "" });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ color: "green" }}>🍲 Local Eats</h1>
        <button>Advertise With Us</button>
      </header>

      {/* Vendor Registration */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Register Your Food Business</h2>
        <p>We design attractive menus for you and help manage your inventory.</p>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <input
            placeholder="Vendor Name"
            value={newVendor.name}
            onChange={(e) =>
              setNewVendor({ ...newVendor, name: e.target.value })
            }
          />
          <input
            placeholder="Cuisine Type"
            value={newVendor.cuisine}
            onChange={(e) =>
              setNewVendor({ ...newVendor, cuisine: e.target.value })
            }
          />
          <input
            placeholder="WhatsApp Link"
            value={newVendor.whatsapp}
            onChange={(e) =>
              setNewVendor({ ...newVendor, whatsapp: e.target.value })
            }
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      </section>

      {/* Vendor Listing */}
      <section>
        <h2>Available Vendors</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
              }}
            >
              <h3 style={{ color: "green" }}>{vendor.name}</h3>
              <p>{vendor.cuisine}</p>

              <h4>Menu</h4>
              <ul>
                {vendor.menu.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4>Inventory</h4>
              <ul>
                {vendor.inventory.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <a href={vendor.whatsapp} target="_blank" rel="noopener noreferrer">
                <button style={{ marginTop: "10px", background: "green", color: "white" }}>
                  Order on WhatsApp
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
