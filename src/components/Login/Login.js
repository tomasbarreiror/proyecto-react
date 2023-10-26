import { useState } from "react"
import "./Login.css"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../../config/Firebase"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { useCart } from "../../context/CartContext"


const Login = () => {

  const { handleLogin } = useAuth()
  const { loadCartFromFirestore } = useCart()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const login = async () => {

    if (!email || !password) {
      setError("Por favor, completa todos los campos")
      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser
      await loadCartFromFirestore()
      handleLogin(user)
      navigate('/')
    } catch (err) {
      if (err.code === "auth/invalid-login-credentials") {
        setError("El mail o la contraseña es incorrecta")
      } else {
        setError(err.code)
      }
    }
  }

  const signWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
  }

  return (
    <section id="login">

      <div className="login-container">
        <div className="login-text-container">
          <h1>Iniciar Sesion</h1>
          <p>Ingresa tu mail para acceder a tu cuenta</p>
          <p>No tienes cuenta? <Link to='/register'>Registrate</Link></p>
        </div>
        <div className="error">
          {error && <p style={{padding:16}}>{error}</p>}
        </div>
        <form>
          <div className="login-options">
            <div className="login-with-email">
            <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="mail@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                placeholder="********"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
        <button className="submit" onClick={login}>Iniciar sesion</button>
        <span>O</span>
        <div className="login-with-complete">
          <button className="login-button bg-blue" onClick={signWithGoogle}>Iniciar sesion con Google</button>
        </div>
      </div>

    </section>
  )
}

export default Login