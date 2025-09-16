import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <main style={{ textAlign: "center", padding: "2rem" }}>
        <h1>🏠 Home Page</h1>
        <p>Welcome to the home page!</p>

        <button
          className="btn btn-primary mt-2"
          onClick={() => navigate("/users")}
        >
          Show Users
        </button>
      </main>
    </div>
  );
};

export default Home;
