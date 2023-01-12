import React from 'react'
import "./quickLink.css"

function QuickLink({
    linkImmagine= "https://www.lego.com/cdn/cs/set/assets/blt4adc5a9b68979056/novelty-2020-06-Quicklink.jpg?fit=crop&format=webply&quality=80&width=80&height=65&dpr=1.5",
    titolo= "Novità"
}) {
    return (

        <li>
            <a href="#">
                <img src={linkImmagine} />
                <h6>{titolo}</h6>
            </a>
        </li>

    )
}

export default QuickLink