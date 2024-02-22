import React, { useRef, useState } from 'react';
import Card from './Card'



function PostCards(cards) {

  const divRef = useRef(null);
  const [vissible, setVissible] = useState(false)

  const toggleVisible = () => {

    setVissible(vissible)
  }

  const handleScroll = (scrollAmount) => {
    if (divRef.current) {
      divRef.current.scrollLeft += scrollAmount;
    }
    toggleVisible();
  };
  return (
    <div className="container">
      <div className="cards">

        <div className='cardsNav'>
          <div className="cards__title">
            <span>{cards.title}</span>
          </div>
          <div className="PostChange">

            <button className='PostChange__btn' onClick={() => handleScroll(-300)}><i className="fa-solid fa-angle-left"></i></button>
            <button className='PostChange__btn' onClick={() => handleScroll(300)}><i className="fa-solid fa-angle-right"></i></button>
          </div>

        </div>
        <div className="popular__posts "


          ref={divRef}
          style={{
            width: '100%', // Set the width to 100% to allow horizontal scrolling
            overflowX: 'auto',
            overflowY: 'hidden', // Hide vertical scrollbar
            whiteSpace: 'nowrap', // Prevent items from wrapping to the next line
          }}


        >

          <Card id="1" />
          <Card id="2" />
          <Card id="3" />
          <Card id="4" />
          <Card id="5" />
          <Card id="6" />
        </div>
      </div>
    </div>
  )
}

export default PostCards