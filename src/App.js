import './App.css';
import Nav from './Components/Nav';
// import Card from "./Components/Card"
import Form from './Components/Form';
import {Routes,Route} from "react-router-dom"
import Login from './Components/Login';
import Shoes from './Components/Shoes';
import Clothes from './Components/Clothes';
import Books from './Components/Books';
import Watch from './Components/Watch';
import Cosmetic from './Components/Cosmetic';
import Electrical from './Components/Electrical';
import Bag from './Components/Bags';
import Footer from './Components/Footer';
// import Categories from './Components/Catrgories';
// import Slide from './Components/Slide';
import Mobile from './Components/Mobile';
import Home from './Components/Home';
import AboutUS from './Components/About';
import Goldstar from './Components/Goldstar';

function App() {
  return (
    <>
    <Nav/>
    {/* <Categories/> */}
    {/* <Slide/> */}
    {/* <Card/> */}
    

    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path="/Form" element={<Form/>}/>
      <Route path = "/Login" element= {<Login/>}/>
      <Route path="/Shoes" element={<Shoes/>}/>
      <Route path="/Clothes" element={<Clothes/>}/>
      <Route path="/Books" element={<Books/>}/>
      <Route path="/Watch" element={<Watch/>}/>
      <Route path="/Cosmetic" element={<Cosmetic/>}/>
      <Route path="/Electrical" element={<Electrical/>}/>
      <Route path="/Bag" element={<Bag/>}/>
      <Route path="/Mobile" element={<Mobile/>}/>
      <Route path="/About" element={<AboutUS/>}/>
      <Route path="/Gold" element={<Goldstar/>}/>
    </Routes>
    <Footer/>
    </>  
  );
}

export default App;
