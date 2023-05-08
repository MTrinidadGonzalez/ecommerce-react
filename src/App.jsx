import ProductsItemsContainer from './components/ProductsItemsContainer/ProductsItemsContainer'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductsItemDetail from './components/ProductsItemDetail/ProductsItemDetail'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import { CartProvider } from './components/context/CartProvider'
import './styles/generalStyles.css'
function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path='/' exact element={<ProductsItemsContainer/>} />
      <Route path='/product/:id' exact element={<ProductsItemDetail/>}/>
      <Route path='/category/:category' exact element={<ProductsItemsContainer/>}/>
      <Route path='/cart' exact element={<Cart/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
   
    </>
  )
}

export default App
