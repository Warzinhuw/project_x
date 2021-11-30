// import { StatusServicos } from "../../components/StatusServicos"
import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header";
import { QuadrosUser } from "../../components/QuadrosUser";

export default function Usuario() {

    useEffect(() => {
        fetchUsuario();
    }, []);

    const [usuario, setUsuario] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    async function fetchUsuario() {
        const apiData = await API.graphql({ query: getUsuario, variables: { id: { usuario } } });
        setUsuario(apiData.data.getUsuario)
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
                        <input onChange={e => setFormData({ ...formData, 'nome': e.target.value })} value={estoque.nome} type="text" class="input_edit" placeholder="Nome" required />
    
                        <input onChange={e => setFormData({ ...formData, 'email': e.target.value })} value={usuario.email} type="text" class="input_edit" placeholder="Email" required />
    
                        <input onChange={e => setFormData({ ...formData, 'endereco': e.target.value })} value={usuario.endereco} type="text" class="input_edit" placeholder="Endereço" required />
    
                        <input onChange={e => setFormData({ ...formData, 'nascimento': e.target.value })} value={usuario.nascimento} type="date" class="input_edit" placeholder="Nascimento" required />

                        <input onChange={e => setFormData({ ...formData, 'telefone': e.target.value })} value={usuario.telefone} type="tel" class="input_edit" placeholder="Telefone" required />
                    </div>

                    <button id="button_att" class="button_edit_user">Atualizar dados</button>
                </div>
            </div>
        </>
    )
}