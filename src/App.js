import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/productos/:itemId' element={<ItemDetailContainer/>}/>
                        <Route path='*' element={<h1>404 not found</h1>}/>
                        <Route path='/cart' element={<Cart/>}/>
                    </Routes>
                    <Footer/>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;