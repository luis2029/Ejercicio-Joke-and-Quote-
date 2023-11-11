// QuoteCard.jsx
// QuoteCard.jsx
import { useState, useEffect } from "react";
import "./QuoteCard.css"; // Importa el archivo de estilos


const QuoteCard = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [icon, setIcon] = useState("");

  const getQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://quote-garden.onrender.com/api/v3/quotes/random"
      );
      const data = await response.json();
      setText(data.data[0].quoteText);
    } catch (error) {
      setError("There was an error fetching the quote, try again please.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    setIcon("📜");
  }, []);

  return (
    <>
      <div className="buttons">
        <button onClick={getQuote}>Get Quote</button>
      </div>
      {loading ? (
        <p className="text">Loading...</p>
      ) : (
        <p className="text" style={{ color: "#428022" }}>
          {`${icon} - ${text}`}
        </p>
      )}
      {error ? <p className="error">{error}</p> : null}
    </>
  );
};

export default QuoteCard;
