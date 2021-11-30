import { useEffect, useState } from "react"
import { HeaderEdicao } from "../../../components/HeaderEdicao"
import { API } from 'aws-amplify';
import { createVeiculo as createVeiculoMutation } from "../../../graphql/mutations";

const initialFormState = { 'placa': '', 'modelo': '', 'fabricante': '' }

export function AddVeiculo() {

    const [veiculos, setVeiculos] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    async function createVeiculo() {
        if (!formData.placa || !formData.modelo || !formData.fabricante) return
        await API.graphql({ query: createVeiculoMutation, variables: { input: formData } })
        setVeiculos([...veiculos, formData])
        setFormData(initialFormState)
    }

    return (
        <>
            <HeaderEdicao />
            <div id="quadro_edicao_dados">
                <div id="grupo_inputs">
                    <input onChange={e => setFormData({ ...formData, 'placa': e.target.value })} value={formData.placa} type="text" className="input_edit" placeholder="Placa do veículo" required />

                    <input onChange={e => setFormData({ ...formData, 'modelo': e.target.value})} value={formData.modelo} type="text" className="input_edit" placeholder="Modelo" required />

                    <input onChange={e => setFormData({ ...formData, 'fabricante': e.target.value})} value={formData.fabricante} type="text" className="input_edit" placeholder="Fabricante" required />
                </div>
                <div id="grupo_selects">
                    <h1>Proprietário</h1>
                    <select>
                        <option value="id_josival">Josival</option>
                        <option value="id_gertudres">Gertudres</option>
                    </select>
                </div>
                <button id="button_add" onClick={createVeiculo}>Adicionar veículo</button> {/*<!-- Aparecer somente quando estiver criando um veículo -->*/}
            </div>
        </>
    )
}