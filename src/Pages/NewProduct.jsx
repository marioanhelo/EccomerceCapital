import useForm from '@/Hooks/useForm'
import Swal from 'sweetalert2'
import {RegisterNewProduct} from '@/Services/UserServices.js'
import { useNavigate } from 'react-router-dom'


export const AddNewProduct = ()=> {
    const navigate = useNavigate();
    const newProduct = async (productdata) => {
        try {
            const authToken = window.sessionStorage.getItem('token')
            const result = await RegisterNewProduct(productdata, authToken)
                if (result.status ===201){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Producto agregado satisfactoriamente',
                        icon: 'success'
                      })
                      navigate('/')
                  }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Hubo un error: ' +  error.message + ' ' + error.result.data.message,
                icon: 'error'
              })
        }
    }

    const {input, handleInputChange, handleSubmit} = useForm(newProduct, {
        isActive: true,
        product_name: '',
        description: '',
        price: '',
        category: 'Select a category',
        brand: '',
        sku: '',
        image:''
    })

    return (
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <h4 className='text-dark text-center'>Registrar nuevo producto</h4>

            <form className="row g-3">
                <div className='col-6'>
                    <label>Nombre del producto: </label>
                    <input type="text" className='form-control' id="product_name" name="product_name" placeholder="Nombre del producto" onChange={handleInputChange} value={input.product_name}></input>
                </div>
                <div className='col-6'>
                    <label>Descripción: </label>
                    <input type="text" className='form-control' id="description" name="description" placeholder="Descripción del producto" onChange={handleInputChange} value={input.description}></input>
                </div>
                <div className='col-4'>
                    <label>Precio: </label>
                    <input type="number" className='form-control' id="price" name="price" placeholder="Precio del producto" onChange={handleInputChange} value={input.price}></input>
                </div>
                <div className='col-4'>
                    <label>Categoria: </label>
                    <select className='form-select' id="category" name="category" onChange={handleInputChange} value={input.category}>
                        <option value="Books">Books</option>
                        <option value="Movies">Movies</option>
                        <option value="Music">Music</option>
                        <option value="Games">Games</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Computers">Computers</option>
                        <option value="Home">Home</option>
                        <option value="Garden">Garden</option>
                        <option value="Tools">Tools</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Health">Health</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Toys">Toys</option>
                        <option value="Kids">Kids</option>
                        <option value="Baby">Baby</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Jewelery">Jewelery</option>
                        <option value="Sports">Sports</option>
                        <option value="Outdoors">Outdoors</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Industrial">Industrial</option>
                    </select>
                </div>
                <div className='col-4'>
                <label>Brand: </label><input type="text" className='form-control' id="brand" name="brand" placeholder="Marca del producto" onChange={handleInputChange} value={input.brand}></input>

                </div>
                <div className='col-4'>
                <label>SKU: </label><input type="text" className='form-control' id="sku" name="sku" placeholder="Escribe el SKU" onChange={handleInputChange} value={input.sku}></input>

                </div>
                <div className='col-6'>
                <label>Imagen: </label><input type="text" className='form-control' id="image" name="image" placeholder="URL del producto" onChange={handleInputChange} value={input.image}></input>

                </div>
                <div className='col-3'>
                <label>Hay en existencia?: </label>
                <select className='form-select' id="isActive" name="isActive" onChange={handleInputChange} value={input.isActive}>
                        <option value={true}>SI</option>
                        <option value={false}>NO</option>
                    </select>
                </div>
                <div className='col-12'>
                <button type="button" className='btn btn-primary btn-sm mt-4 float-end' onClick={handleSubmit}>Registrar</button>

                </div>
            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}