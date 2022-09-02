import {useContext} from 'react'
import useForm from '@/Hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { LoginUser } from '@/Services/UserServices.js';
import { AuthContext } from '@/Context/Auth.jsx'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
  const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate();
    // Funcion que envia los datos
    const sendData = async (data) => {
      try {
        const result = await LoginUser(data);
        if (result.status === 200) {
          loginUser(result.data.token)
        }
          navigate('/')
      } catch (error) {
        alert('Ocurrió un error: ' + error.message);
      }
    };
    // Estado inicial con el hook useForm
    const { input, handleInputChange, handleSubmit } = useForm(sendData, {
      email: '',
      password: '',
    });
    return (
    <div className="wrapper fadeInDown">
        <div className="formContent">
            <div className="fadeIn first mt-4">
             <FontAwesomeIcon icon={faUserCircle} size={"4x"} style={{color:'#2C3E50'}} />
           </div>
            <form>
                <div className='row mt-3'>
                    <div className='col-8 mx-auto'>
                        <input
                            type="email"
                            className="fadeIn second form-control"
                            name="email"
                            placeholder="Email"
                            onChange={handleInputChange}
                            value={input.email}
                        />
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-8 mx-auto'>
                        <input
                            type="password"
                            className="fadeIn third form-control"
                            name="password"
                            placeholder="Password"
                            onChange={handleInputChange}
                            value={input.password}
                            />
                    </div>
                </div>
                <div className='row mt-3 mb-4'>
                    <div className='col-6 mx-auto'>
                        <button type='button' className="fadeIn btn btn-primary" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
