import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Rutas from './Router/Rutas';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './Context/ProductContext';
import { AuthProvider } from './Context/Auth';



function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <Rutas />
          </ProductProvider>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

