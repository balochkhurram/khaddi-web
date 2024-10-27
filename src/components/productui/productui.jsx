import React, { useState } from 'react'
import { products } from '../data/Products'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { IoGitMerge } from 'react-icons/io5'
import Banner2 from '../data/Banner'
function Productui() {
  const { collection, type, category } = useParams();

  // const oj = {
  //   name: '',
  //   age: '',
  //   uner:''
  // }
  // const {name, age} = oj
  const filterProducts = (item) => {
    let matches = true;


    if (collection) {

      matches = matches && item.collection === collection;
    }
    if (collection === 'sale' && !type) {
      return item.salePrice;
    }
    if (collection === 'newin' && !type) {
      return item.newArrival;
    }


    if (type) {
      matches = matches && item.type === type;
    }
    if (collection === 'newin' && type) {
      return item.collection === type && item.newArrival;
    }
    if (type === 'flat-50') {
      return item.salePrice === 50;
    }
    if (type == 'flat-40') {
      return item.salePrice === 40;
    }
    if (type === 'flat-30') {
      return item.salePrice === 30;
    }
    if (category) {
      matches = matches && item.category === category;
    }

    return matches;
  };


  const data = products.filter(filterProducts)

  console.log(data);
  const datato = products.filter(item => item.salePrice === 50)
  console.log(datato)

  // const imagefilter=Banner2.find((item)=>{
  //   if(collection && !type){
  //     return item.title===collection;
  //   }
  //   if(collection && type){
  //     return item.title===type;
  //   }
   

  // });
  return (

    <div className="div">
      {/* <div className="images">

        <img src={imagefilter.image} alt="" />
      </div> */}
      <div className='sale'>
        {data.map((item, index) => {
          return (
            <div className='cards' key={index.id}>
              <div className='image'>
                {/* <ImageSlider images={`/${data.images}`}/> */}
                {/* <img src={`/${data.images[0]}`} alt="data" /> */}
                <Link to={`/${item.collection}/${item.type}/${item.category}/${item.sku}`}>

                  <img src={`/${item.images[0]}`} alt='' />



                  <div className='inner'>
                    <img src={`/${item.images[2]}`} alt='' />
                  </div>
                </Link>
                <div className="buttons">
                  {item.salePrice !== null && (
                    <button className='firstchild' >{`${item.salePrice}% OFF`}</button>
                  )}
                  {item.newArrival === true && (
                    <button className='lastchild' >new</button>
                  )}
                </div>

                <button >+add to cart</button>
              </div>
              <div className='cardbody'>
                <h2>{item.title}</h2>
                <p className='description' >{item.description}</p>
                <p>Rs {item.price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Productui
