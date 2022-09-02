import { createContext, useState, useEffect, useRef } from 'react';
import jwt_decode from 'jwt-decode'


export const AuthContext = createContext();


export function AuthProvider(props) {

  const [isAuth, setIsAuth] = useState(false);
  const [userActual, setUserActual] = useState(null);
  const [userInfo, setUserInfo] = useState("")
  const [userData, setUserData] = useState({})

  const loginUser = (token) => {
    window.sessionStorage.setItem('token', token);
    const decoded = jwt_decode(token)
    setUserActual(decoded)
    setIsAuth(true)
  };

  const logout = () => {
    window.sessionStorage.removeItem('token');
    setIsAuth(false);
  };


  useEffect(()=> {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      setIsAuth(true)
      const decoded = jwt_decode(token) // Decodifico el JWT y lo guardo en un objeto de JS
      setUserActual(decoded)
    }
  }, [])


  const values = {
    isAuth,
    loginUser,
    logout,
    userActual,
    userInfo,
    setUserInfo,
    userData,
    setUserData
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
}