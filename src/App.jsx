import React, { useState } from "react";
import "./App.css";
import Draw from "./assets/components/Draw";
import ExportChord from "./assets/components/ExportChord"

function App() {
  const [selectedFont, setSelectedFont] = useState("Helvetica, sans-serif");
  const [selectedSize, setSelectedSize] = useState("2rem");
  const [selectedPad, setSelectedPad] = useState("1rem");
  const [nameInput, setNameInput] = useState("chord name here");

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
    "0rem",
    ".2rem",
    ".4rem",
    ".6rem",
    ".8rem",
    "2rem",
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

 

  return (
    <>
      <div>
        <div className="style title">
        <h1>chord.builder 
        
        </h1>
        <div className="sub">
     one step at a time
     </div>
        </div>

        

        <p></p>
        {/* <label>chord name </label>
        <input
          type="text"
          value={nameInput}
          onChange={handleInputChange}
          placeholder="Enter text..."
        /> */}

<div className="display-row ">
  <div>
      <label>design font: </label>
        <select value={selectedFont} onChange={handleFontChange}>
          <option value=""></option>
          {fontOptions.map((font, index) => (
            <option key={index} value={font}>
              {font}
            </option>
          ))}
        </select>
        </div>
            <div>
        <label>design size: </label>
        <select value={selectedSize} onChange={handleSizeChange}>
          <option value=""></option>
          {sizeOptions.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
        </div>
        <div>
        <label>design spacing: </label>
        <select value={selectedPad} onChange={handlePadChange}>
          <option value=""></option>
          {padOptions.map((pad, index) => (
            <option key={index} value={pad}>
              {pad}
            </option>
          ))}
        </select>
        </div>
        </div>

     
      </div>
      <div>
          <Draw font={selectedFont} size={selectedSize} pad={selectedPad} nameInput={nameInput} handleInputChange={handleFontChange} setNameInput={setNameInput}/>
      </div>

      <div>
        <ExportChord />
        </div>
        
    </>
  );
}

export default App;
