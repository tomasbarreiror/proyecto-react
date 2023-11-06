import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png';
import './NavBar.css';
import { useCart } from "../../context/CartContext";

const NavBar = () => {

    const { user, handleLogout} = useAuth()
    const { setCart } = useCart()
    const navigate = useNavigate()

    const [dropdown, setDropdown] = useState(false)
    const [hamburguerMenu, setHamburguerMenu] = useState(true)

    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }

    const toggleHamburguerMenu = () => {
        setHamburguerMenu(!hamburguerMenu)
    }

    const logoutAndRedirect = () => {
        handleLogout()
        setCart([])
        navigate('/login')
    }

    return (
        <nav>
            <div>
                <Link to='/'>
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
            </div>
            <div className={`menu ${hamburguerMenu ? 'mobile-menu' : ''}`}>
                <div className="categories-dropdown" onClick={toggleDropdown}>
                    <p className="nav-btn">Categorias</p>
                    {dropdown && (
                        <span className="categories">
                            <Link className="nav-btn" to={"/category/procesador-amd"}>Procesadores AMD</Link>
                            <Link className="nav-btn" to={"/category/procesador-intel"}>Procesadores Intel</Link>
                            <Link className="nav-btn" to={"/category/mother-amd"}>Mothers AMD</Link>
                            <Link className="nav-btn" to={"/category/mother-intel"}>Mothers Intel</Link>
                            <Link className="nav-btn" to={"/category/mouse"}>Mouse</Link>
                            <Link className="nav-btn" to={"/category/teclado"}>Teclado</Link>
                            <Link className="nav-btn" to={"/category/auriculares"}>Auriculares</Link>
                            <Link className="nav-btn" to={"/category/pad"}>Mousepad</Link>
                            <Link className="nav-btn" to={"/category/notebook"}>Notebooks</Link>
                            <Link className="nav-btn" to={"/category/placas"}>Placas de Video</Link>
                            <Link className="nav-btn" to={"/category/cam-mic"}>Camaras y Microfonos</Link>
                            <Link className="nav-btn" to={"/category/ram"}>Ram</Link>
                            <Link className="nav-btn" to={"/category/gabinete"}>Gabinete</Link>
                        </span>
                    )}
                </div>
                <div className="login">
                    { user ? (
                        <button className="nav-btn" onClick={logoutAndRedirect}>Cerrar sesion</button>
                    ) : (
                        <Link to='/login' className="nav-btn">Iniciar Sesion</Link>
                    )}
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>
            <div className="mobile-menu-icon" onClick={toggleHamburguerMenu}>
                <button className="hamburguer-icon"/>
            </div>
        </nav>
    )
}

export default NavBar;
