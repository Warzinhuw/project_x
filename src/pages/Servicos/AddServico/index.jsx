import { useEffect, useState } from "react"
import { HeaderEdicao } from "../../../components/HeaderEdicao"
import { API } from 'aws-amplify';
import { createServico as createServicoMutation } from "../../../graphql/mutations";

const initialFormState = { 'placa': '', 'servico': '', 'inicio': '', 'termino': '' }

export function AddServico() {

    const [servicos, setServicos] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    async function createServico() {
        if (!formData.placa || !formData.servico || !formData.inicio || !formData.termino) return
        await API.graphql({ query: createServicoMutation, variables: { input: formData } })
        setServicos([...servicos, formData])
        setFormData(initialFormState)
    }

    return (
        <>
            <HeaderEdicao />
            <div id="quadro_edicao_dados">
                <div id="grupo_inputs">
                    <input onChange={e => setFormData({ ...formData, 'placa': e.target.value })} type="text" className="input_edit" placeholder="Placa do veículo" value={formData.placa} required />

                    <input onChange={e => setFormData({ ...formData, 'servico': e.target.value})} value={formData.servico} type="text" className="input_edit" placeholder="Serviço realizado" required />

                    <input onChange={e => setFormData({ ...formData, 'inicio': e.target.value})} value={formData.inicio} type="text" className="input_edit" placeholder="Data de término" required />

                    <input onChange={e => setFormData({ ...formData, 'termino': e.target.value})} value={formData.termino} type="text" className="input_edit" placeholder="Custo do serviço" required />
                </div>

                <div id="grupo_selects">
                    <h1>Status do serviço</h1>
                    <select>
                        <option value="concluido">Concluído</option>
                        <option value="andamento">Em andamento</option>
                        <option value="interrompido">Interromper</option>
                        <option value="aguardando">Aguardando pagamento</option>
                    </select>
                </div>

                <button id="button_add" onClick={createServico}>Iniciar Serviço</button> {/*<!-- Aparecer somente quando estiver criando um veículo -->*/}
            </div>
        </>
    )
}