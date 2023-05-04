import "./App.css";
import Home from "./Components/Home";
import Search from "./Components/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="App">
      <h1>Siel App</h1>
      <Search onSearchChange={handleOnSearchChange} />
      <Home />
    </div>
  );
}

export default App;
