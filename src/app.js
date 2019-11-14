import React from "react";
import Results from "./components/Results/index.js"
import Filters from "./components/Filters/index.js"
const App = () => {
  return (
      <div>
        <Filters />
        <Results />
      </div>
  );
};

export default App;