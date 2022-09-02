import useForm from '@/Hooks/useForm';
import {RegisterUser} from '@/Services/UserServices.js'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'


export const SignUp = () => {
  const navigate = useNavigate()
  const sendData = async (data) => {
    try{
      const result = await RegisterUser(data);
      if (result.status ===200){
        Swal.fire({
          title: 'Success!',
          text: 'Registrado satisfactoriamente',
          icon: 'success'
        })
        navigate('/login')
      }
      console.log(result)
    } catch (error){
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error: '+ error.message,
        icon: 'error'
      })
    }
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: 'Select a gender',
    email: '',
    password: '',
  })
  return (

    <div className='row'>
      <div className='col-8 mx-auto'>
        <div className='card shadow'>
          <div className='card-body'>
          <h4 className='text-dark text-center mb-4'>Registro</h4>
          <form className='container'>
          <div className='mt-5 mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              name='first_name'
              onChange={handleInputChange}
              value={input.first_name}
              className='form-control'
              id='name'
              placeholder='John'
            />
          </div>
      <div className='mb-3'>
        <label htmlFor='last-name' className='form-label'>
          Last name
        </label>
        <input
          type='text'
          name='last_name'
          onChange={handleInputChange}
          value={input.last_name}
          className='form-control'
          id='last-name'
          placeholder='Doe'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='birth' className='form-label'>
          Birthday
        </label>
        <input type='date'
          className='form-control'
          id='birth'
          name='birth_date'
          onChange={handleInputChange}
          value={input.birth_date} />
      </div>
      <div className='mb-3'>
        <label htmlFor='last-name' className='form-label'>
          Gender
        </label>
        <select
          className='form-select'
          name='gender'
          onChange={handleInputChange}
          value={input.gender}>
          <option value='Select a gender' disabled>
            Select a gender
          </option>
          <option value='M'>M</option>
          <option value='F'>F</option>
        </select>
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='name@example.com'
          name='email'
          onChange={handleInputChange}
          value={input.email}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputPassword' className='col-sm-2 col-form-label'>
          Password
        </label>
        <div className='col-sm-10'>
          <input type='password'
            className='form-control'
            id='inputPassword'
            name='password'
            onChange={handleInputChange}
            value={input.password} />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <button type='button' className='btn btn-primary btn-sm float-end' onClick={handleSubmit}>
            Registrarme
          </button>
        </div>
      </div>
    </form>
          </div>
        </div>
      </div>
    </div>
  )
}

