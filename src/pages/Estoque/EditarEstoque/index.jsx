import { useEffect, useState } from "react"
import { HeaderEdicao } from "../../../components/HeaderEdicao"
import { API } from 'aws-amplify';
import { getEstoque } from "../../../graphql/queries"
import { updateEstoque as updateEstoqueMutation, deleteEstoque as deleteEstoqueMutation } from "../../../graphql/mutations";
import { useNavigate } from "react-router-dom"

const initialFormState = { 'nome': '', 'quantidade': '' }

export function EditarEstoque() {

    const navigate = useNavigate();

    let url = window.location.href;
    let estoqueId = url.split("/")[6].replace("#", "")
    console.log(estoqueId);

    useEffect(() => {
        fetchEstoque();
    }, []);

    const [estoque, setEstoque] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    async function fetchEstoque() {
        const apiData = await API.graphql({ query: getEstoque, variables: { id: estoqueId } });
        const estoqueTmp = apiData.data.getEstoque
        setEstoque(apiData.data.getEstoque)
        setFormData({ ...formData, nome: estoqueTmp.nome, quantidade: estoqueTmp.quantidade }) //atualiza o form com os dados do objeto veículo
    }

    async function updateEstoque() {
        const estoqueUpdate = {
            id: estoque.id,
            _version: estoque._version,
            nome: formData.nome,
            quantidade: formData.quantidade
        }

        await API.graphql({ query: updateEstoqueMutation, variables: { input: estoqueUpdate } }).finally(setTimeout(function () {
            navigate(-1)
        }, 500))
    }

    async function deleteEstoque() {

        const estoqueDelete = {
            id: estoque.id,
            _version: estoque._version
        }

        await API.graphql({ query: deleteEstoqueMutation, variables: { input: estoqueDelete } }).finally(setTimeout(function () {
            navigate(-1)
        }, 500))
    }

    return (
        <>
            <HeaderEdicao />

            <div href="#" id="botao_cancelar" onClick={() => {
                deleteEstoque()
            }}>Excluir item</div>

            <div id="quadro_edicao_dados">
                <div id="grupo_inputs">
                    <input onChange={e => setFormData({ ...formData, 'nome': e.target.value })} value={formData.nome} type="text" className="input_edit" placeholder="Nome do item" required />

                    <input onChange={e => setFormData({ ...formData, 'quantidade': e.target.value })} value={formData.quantidade} type="text" className="input_edit" placeholder="Quantidade" required />
                </div>
                
                <button id="button_att" onClick={() => {
                    updateEstoque()
                }}>Atualizar dados</button>
            </div>
        </>
    )
}