import { useEffect, useState } from "react"
import { HeaderEdicao } from "../../../components/HeaderEdicao"
import { API } from 'aws-amplify';
import { getEstoque, listEstoque } from "../../../graphql/queries"
import { updateEstoque as updateEstoqueMutation } from "../../../graphql/mutations";

const initialFormState = { 'nome': '', 'quantidade': '' }

export function EditarEstoque() {

    let url = window.location.href;
    let estoqueId = url.split("/")[6].replace("#", "")

    useEffect(() => {
        fetchEstoque();
    }, []);

    const [estoque, setEstoque] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    async function fetchEstoque() {
        const apiData = await API.graphql({ query: getEstoque, variables: { id: { estoque } } });
        setEstoque(apiData.data.getEstoque)
        console.log(apiData.data.getEstoque)
    }

    return (
        <>
            <HeaderEdicao />
            <div id="quadro_edicao_dados">
                <div id="grupo_inputs">
                    <input onChange={e => setFormData({ ...formData, 'nome': e.target.value })} value={estoque.nome} type="text" className="input_edit" placeholder="Nome do item" required />

                    <input onChange={e => setFormData({ ...formData, 'quantidade': e.target.value })} value={estoque.quantidade} type="text" className="input_edit" placeholder="Quantidade" required />
                </div>
                
                <button id="button_att">Atualizar dados</button>
            </div>
        </>
    )
}