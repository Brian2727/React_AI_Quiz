import React, { createContext, useContext, useState, useEffect } from 'react';
import {auth} from "../FireBase/firebaseService";


export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const logout = async () => {
        try {
            await auth.signOut();
            setUser(null);
            setUserLoggedIn(false);
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if(user){
                setUser({...user});
                setUserLoggedIn(true);
                setLoading(false);
            }
            else{
                setUser(null);
                setUserLoggedIn(false);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const value = {
        user,
        setUser,
        userLoggedIn,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}