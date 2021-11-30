import { useEffect, useState } from "react"
import { HeaderEdicao } from "../../../components/HeaderEdicao"
import { API } from 'aws-amplify';
import { getVeiculo, listVeiculos } from "../../../graphql/queries"
import { deleteVeiculo as deleteVeiculoMutation, updateVeiculo as updateVeiculoMutation } from "../../../graphql/mutations";

const initialFormState = { 'placa': '', 'modelo': '', 'fabricante': '' }

export function EditarVeiculo() {

    let url = window.location.href;
    let veiculoId = url.split("/")[6].replace("#", "")

    useEffect(() => {
        fetchVeiculo();
    }, []);

    const [veiculo, setVeiculo] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    async function fetchVeiculo() {
        const apiData = await API.graphql({ query: getVeiculo, variables: { id: veiculoId } });
        setVeiculo(apiData.data.getVeiculo)
        console.log(apiData.data.getVeiculo)
    } 

    async function deleteVeiculo(id) {
        console.log(id)
        await API.graphql({ query: deleteVeiculoMutation, variables: { input:  id  } })
    }

    return (
        <>
            <HeaderEdicao />
            <a href="#" onClick={() => deleteVeiculo(veiculo)} id="botao_cancelar">Remover veículo</a> {/*<!-- Aparecer somente quando estiver editando um veículo já cadastrado -->*/}
            <div id="quadro_edicao_dados">
                <div id="grupo_inputs">
                    <input onChange={e => setFormData({ ...formData, 'placa': e.target.value })} value={veiculo.placa} type="text" className="input_edit" placeholder="Placa do veículo" required />

                    <input onChange={e => setFormData({ ...formData, 'modelo': e.target.value })} value={veiculo.modelo} type="text" className="input_edit" placeholder="Modelo" required />

                    <input onChange={e => setFormData({ ...formData, 'fabricante': e.target.value })} value={veiculo.fabricante} type="text" className="input_edit" placeholder="Fabricante" required />
                </div>
                <div id="grupo_selects">
                    <h1>Proprietário</h1>
                    <select>
                        <option value="id_josival">Josival</option>
                        <option value="id_gertudres">Gertudres</option>
                    </select>
                </div>

                <button id="button_att">Atualizar dados</button>
            </div>
        </>
    )
}