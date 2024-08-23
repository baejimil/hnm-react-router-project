import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {

  const [productList, setProductList] = useState([]);

  const [query, setQuery] = useSearchParams();

  const getProducts = async()=>{

    const searchQuery = query.get('q') || "";
    console.log(searchQuery)

    let url = `https://my-json-server.typicode.com/baejimil/hnm-react-router-project/products?q=${searchQuery}`;
    // let url = 'http://localhost:5001/products';
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data);
    console.log(data)
  }

  useEffect(()=> {
    getProducts()
  }, [query]);

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
