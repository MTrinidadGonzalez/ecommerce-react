import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import './navBar.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import { SlBasket } from "react-icons/sl"
import { SlHome } from "react-icons/sl"
function NavBar(){

const [cart, setCart]= useContext(CartContext)

const quantity= cart.reduce((acc, curr)=>{
    return acc + curr.quantity
},0)

return(<>

<Container className='container-fluid'>
<nav className='nav'>
    <ul>
        <li><Link to='/' className='navItem'><SlHome/>HOME</Link></li>
        <li><Link to='category/pantalones'  className='navItem'>Pantalones</Link></li>
        <li><Link to='/category/remeras'  className='navItem'>Remeras</Link></li>
        <li><Link to='/category/abrigos' className='navItem' >Abrigos</Link></li>
        <li><Link to='/category/accesorios' className='navItem' >Accesorios</Link></li>
        <li><Link to='/cart' ><span className='cart-count navItem' ><SlBasket/>{quantity}</span></Link></li>
      
    </ul>
</nav>
</Container>
</>)
}
export default NavBar;