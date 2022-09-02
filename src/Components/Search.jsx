import { useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { ProductContext } from '@/Context/ProductContext';

const Search = () => {
    const navigate = useNavigate();
    const { search, setSearch } = useContext(ProductContext)


 const handleSearchSubmit = (e)=>{
    e.preventDefault()
    navigate('/results')
 }
 const handleInputChange = (e)=>{
    setSearch(e.target.value);
 }

    return (
    <>
        <input
            type='search'
            className="form-control me-2"
            placeholder="Search"
            onChange={handleInputChange}
            value={search}
        >
        </input>
        <button type='button' className="btn btn-primary btn-sm" onClick={handleSearchSubmit}>Buscar</button>
    </>
  )
}

export default Search