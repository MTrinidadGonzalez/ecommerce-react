
import { useEffect, useState } from 'react'
import Products from '../../json/Products.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
import '../../styles/generalStyles.css'
function ProductsItemDetail(){

    const [product, setProduct]= useState([])
    const {id}= useParams()
    
    useEffect(()=>{
        const productId= Products.find(p=> p.id === id)
        setProduct(productId)
    },[id])

    const [cart, setCart]= useContext(CartContext)

    const addToCart = () => {
      const selectedProduct = Products.find(p => p.id === id);
      if (selectedProduct) {
        const { id, price } = selectedProduct;
        setCart(currItems => {
          const isFound = currItems.find(item => item.id === id);
          if (isFound) {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            });
          } else {
            return [...currItems, { id, quantity: 1, price , description}];
          }
        });
      }
    };
    
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
    
    return(<>
<Container>
    <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} alt={product.description} />
      <Card.Body>
        <Card.Title>{product.description}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
      </Card.Body>
      {quantityPreItem === 0 ? (
         <Button className='btns'  onClick={()=> addToCart()} >Agregar al carrito</Button>
      ): <Button className='btns'  onClick={()=> addToCart()}>Agregar uno más</Button>}
      {quantityPreItem > 0 &&( <div>Ya añadiste: {quantityPreItem}</div>)}

      {quantityPreItem > 0 && (
        <Button  className='btns' onClick={()=> removeItem(id)}>Quitar del carrito</Button>
      )} 
       <Link to={'/'}> Volver</Link> <br />
    </Card>
        </Col>
    </Row>
</Container>

    </>)


}
export default ProductsItemDetail;


