import { useEffect, useState } from "react"
import { HeaderEdicao } from "../../../components/HeaderEdicao"
import { API } from 'aws-amplify';
import { getServico } from "../../../graphql/queries"
import { updateServico as updateServicoMutation } from "../../../graphql/mutations"
import { useNavigate } from "react-router-dom"

const initialFormState = { 'placa': '', 'servico_realizado': '', 'status': '', 'data_inicio': '', 'data_termino': '', 'custo': '' }

export function EditarServico() {

    const navigate = useNavigate();

    let url = window.location.href;
    let servicoId = url.split("/")[6].replace("#", "")

    const status = ["", "andamento", "finalizado", "interrompido", "pagamento"];

    useEffect(() => {
        fetchServico();
    }, []);

    const [servico, setServico] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    let dateNow = new Date()
    let dataFormatada = (dateNow.getFullYear()) + "-" + (dateNow.getMonth() + 1) + "-" + ("0" + dateNow.getDate()).substr(-2);

    async function fetchServico() {
        const apiData = await API.graphql({ query: getServico, variables: { id: servicoId } });
        const servicoTmp = apiData.data.getServico
        setServico(servicoTmp)
        setFormData({ ...formData, placa: servicoTmp.placa, status: servicoTmp.status, servico_realizado: servicoTmp.servico_realizado, data_inicio: servicoTmp.data_inicio, data_termino: dataFormatada, custo: servicoTmp.custo }) //atualiza o form com os dados do objeto veículo
    }

    async function deleteServico() {

        const servicoUpdate = {
            id: servico.id,
            _version: servico._version,
            placa: formData.placa,
            servico_realizado: formData.servico_realizado,
            status: 5,
            data_termino: formData.data_termino,
            custo: formData.custo
        }

        await API.graphql({ query: updateServicoMutation, variables: { input: servicoUpdate } }).finally(setTimeout(function () {
            navigate(-1)
        }, 500))
    }

    async function updateServico() {
        const servicoUpdate = {
            id: servico.id,
            _version: servico._version,
            placa: formData.placa,
            servico_realizado: formData.servico_realizado,
            status: parseInt(formData.status),
            data_termino: formData.data_termino,
            custo: formData.custo
        }
        await API.graphql({ query: updateServicoMutation, variables: { input: servicoUpdate } }).finally(setTimeout(function () {
            navigate(-1)
        }, 500))
    }
    return (
        <>
            <HeaderEdicao />

            <div href="#" id="botao_cancelar" onClick={() => {
                    deleteServico()
                }}>Cancelar Serviço</div>

            <div id="quadro_edicao_dados">
                <div id="grupo_inputs">
                    <input onChange={e => setFormData({ ...formData, placa: e.target.value })} type="text" className="input_edit" placeholder="Placa do veículo" value={formData.placa} readOnly />

                    <input onChange={e => setFormData({ ...formData, servico_realizado: e.target.value })} value={formData.servico_realizado} type="text" className="input_edit" placeholder="Serviço realizado" required />

                    <input onChange={e => setFormData({ ...formData, data_termino: e.target.value })} value={formData.data_termino} type="text" className="input_edit" placeholder="Data de término" required />

                    <input onChange={e => setFormData({ ...formData, custo: e.target.value })} value={formData.custo} type="text" className="input_edit" placeholder="Custo do serviço" required />
                </div>
                <button id="button_att" onClick={() => {
                    updateServico()
                }}>Atualizar dados</button>

                <div id="grupo_selects">
                    <h1>Status do serviço</h1>
                    <select id="opcoes_status" onChange={e => setFormData({ ...formData, 'status': e.target.value })}>
                        <option value="1">Em andamento</option>
                        <option value="2">Concluído</option>
                        <option value="3">Interromper</option>
                        <option value="4">Aguardando pagamento</option>
                    </select>
                </div>
            </div>
        </>
    )

    function teste() {
        let daySelect = document.getElementById('opcoes_status')
        daySelect.options[daySelect.options.length] = new Option('Text 1', 'Value1')
    }
}