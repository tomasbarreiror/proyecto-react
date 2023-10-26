import "./Register.css"
import { auth } from "../../config/Firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const Register = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const { handleLogin } = useAuth()

    const register = async () => {

        if (!email || !password) {
            setError("Por favor, completa todos los campos")
            return
        }
        
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            handleLogin(user)
            navigate('/')
        } catch (err) {
            if (err.code === "auth/internal-error") {
                setError("El mail es invalido")
            } else {
                setError(err.code)
            }
        }
    }

    return (
        <section id="register">
            <div className="register-container">
                <div className="register-text-container">
                    <h1>Registrarse</h1>
                    <p>Ingresa un email y establece una contraseña para tu cuenta</p>
                </div>
                <div className="error">
                    {error && <p style={{padding:16}}>{error}</p>}
                </div>
                <form className="register-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="mail@example.com" onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" placeholder="********" onChange={(e) => setPassword(e.target.value)}/>
                </form>
                <button className="submit" onClick={register}>Registrarse</button>
            </div>
        </section>
    )
}

export default Register