export function EdicaoUser(){
    return(
        <>
        <div id="perfil_usuario">
            <div id="quadro_edicao_dados">
                <div id="grupo_inputs_edit_user">
                    <input type="text" className="input_edit" placeholder="Nome" required/>
        
                    <input type="text" className="input_edit" placeholder="Email" required/>
        
                    <input type="text" className="input_edit" placeholder="Endereço" required/>
        
                    <input type="date" className="input_edit" placeholder="Nascimento" required/>

                    <input type="tel" className="input_edit" placeholder="Telefone" required/>
                </div>

                <button id="button_att" className="button_edit_user">Atualizar dados</button>
            </div>
        </div>
        </>
    )
}