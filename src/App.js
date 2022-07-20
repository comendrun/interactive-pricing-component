import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App flex flex-col justify-start desktop:justify-center text-center items-center ">
      <Header />
      <Body />
    </div>
  );
}

export default App;
