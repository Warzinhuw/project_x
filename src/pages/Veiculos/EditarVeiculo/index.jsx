export function EditarVeiculo() {
    return (
        <>
            <a href="#" id="botao_cancelar">Remover veículo</a> {/*<!-- Aparecer somente quando estiver editando um veículo já cadastrado -->*/}
            <div id="quadro_edicao_dados">
                <div id="grupo_inputs">
                    <input type="text" class="input_edit" placeholder="Placa do veículo" required />

                    <input type="text" class="input_edit" placeholder="Modelo" required />

                    <input type="text" class="input_edit" placeholder="Fabricante" required />
                </div>
                <div id="grupo_selects">
                    <h1>Proprietário</h1>
                    <select>
                        <option value="id_josival">Josival</option>
                        <option value="id_gertudres">Gertudres</option>
                    </select>
                </div>
                <button id="button_att">Atualizar dados</button> {/*<!-- Aparecer somente quando estiver editando um veículo já cadastrado -->*/}
                <button id="button_add" onClick={teste()}>Adicionar veículo</button> {/*<!-- Aparecer somente quando estiver criando um veículo -->*/}
            </div>
        </>
    )
}

function teste(){
    
}