import '../App.css';
const Qoute = ({quote, author, color, generateQuote}) => {
  return (
    <div className="container">
      <div className="quoteDiv">
          <h2 className="quote" style={{ color: color }}>
              {quote}
          </h2>
          <p className="author" style={{ color: color }}>
            {author} 
            </p>
            <button className="button" onClick={generateQuote} style={{backgroundColor: color}}>
              next quote
            </button>
      </div>
    </div>
  )
}

export default Qoute