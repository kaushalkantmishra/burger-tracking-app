import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
          headers: { "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY },
        });
        const data = await response.json();
        if (data && data.length > 0) {
          setQuote(data[0].quote + " - " + data[0].author);
        }
      } catch (error) {
        console.error("Error fetching quote: ", error);
      }
    };

    fetchQuote();
    const interval = setInterval(fetchQuote, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white rounded-md shadow-md max-w-md text-center min-h-48 min-w-48 flex items-center justify-center">
      <p className="text-gray-700">{quote}</p>
    </div>
  );
};

export default Quote;
