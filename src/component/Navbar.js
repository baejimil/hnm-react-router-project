import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const menuList = ['여성' , 'divided', '남성', '신생아/유아', '아동', 'J&H Home', 'sale', '지속가능성'];

    const navigate = useNavigate()

    const goToHome =()=>{
      navigate('/')
    }

    const goToLogin=()=>{
      navigate('/login')
    }

  return (
    <div>
      <div>
        <div className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <div onClick={goToLogin}>로그인</div>
        </div>
      </div>
      <div className='nav-section'>
          <img width={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMW_Qn7YW4m4lPCuy6C069C5gqfcz4nynT1g&s' alt="" onClick={goToHome} />
      </div> 
      <div className='search-area'>
        <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" required />
                    <label>Name</label>
                    <span></span>
            </div>
        </div>
      <div className='menu-area'>
        <ul className='menu-list'>
            {menuList.map((menu, index)=>(
            <li key={index}>{menu}</li>
            
            ))}
        </ul>
        
      </div>
      
    </div>
  )
}

export default Navbar
