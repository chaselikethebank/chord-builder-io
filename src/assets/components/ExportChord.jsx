import React from "react";
// import { saveAs } from "file-saver"; 

function Export({ chordName, chordContent }) {
  const downloadChord = () => {
    const blob = new Blob([chordContent], { type: "text/plain" });
    saveAs(blob, `${chordName}.txt`);
  };

  return (
    <div>
      <button onClick={downloadChord}>build chord</button>
    </div>
  );
}

export default Export;