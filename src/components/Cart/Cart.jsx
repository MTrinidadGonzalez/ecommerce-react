import { useContext } from "react"
import { CartContext } from "../context/CartProvider"
import './cart.css'
import { IoMdTrash } from "react-icons/io";

function Cart(){

    const [cart, setCart]= useContext(CartContext)

    
const quantity= cart.reduce((acc, curr)=>{
    return acc + curr.quantity
},0)

const totalPrice = cart.reduce((acc,curr)=>{
    return acc + curr.quantity * curr.price
},0)

const removeItem=(id)=>{
    setCart((currItems)=>{
      if(currItems.find((item)=> item.id === id)?.quantity === 1){
        return currItems.filter((item)=> item.id !== id)
      }
      else{
        return currItems.map((item)=>{
          if (item.id === id){
            return {...item, quantity: item.quantity - 1}
          }
          else{
            return item
          }
        })
      }
    })
    }
  
  
  
  return(<>
    <div className="divCArtContainer">
    
        <div className="itemCart">Cantidad de productos: {quantity}</div>
     
        <div className="itemCart">{cart.map(i=> <p>{i.description}:  ${i.price} <button onClick={()=> removeItem(i.id)}><IoMdTrash/></button></p>  
        )}</div>
      
        <div className="itemCart">Monto total: $ {totalPrice}</div>
      
    </div>
   

    </>)
}
export default Cart