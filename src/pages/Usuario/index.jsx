import { useEffect, useRef, useState } from "react";
import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header";
import { QuadrosUser } from "../../components/QuadrosUser";
import Auth from "@aws-amplify/auth"

const initialFormState = { 'nome': '', 'email': '', 'telefone': '', 'nascimento' : '', 'senha' : '' }

export function Usuario() {

    const user = useRef()
    useEffect(() => {
        Auth.currentAuthenticatedUser({
        }).then(usuario => {
            user.current = usuario.attributes
            console.log(usuario.attributes)
        });
    }) 
    

    const [formData, setFormData] = useState(initialFormState)

    return (
        <>
            <Header />
            <QuadrosUser />
            <div id="transitador"></div>
            <Footer />

            <div id="perfil_usuario">
                <div id="quadro_edicao_dados">
                    <div id="grupo_inputs_edit_user">
                        <input onChange={e => setFormData({ ...formData, 'nome': e.target.value })} value={user.nome} type="text" className="input_edit" placeholder="Nome" required />
    
                        <input onChange={e => setFormData({ ...formData, 'email': e.target.value })} value={user.email} type="text" className="input_edit" placeholder="Email" required />
    
                        <input onChange={e => setFormData({ ...formData, 'endereco': e.target.value })} value={user.endereco} type="text" className="input_edit" placeholder="Endereço" required />
    
                        <input onChange={e => setFormData({ ...formData, 'nascimento': e.target.value })} value={user.nascimento} type="date" className="input_edit" placeholder="Nascimento" required />

                        <input onChange={e => setFormData({ ...formData, 'telefone': e.target.value })} value={user.telefone} type="tel" className="input_edit" placeholder="Telefone" required />
                    </div>

                    <button id="button_att" className="button_edit_user">Atualizar dados</button>
                </div>
            </div>
        </>
    )
}