import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {/* pssing the props to Form.jsx */}
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
