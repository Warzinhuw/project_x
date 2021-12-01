import { useState } from "react"
import { HeaderEdicao } from "../../../components/HeaderEdicao"
import { API } from 'aws-amplify';
import { createServico as createServicoMutation } from "../../../graphql/mutations";

const initialFormState = { 'placa': '', 'servico_realizado': '', 'status': '', 'data_inicio': '', 'custo': '' }

export function AddServico() {

    const [servicos, setServicos] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    async function createServico() {
        if (!formData.placa || !formData.servico_realizado || !formData.data_inicio || !formData.custo) return
        formData.status = 1;
        
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

                    <input onChange={e => setFormData({ ...formData, 'servico_realizado': e.target.value})} value={formData.servico} type="text" className="input_edit" placeholder="Serviço realizado" required />

                    <input onChange={e => setFormData({ ...formData, 'data_inicio': e.target.value})} value={formData.inicio} type="text" className="input_edit" placeholder="Data de inicio" required />

                    <input onChange={e => setFormData({ ...formData, 'custo': e.target.value})} value={formData.custo} type="text" className="input_edit" placeholder="Custo do serviço" required />
                </div>

                <div id="grupo_selects">
                    <h1>Status do serviço</h1>
                    <select onChange={e => setFormData({ ...formData, 'status': e.target.value})}>
                        <option value="1">Em andamento</option>
                        <option value="2">Concluído</option>
                        <option value="3">Interromper</option>
                        <option value="4">Aguardando pagamento</option>
                    </select>
                </div>

                <button id="button_add" onClick={createServico}>Iniciar Serviço</button>
            </div>
        </>
    )
}