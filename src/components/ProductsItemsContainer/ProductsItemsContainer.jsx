import { useEffect, useState } from 'react'
import Products from '../../json/Products.json'
import ProductsItems from '../ProductsItems/ProductsItems'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useParams } from 'react-router-dom'

function ProductsItemsContainer(){
    const [products, setProducts]= useState([])
    const {category}= useParams()
    
    useEffect(()=>{
        const allProducts= Products
        const filterProducts=(category ? allProducts.filter(p=> p.category === category) : allProducts) 
        setProducts(filterProducts)
    },[category])


    return(<>
   

   <Container className='container-fluid'>
        <Row>
        {products.map(p=> <ProductsItems key={p.id} id={p.id} img={p.img} description={p.description} price={p.price} /> )}
        </Row>
    </Container>
    </>)

}
export default ProductsItemsContainer;
/**/