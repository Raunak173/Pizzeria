import Navbar from "./Components/Navbar";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import AboutScreen from "./Screens/AboutScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import OrdersScreen from "./Screens/OrdersScreen";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/about" component={AboutScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/signup" component={SignUpScreen} />
        <Route exact path="/orders" component={OrdersScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
