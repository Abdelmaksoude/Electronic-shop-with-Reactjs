import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MyNavBar } from './componant/MyNavBar';
import { MyFooter } from './componant/MyFooter';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { CardLab } from './Pages/Cardlabtop';
import { CardPhone } from './Pages/Cardphone';
import { CardTele } from './Pages/Cardtelevesion';
import ProductDetails from './Pages/ProductDetails';
import { Products } from './Pages/Products';
import { useState } from 'react';
import { ContactUs } from './Pages/ContactUs';
import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  let username = "Abdelmaksoud";
  const [childData , setChildData] = useState("");
  const [count , setCount] = useState(0);
  let getChildData = (data)=>{
    setChildData(data) ;
}
  let getCounterValue = (data)=>{
      setCount(data);
  }
  
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
    <div className="">
      <MyNavBar count={count} />
      <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    </div>
      <Routes>
        <Route path='/' element={<Navigate  to="/home"/>} ></Route>
        <Route path='home' element={<Home />}>
          <Route path='CardLab' element={<CardLab />} ></Route>
          <Route path='CardPhone' element={<CardPhone />} ></Route>
          <Route path='CardTelevesion' element={<CardTele />} ></Route>
        </Route>
        <Route path='products/:id' element={<ProductDetails getCounterValue={getCounterValue}/>} ></Route>
        <Route path='products' element={<Products />} />
        <Route path='contactus' element={<ContactUs />} username={username} getChildData={getChildData}/>
      </Routes>
      <MyFooter />
    </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;