import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting='Bienvenidos'/>
            <ItemCount stock="5" initial="1"/>
        </div>
    )
}

export default App;