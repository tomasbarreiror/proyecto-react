import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BuildPc from './components/BuildPc/BuildPc';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <CartProvider>
                        <NavBar/>
                        <Routes>
                            <Route path='/' element={<Home/>} />
                            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                            <Route path='/productos/:itemId' element={<ItemDetailContainer/>}/>
                            <Route path='/cart' element={<Cart/>}/>
                            <Route path='/checkout' element={<Checkout/>} />
                            <Route path='*' element={<h1 style={{flex: "1", textAlign:"center"}}>404 not found</h1>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/register' element={<Register/>}/>
                            <Route path='/build-pc' element={<BuildPc/>} />
                        </Routes>
                        <Footer/>
                    </CartProvider>
                </AuthProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;