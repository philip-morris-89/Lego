import React from 'react'
import "../ArticleCard/articleCard.css"


function ArticleCard(props) {
    return(
        <div>
            <img scr={props.img}></img>
            <h3 className="card-title">{props.title}</h3>
            <h5 className="card-subtitle">{props.subtitle}</h5>
            <a href="#">{props.cta}</a>
        </div>
    )
}

export default ArticleCard