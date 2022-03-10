import "./App.css";
import Card from "../src/components/Card";
import tshirtWoman from "../src/components/tshirt-woman.jpg";
import tshirtMan from "../src/components/tshirt-man.jpg";
import tshirtKids from "../src/components/tshirt-kids.jpg";

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Card
          src={tshirtWoman}
          title={"CANVOUY Womens T Shirt Casual Cotton"}
          price={"$12.90"}
          category={"Women's clothing"}
        />
        <Card
          src={tshirtMan}
          title={"CANVOUY Mens T Shirt Casual Cotton Short"}
          price={"$15.80"}
          category={"Men's clothing"}
        />
        <Card
          src={tshirtKids}
          title={"CANVOUY Kids T Shirt Casual Cotton Short"}
          price={"$18.80"}
          category={"Kids clothing"}
        />
      </main>
    </div>
  );
}

export default App;
