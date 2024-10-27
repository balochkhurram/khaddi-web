import React from 'react'

import { Link } from 'react-router-dom'
function Banner() {
  return (
   <div className="banner">
  <Link  to="/fabrics"   > <img src="/AssestImage/box/c1.jpg" alt="" /> </Link>
  <Link to="ready-to-wear" > <img src="/AssestImage/box/c2.webp" alt="" /></Link>
   <img src="/AssestImage/box/c3.jpg" alt="" />
   <img src="/AssestImage/box/c1.webp" alt="" />
   </div>
  )
}

export default Banner