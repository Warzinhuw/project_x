import { useState } from 'react';
import imagem_engrena from "../../img/icones/engrena.png"
import Auth from "@aws-amplify/auth"

export function Header() {

    const [username, setUsername] = useState('');
    Auth.currentAuthenticatedUser({
    }).then(user => {
        setUsername(user.username);
    });

    return (
        <header>
            <img alt="engrega.png" className="icone" src={imagem_engrena} title="engrenagem" />
            <a href="#carrosel_fundo">Mexpress | {username}</a>
            <nav style={{ float: "right" }}>
                
            </nav>
        </header>
    )
}