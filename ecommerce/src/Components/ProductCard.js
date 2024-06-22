import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const { grid } = props;
    const location = useLocation();
    return (
        <>
            <div className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"} `}>
                <Link to="/product/:id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="Wishlist Icon" />
                        </Link>
                    </div>
                    <div className="product-image ">
                        <img src="images/watch.jpg" className="img-fluid" alt="Products" />
                        <img src="images/watch-01.webp" className="h=25 w=25 p-5 img-fluid" alt="Products" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids Headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Necessitatibus omnis, labore exercitationem, incidunt iusto ab
                            facilis pariatur illo, quis tenetur fugiat non ea. Ab a quibusdam
                            eius exercitationem! Accusamus, pariatur.
                        </p>
                        <p className="price">$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="images/prodcompare.svg" alt="Prodcompare" />
                            </Link>
                            <Link>
                                <img src="images/view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg" alt="Add Cart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="Wishlist Icon" />
                        </Link>
                    </div>
                    <div className="product-image ">
                        <img src="images/watch.jpg" className="img-fluid" alt="Products" />
                        <img src="images/watch-01.webp" className="img-fluid h=25 w=25 p-5 " alt="Products" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids Headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Necessitatibus omnis, labore exercitationem, incidunt iusto ab
                            facilis pariatur illo, quis tenetur fugiat non ea. Ab a quibusdam
                            eius exercitationem! Accusamus, pariatur.
                        </p>
                        <p className="price">$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="images/prodcompare.svg" alt="Prodcompare" />
                            </Link>
                            <Link>
                                <img src="images/view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg" alt="Add Cart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard