import Navbar from "./Components/Navbar";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import AboutScreen from "./Screens/AboutScreen";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/about" component={AboutScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
