import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const userName = "Nakul";

  console.log("React app started");

  const headingStyle = {
    color: "blue",
    textAlign: "center",
    fontWeight: "bold",
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 text-center" style={{ width: "30rem" }}>
        
        <h1 style={headingStyle}>
          Welcome to React Learning, {userName}
        </h1>


        <p className="text-primary fw-bold">
          This is your first card with images and styles!
        </p>

      </div>
    </div>
  );
}

export default App;