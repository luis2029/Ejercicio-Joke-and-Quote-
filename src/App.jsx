// App.jsx
//import React from "react";
import JokeCard from "./JokeCard";
import QuoteCard from "./QuoteCard";
import "./App.css";

function App() {
  return (
    <>
      <h1>Dad Jokes / Quotes</h1>
      <div className="card-container">
        <div className="card">
          <JokeCard />
        </div>
        <div className="card">
          <QuoteCard />
        </div>
      </div>
    </>
  );
}

export default App;
