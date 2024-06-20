import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';

const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img 
                  src="images/cross.svg" 
                  className="position-absolute cross img-fluid"
                  alt="cross" />
                <div className="wishlist-image-card">
                  <img src="images/tab.jpg" className="img-fluid " alt="" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor Tl 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img 
                  src="images/cross.svg" 
                  className="position-absolute cross img-fluid"
                  alt="cross" />
                <div className="wishlist-image-card">
                  <img src="images/speaker.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor Tl 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img 
                  src="images/cross.svg" 
                  className="position-absolute cross img-fluid"
                  alt="cross" />
                <div className="wishlist-image-card">
                  <img src="images/camera.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor Tl 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist