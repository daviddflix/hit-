import './App.css';
import { Route, Switch, Router } from 'react-router-dom';
import Nav from './Component/Nav/nav';
import Chat from './Component/chat/whatsapp';
import Info from './Component/Info/info';
import Footer from './Component/footer/footer';
import CarouselProduct from './Component/product/product';
import Carouselp from './Component/carousel/carousel';
import DetailProduct from './Component/detailProduct/detailProduct';
import Categories from './Component/categories/Categories';
import { useState } from 'react';
import Context from './Component/context/Items';
import UserProfile from './Component/profile/userProfile';
import {CartProvider} from './Component/context/cartContext'
import ResumenCarrito from './Component/resumenCarrito/carrito';
import FormPago from './Component/formPago/formPago';
import Checkout from './Component/addressform/Checkout'
import userContext from './Component/context/userContext';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import OrderContext from './Component/context/orderContext';

function App() {

    const [closeCart, setCloseCart] = useState(false)
    const [input, setInput] = useState({
      nombre: "",
      direccion: "",
      numero: "",
      email: "",
      sub: "",
      zona: ""
  })

  const [options, setOptions] = useState({
    toppings: [],
    salsa: [],
    priceTopping: null,
    id: '',
    title: '',
    price: 0,
    picture_url: '',
    Comments: '',
    unit_price: 0,
    quantity: 1,
  });
  

  return (
    <Context.Provider value={{closeCart, setCloseCart }}>
     <userContext.Provider value={{input, setInput}}>
       <OrderContext.Provider value={{options, setOptions}}>
    <div className="App">
      
       <Nav/>
       <Switch>

      

            <Route  exact path='/'>
            <Carouselp/>
            <CarouselProduct/>
            <Info/>  
            
            </Route> 

            <Route exact path='/productos'>
            <Categories/>
            </Route> 

            <Route exact path='/userProfile'>
            <UserProfile/>
            </Route> 
          

             <ProtectedRoute path="/carrito" component={ResumenCarrito} /> 

            <Route exact path='/formPago'>
            <Checkout/>
            </Route>    

            <Route exact path='/detail/:id'>
            <DetailProduct/>
            </Route> 

            
            </Switch>  
          
            <Footer />

            <div className='chat'>
            <Chat/>
            </div>
        
    
    </div>
    </OrderContext.Provider>
    </userContext.Provider>
    </Context.Provider>
  );
}

export default App;

      