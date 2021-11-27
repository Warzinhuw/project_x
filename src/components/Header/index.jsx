import imagem from "../../img/icones/engrena.png"
import imagemOficina1 from "../../img/banners/oficina1.jpg"
import imagemOficina2 from "../../img/banners/oficina2.jpg"
import imagemOficina3 from "../../img/banners/oficina3.jpg"
import imagemOficina4 from "../../img/banners/oficina4.jpg"
import { Footer } from "../Footer/footer"
import { Carousel } from "../Carousel"
import Auth from "@aws-amplify/auth"
import React, { useState } from 'react';
import { Route } from "react-router-dom";


export function Header() {

    const [username, setUsername] = useState('');
    Auth.currentAuthenticatedUser({
    }).then(user => {
        setUsername(user.username);
    });

    return (
        <>
            <header>
                <img alt="engrega.png" className="icone" src={imagem} title="engrenagem" />
                <a href="#carrosel_fundo">Mexpress</a>
                <nav style={{ float: "right" }}>
                    <a href="#historia">Nossa história</a> |
                    <a href="#funcionamento">Como funciona</a> |
                    <a href="usuario.html">{username}</a>
                </nav>
            </header>
            <div id="conteudo_pag">
                <h1>
                    Bem vindo a mexpress
                </h1>
                <hr style={{ width: "60%", float: "left" }} /> <br></br>
                <p>Seu veículo pronto em tempo recorde.</p>
            </div>
            <div id="root">

            </div>
            <Carousel />
            <Footer />
        </>
    )
}