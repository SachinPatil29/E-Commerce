import React, { useState } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ProductCard from '../Components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";


const SingleProduct = () => {
  const photo = {
    width: 400, 
    height: 250, 
    zoomWidth: 500, 
    img: "1.jpg"
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
                  <ReactImageZoom {...photo} />
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
                  pariatur ullam quos commodi laboriosam, soluta similique illum dolores
                  doloribus suscipit beatae corporis minima sapiente iste modi repudiandae,
                  quis voluptates! Maiores?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a href="" className="text-dark text-decoration-underline">
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                <form action="" className="d-flex flex-column gap-15">
                <h4>Write a Review</h4>
                <div>
                <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                </div>
                    <div>
                      <textarea 
                        name="" 
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      >
                      </textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h4 className="mb-0">Sachin</h4>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero labore qui veritatis, 
                      voluptate quo voluptatum, corrupti molestiae soluta cupiditate consectetur animi? Error minima 
                      exercitationem possimus hic nisi expedita asperiores!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Special Products</h3>
            </div>
            <ProductCard />
            {/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct