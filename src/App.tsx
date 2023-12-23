import "./App.scss";
import BottomCard from "./components/BottomCard";
import Nav from "./components/Nav";
import UpperCard from "./components/UpperCard";

function App() {
  return (
    <>
      {/* <div id="wrapper"> */}
      <Nav />
      <UpperCard />
      <BottomCard />
      {/* </div> */}
    </>
  );
}

export default App;
