export default function Estoque(props){
    return(
        <>
        <div id="lista_pecas">
            <div id="filtro_pecas">
                <input type="text" onkeyup="filtra_pecas()" id="barra_pesquisa" placeholder="Digite para pesquisar..."/>
            </div>
            
            <a href="#">
                <div className="quadros_servicos bk_add_peca">
                    <span className="status_sv sv_iniciar"><i className="fa fa-plus-circle fa-4x" aria-hidden="true"></i></span>

                    <div className="infos_servicos">
                        <br/>
                        <h4>Adicionar uma nova peça</h4>
                    </div>
                </div>
            </a>

            <a href="#" className="all parafuso">
                <div className="quadros_pecas bk_tools">
                    <span className="peca_sv sv_peca"><h2 className="placa">Parafuso</h2></span>
                </div>
            </a>

            <a href="funcoes/edicao_peca.html" className="all marreta">
                <div className="quadros_pecas bk_tools">
                    <span className="peca_sv sv_peca"><h2 className="placa">Marreta</h2></span>
                </div>
            </a>

            <a href="funcoes/edicao_peca.html" className="all tesoura">
                <div className="quadros_pecas bk_tools">
                    <span className="peca_sv sv_peca"><h2 className="placa">Tesoura</h2></span>
                </div>
            </a>

            <a href="funcoes/edicao_peca.html" className="all alicate">
                <div className="quadros_pecas bk_tools">
                    <span className="peca_sv sv_peca"><h2 className="placa">Alicate</h2></span>
                </div>
            </a>

            <a href="funcoes/edicao_peca.html" className="all oleo">
                <div className="quadros_pecas bk_tools">
                    <span className="peca_sv sv_peca"><h2 className="placa">Óleo</h2></span>
                </div>
            </a>

            <a href="funcoes/edicao_peca.html" className="all cabo">
                <div className="quadros_pecas bk_tools">
                    <span className="peca_sv sv_peca"><h2 className="placa">Cabo</h2></span>
                </div>
            </a>

            <a href="funcoes/edicao_peca.html" className="all furadeira">
                <div className="quadros_pecas bk_tools">
                    <span className="peca_sv sv_peca"><h2 className="placa">Furadeira</h2></span>
                </div>
            </a>

            <a href="funcoes/edicao_peca.html" className="all martelo">
                <div className="quadros_pecas bk_tools">
                    <span className="peca_sv sv_peca"><h2 className="placa">Martelo</h2></span>
                </div>
            </a>
        </div>

        <div id="transitador"></div>
    </>
    )
}