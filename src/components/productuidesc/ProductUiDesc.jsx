import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/Products';
import { Link } from 'react-router-dom';

function ProductUiDesc() {
  const { sku } = useParams();
  const data = products.find((item) => item.sku === sku);
  const western = data.collection === 'western';
  const readytowear =data.collection === 'ready-to-wear';
   
  const [Clicked, setClicked] = useState('details');
  const [mainImageSlider, setMainImageSlider] = useState(0);
  const [sizeSelect, setSizeSelect] = useState(0);

  const handleSize = (index) => {
    setSizeSelect(index);
  };

  const setDetails = (item) => {
    setClicked(item);
  };

  const handleImageSlider = (item) => {
    setMainImageSlider(item);
  };

  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <div className="div">
     <div className="links">
      <Link to={"/"} >Home/</Link>
      <Link to={`/${data.collection}`} >{data.collection}/</Link>
      <Link to={`/${data.collection}/${data.type}`} >{data.type}/</Link>
      <Link to={`/${data.collection}/${data.type}/${data.category}`}  >{data.category}/</Link>
      <Link to="#" >{data.title}</Link>
     </div>

    <div className="carddesc">
      <div className="mainslider">
        <div className="sliderimagedesc">
          {data.images.map((image, index) => (
            <img
              key={index}
              src={`/${image}`}
              alt=""
              onClick={() => handleImageSlider(index)}
              style={{
                cursor: 'pointer',
                border: mainImageSlider === index ? '2px solid black' : 'none'
              }}
            />
          ))}
        </div>

        <div className="images">
          <img src={`/${data.images[mainImageSlider]}`} alt={data.title} />
        </div>
      </div>

      <div className="detailcard">
        <div className="card-body">
          <h2>{data.title}</h2>
          <p className="first">{data.description}</p>
          <p>Rs {data.price}</p>
        </div>

        <div className="stock-In">
          <div className="stock">
            <p>Availability:</p>
            <p>{data.availability ? 'In stock' : 'Out of stock'}</p>
          </div>
          <div className="sku">
            <p>SKU:</p>
            <p>{data.sku}</p>
          </div>
        </div>

        <div className="colors">
          <div className="colr">
            <p className='textcolor'>Color:</p>
            <div className="box">
              <p style={{ backgroundColor: data.color.title }}>
                {data.color.code}
              </p>
            </div>
          </div>
          <div className="size">
            <p>Size:</p>
            <div className="size-cloth">
              {data.size.map((sizeNumber, index) => (
                <p
                  key={index}
                  onClick={() => handleSize(index)}
                  style={{ cursor: 'pointer', fontWeight: sizeSelect === index ? 'bold' : 'normal' }}
                >
                  {sizeNumber}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mainbtn">
          <div className="btn">
            <p>-</p>
            <h3>1</h3>
            <p>+</p>
          </div>
          <div className="addtocard">
            <p>+ Add To Bag</p>
          </div>
        </div>

        {data.details && (
          <div className="details">
            <div className="heading">
              <h2
                className={Clicked === 'details' ? 'active' : 'details'}
                onClick={() => setDetails('details')}
                style={{ cursor: 'pointer', fontWeight: Clicked === 'details' ? 'bold' : 'normal' }}
              >
                Details
              </h2>
              {(western || readytowear) && (
                <h2
                  className={Clicked === 'size' ? 'active' : 'size'}
                  onClick={() => setDetails('size')}
                  style={{ cursor: 'pointer', fontWeight: Clicked === 'size' ? 'bold' : 'normal' }}
                >
                  Size Chart
                </h2>
              )}
            </div>

            <div className="detaildesc">
              {Clicked === 'details' && (
                <>
                  {data.details.Fit && (
                    <div className="detail">
                      <p>Fit:</p>
                      <p>{data.details.Fit}</p>
                    </div>
                  )}
                  {data.details.description && (
                    <div className="detail">
                      <p>Description:</p>
                      <p>{data.details.description}</p>
                    </div>
                  )}
                  {data.details.topFabric && (
                    <div className="detail">
                      <p>Top Fabric:</p>
                      <p>{data.details.topFabric}</p>
                    </div>
                  )}
                  {data.details.bottomFabric && (
                    <div className="detail">
                      <p>Bottom Fabric:</p>
                      <p>{data.details.bottomFabric}</p>
                    </div>
                  )}
                  {data.details.dupattaFabric && (
                    <div className="detail">
                      <p>Dupatta Fabric:</p>
                      <p>{data.details.dupattaFabric}</p>
                    </div>
                  )}
                  {data.details.technique && (
                    <div className="detail">
                      <p>Technique:</p>
                      <p>{data.details.technique}</p>
                    </div>
                  )}
                  {data.details.fabricContent && (
                    <div className="detail">
                      <p>Fabric Content:</p>
                      <p>{data.details.fabricContent}</p>
                    </div>
                  )}
                </>
              )}

              {Clicked === 'size' && (
                <div className="size-chart">
                  {western ? (
                    <table>
                      <thead>
                        <tr>
                          <th>Size</th>
                          <th>Shoulder/Sleeve</th>
                          <th>Chest</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>XS</td>
                          <td>29.5</td>
                          <td>28.5</td>
                        </tr>
                        <tr>
                          <td>S</td>
                          <td>30.5</td>
                          <td>29.5</td>
                        </tr>
                        <tr>
                          <td>M</td>
                          <td>31.5</td>
                          <td>30.5</td>
                        </tr>
                        <tr>
                          <td>L</td>
                          <td>32.5</td>
                          <td>31.5</td>
                        </tr>
                      </tbody>
                    </table>
                  ) : (
                    readytowear && (
                      <table>
                        <thead>
                          <tr>
                            <th>Size</th>
                            <th>Shoulder</th>
                            <th>Chest/Bust</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>6</td>
                            <td>14</td>
                            <td>19</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>14.5</td>
                            <td>20</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>21</td>
                            <td>30.5</td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>22</td>
                            <td>31.5</td>
                          </tr>
                        </tbody>
                      </table>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default ProductUiDesc;
