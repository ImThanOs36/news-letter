import React from 'react'


function Author(author) {
    return (
        <div className='author'>

            <div className='author__info'>

                <img className='avatar' src={author.img} alt="author" />
                
                <div>
                <span>dfsfdf</span>
                <p>fsddfd</p>
                    </div>
            </div>

            <button className='bookmark'>
                <i className="fa-regular fa-bookmark"></i>
            </button>

        </div>
    )
}

export default Author