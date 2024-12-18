import React from "react";
import Home from "./Home";
import Data from "./Data";
const App = () => {
  return (
    <>
      <div className="p-4">
        {Data.map((categoryData, index) => (
          <Home
            key={index}
            category={categoryData.category}
            movies={categoryData.movies}
          />
        ))}
      </div>
    </>
  );
};

export default App;
