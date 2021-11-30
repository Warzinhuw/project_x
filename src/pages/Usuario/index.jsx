import API from "@aws-amplify/api";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header";
import { QuadrosUser } from "../../components/QuadrosUser";
import { getCliente } from "../../graphql/queries";

export default function Usuario() {

    const initialFormState = { 'nome': '', 'email': '', 'telefone': '', 'nascimento' : '', 'senha' : '' }

    useEffect(() => {
        fetchCliente();
    }, []);

    const [cliente, setCliente] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    async function fetchCliente() {
        const apiData = await API.graphql({ query: getCliente, variables: { id: { cliente } } });
        setCliente(apiData.data.getCliente)
    }

    return (
        <>
            <Header />
            <QuadrosUser />
            <div id="transitador"></div>
            <Footer />

            <div id="perfil_usuario">
                <div id="quadro_edicao_dados">
                    <div id="grupo_inputs_edit_user">
                        <input onChange={e => setFormData({ ...formData, 'nome': e.target.value })} value={cliente.nome} type="text" class="input_edit" placeholder="Nome" required />
    
                        <input onChange={e => setFormData({ ...formData, 'email': e.target.value })} value={cliente.email} type="text" class="input_edit" placeholder="Email" required />
    
                        <input onChange={e => setFormData({ ...formData, 'endereco': e.target.value })} value={cliente.endereco} type="text" class="input_edit" placeholder="Endereço" required />
    
                        <input onChange={e => setFormData({ ...formData, 'nascimento': e.target.value })} value={cliente.nascimento} type="date" class="input_edit" placeholder="Nascimento" required />

                        <input onChange={e => setFormData({ ...formData, 'telefone': e.target.value })} value={cliente.telefone} type="tel" class="input_edit" placeholder="Telefone" required />
                    </div>

                    <button id="button_att" class="button_edit_user">Atualizar dados</button>
                </div>
            </div>
        </>
    )
}