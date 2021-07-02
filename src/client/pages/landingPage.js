import React from "react";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          It's not just food. <u>It's an experience.</u>
        </h1>
        <a href={"/meal"}>
          {" "}
          <button>Get started</button>
        </a>
      </div>
    </div>
  );
}

