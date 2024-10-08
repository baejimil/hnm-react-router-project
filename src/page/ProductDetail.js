import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {

  let {id} = useParams()
  let [product, setProduct] = useState(null);

  const getDetailImg = async()=>{
    let url = `https://my-json-server.typicode.com/baejimil/hnm-react-router-project/products/${id}`;
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    setProduct(data)
  };

  useEffect(()=>{
    getDetailImg()
  },[])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice == true? "Conscious Choice":""}</div>
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
          <div className='add-btn'>추가</div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
