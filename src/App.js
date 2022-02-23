import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";
import './style.css'
import Category from "./Components/Category/Category";
import Meal from "./Components/Meal/Meal";
import SignUp from "./Components/SingUp/SignUp";
import Layout from "./Layout/Layout";

function App() {


  return (
    <div className="App">
        <Routes>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='product' element={<Product/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='category/:name' element={<Category/>}/>
                <Route path='category/:name/:id' element={<Meal/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>

    </div>
  );
}

export default App;
