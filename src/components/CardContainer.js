import React from 'react'
import '../css/home-cards.css'

function CardContainer() {
    //console.log("CardContainer rendered");
    return (
        <div className="full-container-fluid">
            <img className="img-fluid" id="home-img" src="https://png.pngtree.com/background/20210711/original/pngtree-simple-food-delivery-meal-fashion-poster-background-yellow-back-picture-image_1084439.jpg" alt="home-banner"/>
        </div>
    )
}

export default React.memo(CardContainer)
