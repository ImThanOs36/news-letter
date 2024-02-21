import React from 'react'
import Author from './Author'
import img1 from '../images/avatar/acc_avatar.jpg'
import img2 from '../images/avatar/acc_avatar.jpg'
import img3 from '../images/avatar/acc_avatar.jpg'
import img4 from '../images/avatar/acc_avatar.jpg'
const images = [img1, img2, img3, img4]
function Card(card) {
  return (
    <div className='card'>

      <img className='card__image' src={img1} alt="" />
      <div className='card__info'>

        <span>Lorem, ipsum dolor.</span>
        <p>Lorem ipsusit amet cons
          e mias?</p>
      </div>

      <Author img={images[0]} />

    </div>
  )
}

export default Card