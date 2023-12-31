import logo from "./logo.svg";
import "./App.css";
import CountDown from "./Components/CountDown/CountDown";

function App() {
  const newYear = new Date("Jan 1, 2024").getTime();
  return (
    <div className="App">
      <CountDown newYear={newYear} />
    </div>
  );
}

export default App;
