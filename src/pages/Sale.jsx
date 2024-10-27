import React from 'react'

import Productui from '../components/productui/productui'
import { useParams } from 'react-router-dom';
import { products } from '../components/data/Products';
function Sale() {
    

  return (
    /*
   <div className="sale">
    {product.map((item)=>{
        return(
            <div className="cards">
               
                <div className="image">
                
                
                <img src={item.images.image1} alt="" />
                <div className="inner">
                <img src={item.images.image2} alt="" />
                </div>
                
                <button className='btn'>+add to cart</button>
                <button>{item.saleprice}% OFF</button>
               
                </div>
               
               <div className="cardbody">
                <p>{item.title}</p>
                <p>{item.desc}</p>
                <p>{item.price}</p>
                
               </div>
            </div>
        )
    })}

   
   </div>
   */



<Productui/>
  
)
}

export default Sale