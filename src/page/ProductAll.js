import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {

  const [productList, setProductList] = useState([]);

  const getProducts = async()=>{
    let url = 'https://my-json-server.typicode.com/baejimil/baejimeel-jnh/products'
    // let url = 'http://localhost:5001/products';
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data);
    console.log(data)
  }

  useEffect(()=> {
    getProducts()
  }, []);

  return (
    <div>
        <Container>
          <Row>
            {productList.map((menu, index)=>(
              <Col lg={3} key={index}>
              <ProductCard item={menu} />
            </Col>))}
          </Row>
        </Container>
    </div>
  )
}

export default ProductAll
