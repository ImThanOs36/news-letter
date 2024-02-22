import React from 'react'
import Author from './Author'
import img1 from '../images/avatar/acc_avatar.jpg'
import img2 from '../images/cars/car1.jpg'


function Card() {
  return (
    <div className='card'>

      <img className='card__image' src={img2} alt="" />
      <div>

        <div className='card__info'>

          <span className='card__heading'>What About The Plans we made?</span>
          <p>I'll be deniel for atleast a little while what about the plans we made</p>
        </div>

        <Author img={img1} />
      </div>

    </div>
  )
}

export default Card