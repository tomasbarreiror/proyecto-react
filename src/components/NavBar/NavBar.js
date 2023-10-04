import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import logo from './assets/logo.png';

const NavBar = () => {
    return (
        <nav>
            <div className="columns">
                <div className="column">
                    <Link to='/'>
                        <img src={logo} alt="logo" className="logo"/>
                    </Link>
                </div>
                <div className="column">
                    <div>
                        <Link to={"/category/notebook"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</Link>
                        <Link to={"/category/procesador-amd"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Procesadores AMD</Link>
                        <Link to={"/category/procesador-intel"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Procesadores Intel</Link>
                        <Link to={"/category/mother-amd"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mothers AMD</Link>
                        <Link to={"/category/mother-intel"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mothers Intel</Link>
                        <Link to={"/category/placas"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Placas de Video</Link>
                        <Link to={"/category/mouse"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mouse</Link>
                        <Link to={"/category/teclado"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Teclado</Link>
                        <Link to={"/category/auriculares"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Auriculares</Link>
                        <Link to={"/category/pad"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mousepad</Link>
                        <Link to={"/category/cam-mic"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Camaras y Microfonos</Link>
                    </div>
                </div>
                <div className="column">
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;