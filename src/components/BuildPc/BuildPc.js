import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./BuildPc.css"
import SelectComponment from "../SelectComponent/SelectComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/Firebase";

const BuildPc = () => {

    const [currentStep, setCurrentStep] = useState(0)
    const [products, setProducts] = useState([])
    const [pcConfig, setPcConfig] = useState([])
    const [brand, setBrand] = useState('')
    const [loading, setLoading] = useState(true)
    const { setCart } = useCart()
    const navigate = useNavigate()

    const steps = [
        'Elije entre AMD e Intel',
        'Selecciona una placa base',
        'Selecciona un procesador',
        'Selecciona RAM',
        'Selecciona una tarjeta de video',
        'Selecciona una fuente de poder',
        'Selecciona un gabinete',
        'Agrega periféricos'
    ]

    useEffect(() => {
        setLoading(true);
        const componentCategories = [`mother-${brand}`, `procesador-${brand}`, 'ram', 'placas', 'fuente', 'gabinete', 'mouse', 'teclado', 'cam-mic']
        const currentIndex = componentCategories.indexOf();
    
        if (currentIndex !== -1) {
            const nextCategory = componentCategories[currentIndex + 1];
    
            const collectionRef = nextCategory
                ? query(collection(db, 'Items'), where('categoria', '==', nextCategory))
                : collection(db, 'Items');
    
        getDocs(collectionRef)
            .then((resp) => {
                const productsAdapted = resp.docs.map((doc) => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                switch (currentStep) {
                    case 1:
                        setProducts({ ...products, motherboard: productsAdapted })
                        break
                    case 2:
                        setProducts({ ...products, processor: productsAdapted })
                        break
                    case 3:
                        setProducts({ ...products, ram: productsAdapted })
                        break
                    case 4:
                        setProducts({ ...products, placas: productsAdapted })
                        break
                    case 5:
                        setProducts({ ...products, fuente: productsAdapted })
                        break
                    case 6:
                        setProducts({ ...products, gabinete: productsAdapted })
                        break
                    case 7:
                        setProducts({ ...products, peripheals: productsAdapted })
                        break
                    default:
                        break
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
        } else {
            setLoading(false);
        }
    }, [currentStep, brand])

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCart(pcConfig)
            navigate('/cart')
        }
    }

    const renderStepContent = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div>
                        <h3>{steps[currentStep]}</h3>
                        <button onClick={() => setBrand('amd')}>AMD</button>
                        <button onClick={() => setBrand('intel')}>Intel</button>
                    </div>
                )
            case 1:
                return (<SelectComponment title={steps[currentStep]} products={products.motherboard} selectOption={setPcConfig}/>)
            case 2:
                return (<SelectComponment title={steps[currentStep]} products={products.processor} selectOption={setPcConfig}/>)
            case 3:
                return (
                        <SelectComponment title={steps[currentStep]} products={products.ram} selectOption={setPcConfig}/>)
            case 4:
                return (<SelectComponment title={steps[currentStep]} products={products.placas} selectOption={setPcConfig}/>
                )
            case 5:
                return (<SelectComponment title={steps[currentStep]} products={products.fuente} selectOption={setPcConfig}/>)
            case 6:
                return (<SelectComponment title={steps[currentStep]} products={products.gabinete} selectOption={setPcConfig}/>)
            case 7:
                return (<SelectComponment title={steps[currentStep]} products={products.peripheals} selectOption={setPcConfig}/>)
            default:
                break
        }
    }
    
    return (
        <section id="build-pc">
            <h2>Armar mi PC</h2>
            {loading ? (
                <div className="lds-dual-ring"></div>
            ) : (
                <div>
                    {renderStepContent()}
                    <button onClick={nextStep}>
                        {currentStep < steps.length - 1 ? "Siguiente" : "Terminar Compra"}
                    </button>
                </div>
            )}
        </section>
    )
}

export default BuildPc