import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Booking from "./pages/Booking";
import Flights from "./pages/Flights";
import Help from "./pages/Help";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
 

  return (
    <div>
       <Header/>
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/booking" element={<Booking />}/>
            <Route path="/flights" element={<Flights/>}></Route>
            <Route path="/help" element={<Help/>}></Route>
         </Routes>
       </BrowserRouter>
       {/* <Home/> */}
       <Footer/>
    </div>
  )
}

export default App;
