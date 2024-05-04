import React from "react"
export default function Livro({titulo, ano, autor, sinopse}){
    return(
        <section className="conteiner-livro">
            <div className="livro">
                <img src="../public/capa.jpeg"/>
                <div className="texto">       
                <h1>{titulo}</h1>
                <p>{ano}</p>
                <p>{autor}</p>
                <p>{sinopse}</p>
                </div>
            </div>
        </section>
    )
}

