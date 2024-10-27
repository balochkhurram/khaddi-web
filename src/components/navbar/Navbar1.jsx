import React, { useState } from 'react'

import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Navbarmenu from './Navbarmenu';
import Searchbar from './Searchbar';


function Navbar1() {
   const [menuactive,setmenuactive]=useState(false);
   const [searchfilter,setsearchfilter]=useState(false);
  
   const handlemenu=()=>{
    setmenuactive(!menuactive);
   }
 const handleclosemenu=()=>{
  setmenuactive(false);
 
 }
 const handlesearch=()=>{
  setsearchfilter(!searchfilter);
 }
  return (
    <div className="navbar">
     <>
      <div className="menu" onClick={handlemenu} >
     { menuactive ? <CiMenuFries /> : <CiMenuFries />}
     
      </div>
      {menuactive ? (<Navbarmenu  handleclosemenu={handleclosemenu} />  ):(
        <>
       
      <div className="logo">
        <Link to={"/"}  > <img src="/AssestImage/logo/logo.svg" alt="" /></Link>
      </div>
      {/* navbar start  */}
     
      <div className="navlinks">
        <ul>
          <li><Link to="/sale" >Sale</Link>
            {/* droplist start */}
            <ul className='droplist' >
              <li>
                <Link to={"/sale/flat-50"} >  <img src="/AssestImage/navbar/saleImage1.webp" alt="" />
                  <h2>flat 50% off</h2>
                </Link>
              </li>
              <li>
                <Link to={"/sale/flat-40"} > <img src="/AssestImage/navbar/saleImage2.webp" alt="" />
                  <h2>flat 50% off</h2></Link>
              </li>
              <li>
                <Link to={"/sale/flat-30"} > <img src="/AssestImage/navbar/saleImage3.webp" alt="" />
                  <h2>flat 50% off</h2> </Link>
              </li>
            </ul>
            {/* droplist close */}
          </li>
          <li><Link to="/newin" >new in</Link>
            {/* droplist start */}
            <ul className='droplist' >
              <li>
                <Link to={"/newin/ready-to-wear"} >  <img src="/AssestImage/navbar/newImage1.webp" alt="" />
                  <h2>ready to wear</h2></Link>
              </li>
              <li>
                <Link to={"/newin/fabrics"} ><img src="/AssestImage/navbar/newImage2.webp" alt="" />
                  <h2>fabrics</h2></Link>
              </li>
              <li>
                <Link to={"/newin/western"} ><img src="/AssestImage/navbar/newImage3.webp" alt="" />
                  <h2>western</h2></Link>
              </li>
            </ul>
            {/* droplist close */}
          </li>
          <li><Link to="/fabrics" >fabrics</Link>
            {/* droplist start */}
            <ul className='droplist' >
              <li>
                <Link to={"/fabrics/3-piece-fabrics"} ><h3>3 Piece Fabrics</h3></Link>
                <Link to={"/fabrics/3-piece-fabrics/Embroidered Full Suit"} ><p>embroidered full suit</p></Link>
                <Link to={"/fabrics/3-piece-fabrics/Printed Full Suit"} ><p>Printed  full suit</p></Link>
                <Link to={"/fabrics/3-piece-fabrics/Khaas Full Suit"} ><p>khaas full suit</p></Link>
              </li>

              <li>
                <Link to={"/fabrics/2-piece-fabrics"} ><h3>2 Piece Fabrics</h3></Link>
                <Link to={"/fabrics/2-piece-fabrics/Printed Top Bottoms"} ><p>printed  top bottoms</p></Link>
                <Link to={"/fabrics/2-piece-fabrics/Embroidered Top Bottoms"} ><p>embroidered top bottoms</p></Link>
                <Link to={"/fabrics/2-piece-fabrics/Printed Top Dupatta"} ><p>printed top  dupatta</p></Link>
                <Link to={"/fabrics/2-piece-fabrics/Embroidered Top Dupatta"} ><p>embroidered  top dupatta</p></Link>
              </li>
              <li>
                <Link to={"#"} >  <img src="/AssestImage/navbar/sale100.webp" style={{ width: "240px", height: "240px" }} alt="" /></Link>
              </li>

            </ul>
            {/* droplist end */}
          </li>
          <li><Link to="/ready-to-wear" >ready to wear</Link>
          {/* droplist start */}
            <ul className='droplist' >
              <li>
                <Link to={"/ready-to-wear/eastern-pret"} ><h3>eastern pret</h3></Link>
                <Link to={"/ready-to-wear/eastern-pret/Embroidered Kurta"} ><p>embroidered kurta</p></Link>
                <Link to={"/ready-to-wear/eastern-pret/Printed Kurta"} ><p>Printed kurta</p></Link>
                <Link to={"/ready-to-wear/eastern-pret/Basic Kurta"} ><p>Basic kurta</p></Link>
                <Link to={"/ready-to-wear/eastern-pret/Saree"} ><p>saree</p></Link>
                <Link to={"/ready-to-wear/eastern-pret/Yarn Dyed"} ><p>yarn dyed</p></Link>
              </li>

              <li>
                <Link to={"/ready-to-wear/bottoms-and-separates"} ><h3>bottoms and separates</h3></Link>
                <Link to={"/ready-to-wear/bottoms-and-separates/Pants"} ><p>pants</p></Link>
                <Link to={"/ready-to-wear/bottoms-and-separates/Shalwar"} ><p>shalwar</p></Link>
                <Link to={"/ready-to-wear/bottoms-and-separates/Dupatta"} ><p>dupatta</p></Link>
                <Link  to={"/ready-to-wear/bottoms-and-separates/Stoles"} ><p>stoles</p></Link>

              </li>
              <li>
                <Link to={"#"} >  <img src="/AssestImage/navbar/readyDrop.jpg" style={{ width: "240px", height: "240px" }} alt="" /></Link>
              </li>

            </ul>
            {/* droplist end */}
          </li>
          <li><Link to="/sale" >western</Link>
            {/* droplist start */}
            <ul className='droplist' >
              <li>
                <Link to={"/ready-to-wear/eastern-pret"} ><h3>outerwear</h3></Link>
                <Link to={"/ready-to-wear/eastern-pret/Embroidered Kurta"} ><p>Sweatshirts</p></Link>
           
              </li>

              <li>
                <Link to={"/ready-to-wear/bottoms-and-separates"} ><h3>tops</h3></Link>
                <Link to={"/ready-to-wear/bottoms-and-separates/Pants"} ><p>blouses</p></Link>
                <Link to={"/ready-to-wear/bottoms-and-separates/Shalwar"} ><p>shirts</p></Link>
                <Link to={"/ready-to-wear/bottoms-and-separates/Dupatta"} ><p>t-shirts</p></Link>
                <Link  to={"/ready-to-wear/bottoms-and-separates/Stoles"} ><p>polos</p></Link>
                <Link  to={"/ready-to-wear/bottoms-and-separates/Stoles"} ><p>tunic</p></Link>

              </li>
              <li>
                <Link to={"/ready-to-wear/bottoms-and-separates"} ><h3>dresses</h3></Link>
                <Link to={"/ready-to-wear/bottoms-and-separates/Pants"} ><p>maxi dress</p></Link>
                <Link to={"/ready-to-wear/bottoms-and-separates/Shalwar"} ><p>jumsuit</p></Link>
              
              </li>
              <li>
                <Link to={"/ready-to-wear/bottoms-and-separates"} ><h3>bottoms</h3></Link>
                <Link to={"/ready-to-wear/bottoms-and-separates/Pants"} ><p>pants</p></Link>
                <Link to={"/ready-to-wear/bottoms-and-separates/Shalwar"} ><p>tights</p></Link>
                <Link to={"/ready-to-wear/bottoms-and-separates/Dupatta"} ><p>jeans</p></Link>
                <Link  to={"/ready-to-wear/bottoms-and-separates/Stoles"} ><p>skirt</p></Link>
            

              </li>
              <li>
                <Link to={"/sale/flat-30"} > <img src="/AssestImage/navbar/westernDrop.jpg" alt="" style={{width:"240px" , height:"240px"}} />
                  </Link>
              </li>

            </ul>
            {/* droplist end */}
          </li>
          <li><Link to="/sale" >chapter 2</Link></li>
        </ul>
      </div>
    
      <div className="social-icons">
        <ul >
          <li><Link><CiDeliveryTruck /></Link></li>
          <li><Link><CiUser /></Link></li>
          <li><Link><IoBagOutline /></Link></li>
          <li onClick={handlesearch} searchfilter={searchfilter}  ><CiSearch /></li>
        </ul>
      </div>
      </>
      )}
      <Searchbar searchfilter={searchfilter}  />
      </>
    </div>
  )
}

export default Navbar1