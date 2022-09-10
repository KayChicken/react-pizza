import './App.css';
import './scss/app.scss'
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart/Cart";
import NotFound from "./Pages/NotFound";
import {Routes,Route} from "react-router-dom";
import PizzaView from "./Pages/PizzaView";





function App() {







  return (
    <>

        <div className="wrapper">

                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/pizza/:id" element={<PizzaView/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>





        </div>



    </>

  );
}

export default App;
