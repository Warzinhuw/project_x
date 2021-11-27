export function QuadrosUser() {
    return (
        <>
            <div id="quadros_opcoes">
                <a href="./Veiculos/index.jsx">
                    <div className="quadros_user" id="imagem_veiculos">
                        <span className="detalhe_quadro">Seus veículos</span> {/* Veículos registrados */}
                    </div>
                </a>
                
                <a href="./Servicos/index.jsx">
                    <div className="quadros_user" id="imagem_servicos">
                        <span className="detalhe_quadro">Serviços requisitados</span>
                    </div>
                </a>

                <a href="#">
                    <div className="quadros_user" id="imagem_configura">
                        <span className="detalhe_quadro">Configurações</span>
                    </div>
                </a>

                <a href="./Clientes/index.jsx">
                    <div className="quadros_user" id="imagem_clientes">
                        <span className="detalhe_quadro">Clientes</span>
                    </div>
                </a>

                <a href="./Estoque/index.jsx">
                    <div className="quadros_user" id="imagem_estoque">
                        <span className="detalhe_quadro">Estoque</span>
                    </div>
                </a>
            </div>
        </>
    )
}