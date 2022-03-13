import React from "react";
import "./App.scss";
import CustomCard from "./components/Card";
import Header from "./components/Header";

function App() {
  //Hooks
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <Header count={count} />
      <main className="App-header">
        <CustomCard count={count} setCount={setCount} />
      </main>
    </div>
  );
}

export default App;
