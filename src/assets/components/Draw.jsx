import React from "react";
import "../style/draw.css";

function Draw({ nameInput, setNameInput, font, size, pad }) {
  const handleInputChange = (event) => {
    setNameInput(event.target.value);
  };


  return (
    <div className="window">
      <div className="main-card">
        <div className="result">
          <div className="chord-title pad">
            <label>chord name </label>
            <input
              type="text"
              value={nameInput}
              onChange={handleInputChange}
              placeholder="Enter text..."
            />
          </div>
          <div className="pad-sides grid-print">
            {Array.from({ length: 24 }, (_, index) => (
              <div className="grid-item" key={index}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="main-card">
        <div className="result">
          <div className="chord-title" style={{
            fontSize: size,
            fontFamily: font,
            paddingBottom: pad,
          }}>{nameInput}</div>
          <div className="pad-sides grid-print">
            {Array.from({ length: 24 }, (_, index) => (
              <div className="grid-item" key={index}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Draw;
