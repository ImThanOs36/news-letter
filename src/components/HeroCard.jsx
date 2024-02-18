import React from 'react'
import car from '../images/cars/car1.jpg'
function HeroCard() {
    return (
        <div className="container">
            <div className="hero__cards">
                <div className="hero__card">
                    <img src={`${car}`} alt="img" />
                    <div className="card__info">
                        Lorem ipsum dolor sit amet consectetur adipisicing  elit. Totam, ipsa.
                    </div>
                </div>
                <div className="hero__card">
                    <img src={`${car}`} alt="img" />
                    <div className="card__info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsa.
                    </div>
                </div>
                <div className="hero__card">

                    <img src={`${car}`} alt="img" />
                    <div className="card__info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsa.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsa.
                    </div>
                </div>

            </div>
        </div>


    )
}

export default HeroCard