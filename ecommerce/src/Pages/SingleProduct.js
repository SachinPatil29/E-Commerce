import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ProductCard from '../Components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
// import Watch from "../Assets/images/image.png"


const SingleProduct = () => {
  const props = {
    width: 400, 
    height: 300, 
    zoomWidth: 500, 
    // img: "1.jpg"
  };

  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default SingleProduct

