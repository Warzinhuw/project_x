import { useEffect, useState } from "react"
import { HeaderEdicao } from "../../../components/HeaderEdicao"
import { API } from 'aws-amplify';
import { createEstoque as createEstoqueMutation } from "../../../graphql/mutations";

const initialFormState = { 'nome': '', 'quantidade': '' }

export function AddEstoque() {

    const [servicos, setEstoque] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    async function createEstoque() {
        if (!formData.nome || !formData.quantidade) return
        await API.graphql({ query: createEstoqueMutation, variables: { input: formData } })
        setEstoque([...servicos, formData])
        setFormData(initialFormState)
    }

    return (
        <>
            <HeaderEdicao />
            <div id="quadro_edicao_dados">
                <div id="grupo_inputs">
                    <input onChange={e => setFormData({ ...formData, 'nome': e.target.value })} value={formData.nome} type="text" class="input_edit" placeholder="Nome" required />

                    <input onChange={e => setFormData({ ...formData, 'quantidade': e.target.value })} value={formData.quantidade} type="text" class="input_edit" placeholder="Quantidade" required />
                </div>

                <button id="button_add" onClick={createEstoque}>Adicionar ao estoque</button>
            </div>
        </>
    )
}