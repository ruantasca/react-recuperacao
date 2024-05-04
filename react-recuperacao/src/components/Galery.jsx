import React from "react";
export default function Galery(){
    return(
    <section className="conteiner-galeria">
        <div className="b">
                <h1 className="h1b">Livros Disponiveis</h1>
            </div>
    <div className="galeria">
        
        <div className="imagem-conteiner">
            <img src="../public/livro1.webp" />
            <p>1</p>
        </div>
        
        <div className="imagem-conteiner">
            <img src="../public/img2.jpg" />
            <p>1</p>
        </div>
        
        <div className="imagem-conteiner">
            <img src="../public/img3.jpg" />
            <p>1</p>
        </div>
    </div>
    <div className="galeria1">
        <div className="imagem-conteiner">
            <img src="../public/img4.webp" />
            <p>1</p>
        </div>
        
        <div className="imagem-conteiner">
            <img src="../public/img5.png" />
            <p>1</p>
        </div>
        
        <div className="imagem-conteiner">
            <img src="../public/img6.jpg" />
            <p>1</p>
        </div>
    
    </div> 
    </section>
    )
}

