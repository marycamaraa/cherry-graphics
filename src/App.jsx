import { useState } from "react";
import LowerThird from "./Components/LowerThird/LowerThird";

import "./App.css";

function App() {
  const [graphics, setGraphics] = useState({
    type: "lowerThird",
    visible: false,
    data: {
      name: "Mary Camara",
      title: "Engineer",
    },
  });

  const take = () => {
    setGraphics((prev) => ({ ...prev, visible: true }));
  };

  const clear = () => {
    setGraphics((prev) => ({ ...prev, visible: false }));
  };

  return (
    <>
      {/* GRAPHIC OUTPUT */}
      <LowerThird
        name={graphics.data.name}
        title={graphics.data.title}
        visible={graphics.visible}
      />

      {/* SIMPLE CONTROL OUTPUT */}
      <div style={{ position: "absolute", top: 20, left: 20 }}>
        <button onClick={take}>TAKE</button>
        <button onClick={clear}>CLEAR</button>
      </div>
    </>
  );
}

export default App;
