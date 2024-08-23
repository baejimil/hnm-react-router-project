import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({authenticate, setAuthenticate}) => {

    const menuList = ['여성' , 'divided', '남성', '신생아/유아', '아동', 'J&H Home', 'sale', '지속가능성'];

    const [width, setWidth] = useState(0);

    const navigate = useNavigate()

    const goToHome =()=>{
      navigate('/')
    }

    const goToLogin=()=>{
      navigate('/login')
    }

    const search =(event)=>{
      if(event.key === "Enter"){
        let keyword = event.target.value;
        
        navigate(`/?q=${keyword}`)
      }
    }

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className='nav-header'>
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div className='login-button'>
            <div><FontAwesomeIcon icon={faUser} /></div>
            {authenticate ? (
              <div onClick={() => setAuthenticate(false)}>
                
                <div style={{ cursor: "pointer" }}>로그아웃</div>
              </div>
            ) : (
              <div onClick={() => navigate("/login")}>
                
                <div style={{ cursor: "pointer" }}>로그인</div>
              </div>
            )}
        </div>
      </div>
      <div className='nav-section'>
          <img width={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMW_Qn7YW4m4lPCuy6C069C5gqfcz4nynT1g&s' alt="" onClick={goToHome} />
      </div> 
      <div className='search-area'>
        <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" required onKeyPress={(event)=>search(event)} />
                    <label>Name</label>
                    <span></span>
            </div>
        </div>
      <div className='menu-area'>
        <ul className='menu'>
            {menuList.map((menu, index)=>(
            <li key={index}>{menu}</li>
            
            ))}
        </ul>
        
      </div>
      
    </div>
  )
}

export default Navbar
