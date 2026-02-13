import logo from "./logo.svg";
import "./App.css";
import HeadBar from "./HeadbAR/HeadBar";
import Card from "./Card/Card";
function App() {
  return (
    <div className="App">
      <div className="appData-wrapper">
        <HeadBar />
        <Card />
      </div>
    </div>
  );
}

export default App;
