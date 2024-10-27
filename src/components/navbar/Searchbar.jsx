import React, { useState } from 'react';
import Productui from '../productui/productui';
import { products } from '../data/Products'; 
import { Link } from 'react-router-dom';

function Searchbar({ searchfilter }) {
 
  const [searchbar, setsearchbar] = useState({
    search: ""
  });

  const handlesearch = (event) => {
    const {  value } = event.target;
    setsearchbar({
    search:value
    });
  };
 
  
  const filterdata = products.filter((product) =>
    product.title.toLowerCase().includes(searchbar.search.toLowerCase())
  );

  return (
    searchfilter && (
      <div className="searchbar" >
        <input
          type="search"
          name="search"
          placeholder="Search for product"
          onChange={handlesearch}
          value={searchbar.search}
        />

        {searchbar.search && (
          <div className="sale">
            
            {filterdata.length > 0 ? (
              filterdata.map((item, index) => (
                <div className='cards' key={item.id} >
                  <div className='image'>
                    <Link to={`/${item.collection}/${item.type}/${item.category}/${item.sku}`}>
                      <img src={`/${item.images[0]}`} alt={item.title} />
                      <div className='inner'>
                        <img src={`/${item.images[2]}`} alt={item.title} />
                      </div>
                    </Link>

                    <div className="buttons">
                      {item.salePrice !== null && (
                        <button className='firstchild'>{`${item.salePrice}% OFF`}</button>
                      )}
                      {item.newArrival && (
                        <button className='lastchild'>new</button>
                      )}
                    </div>

                    <button>+add to cart</button>
                  </div>
                  <div className='cardbody'>
                    <h2>{item.title}</h2>
                    <p className='description'>{item.description}</p>
                    <p>Rs {item.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className='products' >No products found</p>
            )}
          </div>
        )}
      </div>
    )
  );
}

export default Searchbar;
