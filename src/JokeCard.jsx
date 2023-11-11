
import { useState, useEffect } from "react";
import "./JokeCard.css";

const JokeCard = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [icon, setIcon] = useState("");

  const getNewJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setText(data.joke);
    } catch (error) {
      setError("There was an error fetching the joke, try again please.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  useEffect(() => {
    setIcon("🤣");
  }, []);

  return (
    <>
      <div className="buttons">
        <button onClick={getNewJoke}>Get Joke</button>
      </div>
      {loading ? (
        <p className="text">Loading...</p>
      ) : (
        <p className="text" style={{ color: "#61dafb" }}>
          {`${icon} - ${text}`}
        </p>
      )}
      {error ? <p className="error">{error}</p> : null}
    </>
  );
};

export default JokeCard;
