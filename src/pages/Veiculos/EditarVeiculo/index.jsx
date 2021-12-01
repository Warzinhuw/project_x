import { useEffect, useState } from "react"
import { HeaderEdicao } from "../../../components/HeaderEdicao"
import { API } from 'aws-amplify';
import { getVeiculo, listVeiculos } from "../../../graphql/queries"
import { updateVeiculo as updateVeiculoMutation } from "../../../graphql/mutations"
import { useNavigate } from "react-router-dom"

const initialFormState = { 'placa': '', 'modelo': '', 'fabricante': '' }

export function EditarVeiculo() {

    const navigate = useNavigate();

    let url = window.location.href;
    let veiculoId = url.split("/")[6].replace("#", "")

    useEffect(() => {
        fetchVeiculo();
    }, []);

    const [veiculo, setVeiculo] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    async function fetchVeiculo() {
        const apiData = await API.graphql({ query: getVeiculo, variables: { id: veiculoId } });
        const veiculoTmp = apiData.data.getVeiculo
        setVeiculo(veiculoTmp)
        setFormData({ ...formData, placa: veiculoTmp.placa, modelo: veiculoTmp.modelo, fabricante: veiculoTmp.fabricante }) //atualiza o form com os dados do objeto veículo
    }

    async function updateVeiculo() {
        const veiculoUpdate = {
            id: veiculo.id,
            _version: veiculo._version,
            placa: formData.placa,
            modelo: formData.modelo,
            fabricante: formData.fabricante
        }

        await API.graphql({ query: updateVeiculoMutation, variables: { input: veiculoUpdate } }).finally(setTimeout(function () {
            navigate(-1)
        }, 500))
    }
    
    return (
        <>
            <HeaderEdicao />
            <div id="quadro_edicao_dados">
                <div id="grupo_inputs">
                    <input onChange={e => setFormData({ ...formData, placa: e.target.value })} value={formData.placa} type="text" className="input_edit" placeholder="Placa do veículo" required />

                    <input onChange={e => setFormData({ ...formData, modelo: e.target.value })} value={formData.modelo} type="text" className="input_edit" placeholder="Modelo" required />

                    <input onChange={e => setFormData({ ...formData, fabricante: e.target.value })} value={formData.fabricante} type="text" className="input_edit" placeholder="Fabricante" required />
                </div>
                <div id="grupo_selects">
                    <h1>Proprietário</h1>
                    <select>
                        <option value="id_josival">Josival</option>
                        <option value="id_gertudres">Gertudres</option>
                    </select>
                </div>

                <button id="button_att" onClick={() => {
                    updateVeiculo()
                }}>Atualizar dados</button>
            </div>
        </>
    )
}