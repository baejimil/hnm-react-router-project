import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {

  const navigate = useNavigate();

  const goToProductDetail=()=>{
    navigate(`/product/${item.id}`)
  }

  return (
    <div className='card' onClick={goToProductDetail}>
      <div className='img-wrap'>
        <img src={item?.img} alt="" />
      </div>
      <div>{item?.choice == true? "Conscious Choice":""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price} </div>
      <div>{item?.new==true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard
