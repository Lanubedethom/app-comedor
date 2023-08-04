import { createContext, useContext, useState } from "react";
import { loginRequest, bookRequest } from "../api/auth.js";
import Cookies from "js-cookie";
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signin = async (user) => {
        try {
            const response = await loginRequest(user);
            console.log(response.data)
            setUser(response);
            setIsAuthenticated(true)
        } catch (error) {
            //console.log(error);
            setErrors(error.message)
        }
    }

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                errors,
                isAuthenticated,
                signin,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};