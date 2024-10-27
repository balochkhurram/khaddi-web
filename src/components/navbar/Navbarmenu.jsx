import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import Navbarbtn from './Navbarbtn';
import mobileArray from './NavbarMobileArray';

function Navbarmenu({handleclosemenu, }) {
  const [dropdown, setDropdown] = useState(null);
  const [optionselect,setoptionselect]=useState('shop');
  const handleDropList = (index) => {
    setDropdown(dropdown === index ? null : index);
  };
  const handleselect=(item)=>{
    setoptionselect(item);
  }

  return (
    
      <div className="mobile-nav-menu">
        <div className="button">
          <Navbarbtn handleclosemenu={handleclosemenu} setoptionselect={setoptionselect}  /> 
        </div>
        <ul>

        {optionselect==='shop' && mobileArray.map((item,index)=>{
              return(
          <li> 
            <div className="line">
            <div className="problem">
            <Link to={item.path} onClick={handleclosemenu} >{item.title}</Link>
            <p onClick={()=>handleDropList(index)} >{dropdown===index ? <FiMinus /> : <FaPlus />}</p>
            </div>
            {dropdown===index && (
            <ul className='dropdown' >
              {item.submenu.map((submenuitem)=>{
                    return(
                      
                    
             
              <li><Link to={submenuitem.path} onClick={handleclosemenu}  ><p>{submenuitem.title}</p> </Link>
              {submenuitem.dropdownsubmenu && (
              <ul className='dropdownsub' >
                {submenuitem.dropdownsubmenu.map((dropdownsub)=>{
                  return(

          
                <li><Link to={dropdownsub.path} onClick={handleclosemenu} >{dropdownsub.title}</Link></li>
              )
            })}
              </ul>
              )}
              </li>
           
            )
            })}  
            </ul>
           )}
          
           </div>
          </li>
            )
          })} 
             
        </ul>
        {optionselect==='account' && ( 
        <div className="login">
         
          <p>sign up</p>
          <p>create an account </p>
         
        </div>
        )}
      </div>
  );
}

export default Navbarmenu;
