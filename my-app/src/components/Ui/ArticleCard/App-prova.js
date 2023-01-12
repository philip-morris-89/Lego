import React from "react";
import ArticleCard from "./articleCard";

function App () {
    return (
        <div>
            <ArticleCard 
            img= "https://www.lego.com/cdn/cs/set/assets/blt1dbc509f07677e6e/60388-T3-202301-PS-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5"
            title= "I bambini possono portare l'azione degli eSport in città"
            subtitle= "È un torneo di divertimento con i nuovi set LEGO® City."
            cta= "Compra ora >"
            />
        </div>
    )
}

export default App