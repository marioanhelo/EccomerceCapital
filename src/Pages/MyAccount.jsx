import { useContext, useRef, useState, useEffect } from 'react'
import { GetUserData } from '@/Services/UserServices.js';
import { AuthContext } from '@/Context/Auth.jsx'

export const MyAccount = () => {
const { userActual } = useContext(AuthContext) // Info Descifrada del Token del Usuario
  const effectRan = useRef(false) // Ya se ejecuto useEffect por segunda vez?
  const [userData, setUserData] = useState({}) // Guardamos la data del usuario que traemos de la API

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      const fetchUserData = async () => {
        const result = await GetUserData(userActual.id) // Llamo a la API y obtengo la info del usuario
        if (result.status === 200) {
          setUserData(result.data)
          console.log(result.data)
        }
      }

      fetchUserData()
    }

    return () => {
      effectRan.current = true
    }
  }, [])

    return (
      <div>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='card shadow'>
                    <div className='card-body'>
                       {userData.first_name !='' ?
                        <h4 className='text-dark text-center'>Hola {
                            userData.first_name
                        }</h4>
                        : <></> }
                        {userData?.first_name && <p>First Name: {userData.first_name}</p>}
                        {userData?.last_name && <p>Last Name: {userData.last_name}</p>}
                        {userData?.gender && <p>Gender: {userData.gender}</p>}
                        {userData?.email && <p>Email: {userData.email}</p>}
                        {userData?.role && <p>Role: {userData.role}</p>}
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
