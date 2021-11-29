import HeaderEdicao from "../../components/HeaderEdicao";

export function Veiculos() {
    return (
        <>
            <HeaderEdicao />
            <div id="lista_veiculos">
                <div className="quadro_infos">
                    {/* Aparecer somente para usuários comuns */}
                    <h4>Todos os veículos que você trouxer até nossa oficina aparecerão por aqui automaticamente</h4>

                    {/* Aparecer somente para admins */}
                    <a href="./editar_veiculo/index.jsx" className="button">Adicionar um veículo</a>
                </div>

                <a href="#"> {/* funcoes/edicao_veiculos.html */}
                    <div className="quadros_veiculos" id="imagem_veiculos">
                        <span className="detalhe_quadro_veiculo_cima">Fuscão preto <br />DIJ-8432</span>
                        <span className="detalhe_quadro_veiculo_baixo">Dono(a): Josival</span>  {/* Só deve aparecer se o usuário for adm */}
                    </div>
                </a>

                <a href="#">
                    <div className="quadros_veiculos" id="imagem_veiculos">
                        <span className="detalhe_quadro_veiculo_cima">Porsche<br />JDS2488</span>
                        <span className="detalhe_quadro_veiculo_baixo">Dono(a): Josival</span> {/* Só deve aparecer se o usuário for adm */}
                    </div>
                </a>

                <a href="#">
                    <div className="quadros_veiculos" id="imagem_veiculos">
                        <span className="detalhe_quadro_veiculo_cima">Porsche<br />JDS2488</span>
                        <span className="detalhe_quadro_veiculo_baixo">Dono(a): Gertudres</span> {/* Só deve aparecer se o usuário for adm */}
                    </div>
                </a>

                <a href="#">
                    <div className="quadros_veiculos" id="imagem_veiculos">
                        <span className="detalhe_quadro_veiculo_cima">Lambreta<br />KFC-8432</span>
                        <span className="detalhe_quadro_veiculo_baixo">Dono(a): Gertudres</span> {/* Só deve aparecer se o usuário for adm */}
                    </div>
                </a>

                <a href="#">
                    <div className="quadros_veiculos" id="imagem_veiculos">
                        <span className="detalhe_quadro_veiculo_cima">Ford Ka<br />KSD2749</span>
                        <span className="detalhe_quadro_veiculo_baixo">Dono(a): Nilce</span> {/* Só deve aparecer se o usuário for adm */}
                    </div>
                </a>
            </div>

            <div id="transitador"></div>
        </>
    )
}