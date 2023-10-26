/*import "./App.css";
import { BrowserRouter as Router,Routes,Route, Link, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";

function App(){
  return (<div className="App">

    <Router>
      <div>
        <Link to="/">Home</Link><br></br>
        <Link to="/contact">Contact</Link><br></br>
        <Link to="/menu">Menu</Link>
      
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
        </Router>
        </div>
)};



export default App;*/


import "./App.css";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

 export default function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          

        </Routes>
      </Router>
     </ShopContextProvider>
    </div>
  )
}
