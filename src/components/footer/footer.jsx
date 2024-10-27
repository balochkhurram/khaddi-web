import React from 'react';
import { CiDeliveryTruck, CiPhone, CiMail, CiHeart, CiLocationOn } from 'react-icons/ci';

function Footer() {
  return (
<div className="footer">
        <div className="footer-top">
        <div className="card-footer">
          <div className="img">
            <CiDeliveryTruck fontSize={20} />
          </div>
          <div className="card-body">
            <a href="#"><p>Shipping charges</p><p>Starting from Rs 120</p></a>
          </div>
        </div>

        <div className="card-footer">
          <div className="img">
            <CiHeart fontSize={20} />
          </div>
          <div className="card-body">
            <p>Crated with care</p>
            <p>Curated with you in mind</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="img">
            <CiLocationOn fontSize={20} />
          </div>
          <div className="card-body">
            <a href="#"><p>Find stores</p><p>Stores countrywide across Pakistan, UK, UAE, US.</p></a>
          </div>
        </div>
      </div>
    
             <section> 

<div className="footer-middle">
        <h1>Need help?</h1>
        <div className="card-footer">
          <CiPhone fontSize={22} />
          <p><a href="tel:03054372019">03054372019</a></p>
        </div>

        <div className="card-footer">
          <CiMail fontSize={22} />
          <p><a href="mailto:example@example.com">Email us</a></p>
        </div>
      </div>
      </section>
      
     
      <section>
      <div className="footer-secondlast">
        <div className="card-footer">
        <p>help</p>
        <div className="cardbody">
          <p><a href="">track your order</a></p>
          <p><a href="">terms & condtion</a></p>
          <p><a href="">privacy policy</a></p>
        </div>
        </div>
        <div className="card-footer">
        <p>customer service</p>
        <div className="cardbody">
          <p><a href="">customer service</a></p>
          <p><a href="">store locator</a></p>
          <p><a href="">disclaimer</a></p>
          <p><a href="">delivery</a></p>
          <p><a href="">exchange</a></p>
          <p><a href="">faqs</a></p>
        </div>
        </div>
        <div className="card-footer">
        <p>more from khaddi</p>
        <div className="cardbody">
          <p><a href="">about us</a></p>
          <p><a href="">Blogs</a></p>
         
        </div>
        </div>
        <div className="card-footer">
        <p>our social</p>
        <div className="cardsocial">
          <p><a href=""><img src="./AssestImage/footer/facebook.png" alt="facebook" /></a></p>
          <p><a href=""><img src="./AssestImage/footer/instagram.webp" alt="instagram" /></a></p>
          <p><a href=""><img src="./AssestImage/footer/tiktiol.png" alt="tiktok" /></a></p>
          <p><a href=""><img src="./AssestImage/footer/youtube1.png" alt="youtube" /></a></p>
         
        </div>
        <p>get the latest news</p>
        <div className="input">
          <input type="email" name="" id="" placeholder='Email address' />
          <button>confirm</button>
        </div>
        </div>
      </div>
      </section>
      <section>
      <div className="footer-last">
        <div className="image">
          <p>100% safe checkout</p>
          <img src="./AssestImage/footer/pay (1).webp" alt="" />
        </div>
        <div className="image">
          <p>Secured by</p>
          <img src="./AssestImage/footer/secured.gif" alt="" />
        </div>
        <div className="logo">
          <img src="./AssestImage/footer/khaadi-Logo.png" alt="" />
        </div>
        <p>Copyright © 2024 Weaves Corporation Limited (Formerly Khaadi Corporation Limited). All Rights Reserved.</p>
      </div>
      </section>
      </div>
   

   

  );
}

export default Footer;
