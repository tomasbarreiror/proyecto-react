import { useState } from "react"
import "./CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="form-container">
            <h1>Checkout</h1>
            <div className="checkout-form-container">
                <form onSubmit={handleConfirm}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>

                    <label htmlFor="phone">Telefono</label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <button type="submit" className="submit">Enviar orden</button>
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm