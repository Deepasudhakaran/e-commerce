

import Addcard from "./Addcard";
import Addproduct from "./Addproduct";
import "./App.css";
import Header from "./Header";

import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



 

function App() {
  return (
    
    <Router>
  
    <Routes>
        <Route exact path='/'element={<Home />} />
        <Route exact path='/header'element={<Header/>} />
        <Route exact path='/add'element={<Addproduct />} />
        <Route exact path='/addcard'element={<Addcard/>} />
       
        
        
    </Routes>
</Router>
    
   
  );
}

export default App;
