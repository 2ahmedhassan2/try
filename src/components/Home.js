import React from "react";
import "./styles/home.css";

function Home() {
  return (
    <main className="home">
      <h2>Welcome to Educational Hub</h2>
      <p>Your journey to knowledge begins here. Explore our courses now!</p>
      <a href="/courses" className="btn">Explore Courses</a>
    </main>
  );
}

export default Home;
