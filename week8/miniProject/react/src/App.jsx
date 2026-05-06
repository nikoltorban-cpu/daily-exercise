import quotes from './QuotesDatabase'
import './App.css'
import Qoute from './components/Qoute'
import { useState } from 'react';

function App() {

  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#77B1A9",
    "#6C5B7B",
    "#355C7D",
    "#F67280",
    "#C06C84",
    "#F8B195",
    "#45B7D1",
    "#96CEB4",
    "#FF6B6B",
    "#4ECDC4",
    "#556270",
    "#C7F464",
    "#FFCC5C",
    "#88D8B0",
    "#FF8C94",
    "#A8E6CF",
    "#DCEDC1",
    "#FFD3B6",
    "#FFAAA5",
    "#A29BFE",
    "#74B9FF",
    "#55EFC4",
    "#FD79A8",
    "#E17055",
    "#00B894",
    "#0984E3",
    "#6C5CE7",
    "#E84393",
    "#2D3436",
    "#FDCB6E",
    "#00CEC9",
    "#D63031",
    "#81ECEC",
    "#FAB1A0",
    "#B2BEC3",
    "#636E72",
    "#FF7675",
    "#74B9FF",
    "#A3CB38",
    "#12CBC4",
    "#FDA7DF",
    "#ED4C67",
    "#833471",
    "#0652DD",
    "#1B1464",
    "#EE5A24",
    "#009432",
    "#9980FA",
    "#5758BB",
    "#F79F1F",
    "#1289A7"
  ];

  const rndQuoteIndex = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[rndQuoteIndex]);
  const [color, setColor] = useState(colors[0]);

  function generateQuote() {
    let newQuote;

    do {
      const rnd = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[rnd];
    }
    while(newQuote.quote === quote.quote);

    setQuote(newQuote);

    const rndColor = colors[Math.floor(Math.random() * colors.length)];
    while(rndColor === colors[color]);
    setColor(rndColor);
  }


  return (
    <div style={{backgroundColor: color,transition: "background-color 0.7s ease"}}>
        <Qoute
        quote={quote.quote}
        author={quote.author}
        color={color}
        generateQuote={generateQuote}
        />
    </div>
  )
}

export default App
