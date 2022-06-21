import React from "react";
import Image from "./Image";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Image
          url={"https://www.istockphoto.com/search/2/image?phrase=funny+cat"}
        />
      </div>
    </div>
  );
}

export default App;
