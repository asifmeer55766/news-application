import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import image from '../../assets/news-700x435-1.jpg';
export default function Home() {
    return (
        <>
            <div className="main-container">
                <div className="left-carousel">

                    <img src={image} alt="" />
                    <div className="captions">
                        <p>Technology  / 23-03-2024</p>
                        <h2>New inventions in space by appollo 11 mession</h2>
                    </div>


                </div>
                <div className="right-category">
                    <div className="categories category-top">
                        <h3>Categories</h3>
                        <Link to={'/'}>View all</Link>
                    </div>
                    <div className="categories sub-category">
                        <Link to={'/business'}>Business</Link>
                    </div>
                    <div className="categories sub-category">
                        <Link to={'/technology'}>Technology</Link>
                    </div>
                    <div className="categories sub-category">
                        <Link to={'/sports'}>Sports</Link>
                    </div>
                    <div className="categories sub-category">
                        <Link to={'/entertainment'}>Entertainment</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
