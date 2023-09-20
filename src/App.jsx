import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedFont, setSelectedFont] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPad, setSelectedPad] = useState("");
  const [input, setInput] = useState("this text");

  const fontOptions = [
    "Arial, sans-serif",
    "Helvetica, sans-serif",
    "Times New Roman, serif",
    "Times, serif",
    "Courier New, monospace",
    "Courier, monospace",
    "Georgia, serif",
    "Palatino, serif",
    "Verdana, sans-serif",
    "Tahoma, sans-serif",
  ];

  const sizeOptions = [
    "1rem",
    "1.2rem",
    "1.4rem",
    "1.6rem",
    "1.8rem",
    "2rem",
    "2.2rem",
    "2.4rem",
    "2.6rem",
    "2.8rem",
    "3rem",
  ];

  const padOptions = [
    "1rem",
    "1.2rem",
    "1.4rem",
    "1.6rem",
    "1.8rem",
    "2rem",
    "2.2rem",
    "2.4rem",
    "2.6rem",
    "2.8rem",
    "3rem",
  ];

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handlePadChange = (event) => {
    setSelectedPad(event.target.value);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h1>chord.builder</h1>
      <p>one step at a time</p>

      {/* Dropdown for font selection */}
      <label>Design Font: </label>
      <select value={selectedFont} onChange={handleFontChange}>
        <option value=""></option>
        {fontOptions.map((font, index) => (
          <option key={index} value={font}>
            {font}
          </option>
        ))}
      </select>

      <p></p>
      <label>Design Size: </label>
      <select value={selectedSize} onChange={handleSizeChange}>
        <option value=""></option>
        {sizeOptions.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>

      <p></p>
      <label>Design Spacing: </label>
      <select value={selectedPad} onChange={handlePadChange}>
        <option value=""></option>
        {padOptions.map((pad, index) => (
          <option key={index} value={pad}>
            {pad}
          </option>
        ))}
      </select>

      <p></p>
      <label>Input Text: </label>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter text..."
      />
      <p></p>

      {selectedFont && (
        <p
          style={{
            fontSize: selectedSize,
            fontFamily: selectedFont,
            padding: selectedPad,
          }}
          className="styled card"
        >
          {input} is the {selectedFont} @ {selectedSize} with {selectedPad} space around it.
          
        </p>
        
      )}
    
    </div>
  );
}

export default App;
