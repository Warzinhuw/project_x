import { useState, useEffect } from "react"
import { HeaderEdicao } from "../../../components/HeaderEdicao"
import { API } from 'aws-amplify';
import { getCliente, listClientes } from "../../../graphql/queries"
import { updateCliente as updateClienteMutation } from "../../../graphql/mutations";

const initialFormState = { 'nome': '', 'quantidade': '' }

export function EditarClientes() {

    let url = window.location.href;
    let clienteId = url.split("/")[6].replace("#", "")

    useEffect(() => {
        fetchCliente();
    }, []);

    const [cliente, setCliente] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    async function fetchCliente() {
        const apiData = await API.graphql({ query: getCliente, variables: { id: clienteId } });
        setCliente(apiData.data.getCliente)
    }

    return (
        <>
            <HeaderEdicao />
            <div id="quadro_edicao_dados">
                <div id="grupo_inputs">
                    <input onChange={e => setFormData({ ...formData, 'nome': e.target.value })} value={cliente.nome} type="text" class="input_edit" placeholder="Nome" required />

                    <input onChange={e => setFormData({ ...formData, 'email': e.target.value })} value={cliente.email} type="text" class="input_edit" placeholder="Email" required />

                    <input onChange={e => setFormData({ ...formData, 'endereco': e.target.value })} value={cliente.endereco} type="text" class="input_edit" placeholder="Endereço" required />

                    <input onChange={e => setFormData({ ...formData, 'nascimento': e.target.value })} value={cliente.nascimento} type="date" class="input_edit" placeholder="Nascimento" required />

                    <input onChange={e => setFormData({ ...formData, 'telefone': e.target.value })} value={cliente.telefone} type="text" class="input_edit" placeholder="Telefone" required />
                </div>

                <button id="button_add">Atualizar os dados</button>
            </div>
        </>
    )
}