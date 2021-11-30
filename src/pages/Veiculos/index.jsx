import { useEffect, useState } from "react"
import { API } from 'aws-amplify';
import { HeaderEdicao } from "../../components/HeaderEdicao";
import { listVeiculos } from "../../graphql/queries"
import { deleteVeiculo as deleteVeiculoMutation } from "../../graphql/mutations"

export function Veiculos() {

    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        fetchVeiculos();
    }, [])

    async function fetchVeiculos() {
        const apiData = await API.graphql({ query: listVeiculos });
        setVeiculos(apiData.data.listVeiculos.items);
    }

    async function deleteVeiculo(idTmp) {
        console.log(idTmp)
        const newVeiculosArray = veiculos.filter(veiculo => veiculo.id !== idTmp)
        setVeiculos(newVeiculosArray)
        await API.graphql({ query: deleteVeiculoMutation, variables: { input: idTmp } })
        
    }

    return (
        <>
            <HeaderEdicao />
            <div id="lista_veiculos">
                <div className="quadro_infos">
                    {/* Aparecer somente para usuários comuns */}
                    <h4>Todos os veículos que você trouxer até nossa oficina aparecerão por aqui automaticamente</h4>

                    {/* Aparecer somente para admins */}
                    <a href="./add_veiculo/index.jsx" className="button">Adicionar um veículo</a>
                </div>
                {
                    veiculos.map(veiculo => (
                        <div>
                            <div key={veiculo.id || veiculo.name} className="quadros_veiculos" id="imagem_veiculos">
                                <span className="detalhe_quadro_veiculo_cima">{veiculo.modelo} <br />{veiculo.placa}</span>
                                <span className="detalhe_quadro_veiculo_baixo">Dono(a): Josival</span>  {/* Só deve aparecer se o usuário for adm */}
                            </div>
                            <button onClick={() => deleteVeiculo(veiculo)}>Deletar veiculo</button>
                            <button onClick={() => {
                                document.location.href = "./editar_veiculo/index.jsx/" + veiculo.id;
                            }}>Editar veiculo</button>
                        </div>
                    ))
                }
            </div>
            <div id="transitador"></div>
        </>
    )
}