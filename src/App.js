import React, { useState } from "react";
import "./App.css";
import QrReader from "react-qr-reader";

function App() {
  const [state, setState] = useState({
    result: "No result",
  });
  const handleScan = (data) => {
    if (data) {
      setState({
        result: data,
      });
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="App">
      <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
        <p>{state.result}</p>
      </div>
    </div>
  );
}

export default App;
