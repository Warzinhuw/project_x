export function QuadrosUser() {
    return (
        <>
            <div id="quadros_opcoes">
                <a href="./veiculos/index.jsx">
                    <div className="quadros_user" id="imagem_veiculos">
                        <span className="detalhe_quadro">Seus veículos</span> {/* Veículos registrados */}
                    </div>
                </a>
                
                <a href="./servicos/index.jsx">
                    <div className="quadros_user" id="imagem_servicos">
                        <span className="detalhe_quadro">Serviços requisitados</span>
                    </div>
                </a>

                {/* <a href="#">
                    <div className="quadros_user" id="imagem_configura">
                        <span className="detalhe_quadro">Configurações</span>
                    </div>
                </a> */}

                {/* <a href="./clientes/index.jsx">
                    <div className="quadros_user" id="imagem_clientes">
                        <span className="detalhe_quadro">Clientes</span>
                    </div>
                </a> */}

                <a href="./estoque/index.jsx">
                    <div className="quadros_user" id="imagem_estoque">
                        <span className="detalhe_quadro">Estoque</span>
                    </div>
                </a>
            </div>
        </>
    )
}