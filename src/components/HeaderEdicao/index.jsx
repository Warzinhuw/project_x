import { useState, useEffect } from 'react';
import Auth from "@aws-amplify/auth"
import { useNavigate } from "react-router-dom";

export function HeaderEdicao() {
    const navigate = useNavigate();

    const locale = "pt-br"

    const [username, setUsername] = useState('');
    Auth.currentAuthenticatedUser({
    }).then(user => {
        setUsername(user.username);
    });

    const [currentDate, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    const dateToday = currentDate.toLocaleDateString(locale, {timeZone: 'America/Sao_Paulo'})
    const timeNow = currentDate.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric'})

    return (
        <>
            <header>
                <img alt="" className="icone" src="../../img/icones/engrena.png" title="engrenagem" />

                {username} | Agora são {timeNow} de <em><span>{dateToday}</span></em>

                <nav style={{ float: "right" }}>
                    <a href="#" onClick={() => navigate(-1)}>Voltar</a> |
                    <a href="../../index.html">Deslogar</a>
                </nav>
            </header>
        </>
    )
}