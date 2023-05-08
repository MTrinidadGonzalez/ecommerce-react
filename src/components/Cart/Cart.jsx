import { useContext } from "react"
import { CartContext } from "../context/CartProvider"
import './cart.css'
function Cart(){

    const [cart, setCart]= useContext(CartContext)

    
const quantity= cart.reduce((acc, curr)=>{
    return acc + curr.quantity
},0)

const totalPrice = cart.reduce((acc,curr)=>{
    return acc + curr.quantity * curr.price
},0)

    return(<>
    <div className="divCArtContainer">
    
        <div className="itemCart">Cantidad de productos: {quantity}</div>
     
        <div className="itemCart">{cart.map(i=> <p>{i.description}:  ${i.price}</p> )}</div>
      
        <div className="itemCart">Monto total: $ {totalPrice}</div>
      
    </div>
   

    </>)
}
export default Cart