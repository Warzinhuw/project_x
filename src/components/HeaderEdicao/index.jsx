import { useNavigate } from "react-router-dom";

export function HeaderEdicao() {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <img alt="" className="icone" src="../../img/icones/engrena.png" title="engrenagem" />

                Agora são <span id="relogio"></span> de <em><span id="data_dia"></span></em>

                <nav style={{ float: "right" }}>
                    <a href="#" onClick={() => navigate(-1)}>Voltar</a> |
                    <a href="../../index.html">Deslogar</a>
                </nav>
            </header>
        </>
    )
}