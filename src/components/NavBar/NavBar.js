import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Electronic Store</h3>
            <ul>
                <li><button id="notebook" className="boton-categorias">Notebooks</button></li>
                <li><button id="procesador-amd" className="boton-categorias">Procesadores AMD</button></li>
                <li><button id="procesador-intel" className="boton-categorias">Procesadores Intel</button></li>
                <li><button id="mother-amd" className="boton-categorias">Mothers AMD</button></li>
                <li><button id="mother-intel" className="boton-categorias">Mothers Intel</button></li>
                <li><button id="placas" className="boton-categorias">Placas de Video</button></li>
                <li><button id="mouse" className="boton-categorias">Mouse</button></li>
                <li><button id="teclado" className="boton-categorias">Teclado</button></li>
                <li><button id="auriculares" className="boton-categorias">Auriculares</button></li>
                <li><button id="pad" className="boton-categorias">Mousepad</button></li>
                <li><button id="cam-mic" className="boton-categorias">Camaras y Microfonos</button></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;