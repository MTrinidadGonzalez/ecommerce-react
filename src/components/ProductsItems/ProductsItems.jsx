import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
import '../../styles/generalStyles.css'
function ProductsItems({description, id, price, stock, img, category}) {
const [cart, setCart]= useContext(CartContext)

const addToCart=()=>{
  setCart((currItems)=>{
    const isFound= currItems.find((item)=> item.id === id)
    if(isFound){
      return currItems.map((item)=>{
        if(item.id === id){
          return {...item, quantity: item.quantity + 1}
        }else{
          return item
        }
      })
    }else{
      return [...currItems, {id, quantity :1, price,description}]
    }
  })
}

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

const getQuantityById=(id)=>{
  return cart.find((item)=> item.id === id)?.quantity || 0
}
const quantityPreItem= getQuantityById(id)

  return (
    <>
    <Col>
    <Card style={{ width: '18rem' }} className='my-3'>
      <Card.Img variant="top" src={img} alt={description} />
      <Card.Body>
        <Card.Title>{description}</Card.Title>
        <Card.Text>
          ${price}
        </Card.Text>
        <Link to={`/product/${id}`}> Ver detalle</Link>
       
      </Card.Body>
      {quantityPreItem === 0 ? (
         <Button className='btns' onClick={()=> addToCart()} >Agregar al carrito</Button>
      ): <Button className='btns' onClick={()=> addToCart()}>Agregar uno más</Button>}
      {quantityPreItem > 0 &&( <div>Ya añadiste: {quantityPreItem}</div>)}

      {quantityPreItem > 0 && (
        <Button className='btns' onClick={()=> removeItem(id)}>Quitar del carrito</Button>
      )}
    </Card>
    


    </Col>
    </>
  );
}

export default ProductsItems;