import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className="col-3">
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className="img-fluid" alt="blogs" />
            </div>
            <div className="blog-content">
                <p className="date">15 Jun, 2024</p>
                <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
                <p className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eos dolorum nisi aliquam commodi nostrum consequatur veniam official 
                </p>
                <Link to="/" className="button">Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard