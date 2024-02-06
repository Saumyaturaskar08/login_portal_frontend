import "./App.css";
// importing components from react-router-dom package
import { BrowserRouter as Router, 
Route, 
Routes,}
 from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Register from "./Components/Register";
import Login from "./Components/Login";


function App() {
return (
	<>
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
		<Routes>
		
		<Route exact path="/" element={<Home/>} />
			
		
		<Route  exact path='/about' element={<About/>} />
			
		
		<Route exact path='/contactus' element={<ContactUs/>} />
			
			
		<Route exact path='/login' element={<Login/>} />
		
		
		<Route exact path='/register' element={<Register/>} />
		</Routes>
	</Router>
	</>
);
}

export default App;

