import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function NewPosts() {
    return (
        <div className="container">
            <div className="new__posts">

            
            <div className='cardsNav'>
                <div className="cards__title">
                    <span>New Posts</span>
                </div>

                <div className="see-all">
                    <Link to={"/"}>See All</Link>
                </div>
                <div className="PostChange">
                   
                    <button className='PostChange__btn' ><i className="fa-solid fa-angle-left"></i></button>
                    <button className='PostChange__btn' ><i className="fa-solid fa-angle-right"></i></button>
                </div>

            </div>
            <div className="cards">
                <div>
                <Card />
                </div>
                <Card />
                <Card />
                <Card />

            </div>
        </div>
        </div>
    )
}

export default NewPosts