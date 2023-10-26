import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)    
    
    const handleLogin = (userData) => {
        if (!user) {
            setUser(userData)
        }
    }
    
    const handleLogout = () => {
        if (user) {
            setUser(null)
        }
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
