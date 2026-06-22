import React, { useState } from "react";

function App() {
  const foods = ["Pizza", "Burger", "Biriyani", "Ice Cream", "Pasta"];

  const [message, setMessage] = useState(
    "Select a food that you love!"
  );

  const handleClick = (food) => {
    setMessage(`I love ${food}!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>My Favorite Foods</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {foods.map((food, index) => (
          <li key={index} style={{ margin: "10px" }}>
            {food}
            <button
              onClick={() => handleClick(food)}
              style={{ marginLeft: "10px" }}
            >
              Love It
            </button>
          </li>
        ))}
      </ul>

      <h3>{message}</h3>
    </div>
  );
}

export default App;