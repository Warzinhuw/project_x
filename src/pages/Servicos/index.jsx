import { useEffect, useState } from "react"
import { API } from 'aws-amplify';
import { HeaderEdicao } from "../../components/HeaderEdicao";
import { listServicos } from "../../graphql/queries"
import { deleteServico as deleteServicoMutation } from "../../graphql/mutations"

export function Servicos() {

    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        fetchServicos();
    }, [])

    async function fetchServicos() {
        const apiData = await API.graphql({ query: listServicos });
        setServicos(apiData.data.listServicos.items);
    }

    async function deleteServico(idTmp) {
        const newServicosArray = servicos.filter(servico => servico.id !== idTmp)
        setServicos(newServicosArray)
        await API.graphql({ query: deleteServicoMutation, variables: { input: idTmp } })
        
    }

    return (
        <>
            <HeaderEdicao />
            <div id="lista_servicos">

                <div id="filtrador_servicos">
                    <a href="#" class="button" onclick="filtra_servicos(0)" id="bttn_todos_servicos">Todos</a>
                    <a href="#" class="button sv_finalizado" onclick="filtra_servicos(1)">Finalizados</a>
                    <a href="#" class="button sv_andamento" onclick="filtra_servicos(2)">Em andamento</a>
                    <a href="#" class="button sv_interrompido" onclick="filtra_servicos(3)">Interrompidos</a>
                    <a href="#" class="button sv_pagamento" onclick="filtra_servicos(4)">Aguardando pagamento</a>
                    <a href="#" class="button sv_cancelado" onclick="filtra_servicos(5)">Cancelados</a>
                </div>

                <a href="./adicionar_servico/index.jsx">
                    <div className="quadros_servicos bk_iniciar">
                        <span className="status_sv sv_iniciar"><i className="fa fa-plus-circle fa-4x" aria-hidden="true"></i></span>

                        <div className="infos_servicos">
                            <br/>
                            <h4>Inicie um novo serviço</h4>
                        </div>
                    </div>
                </a>

                {
                    servicos.map(servico => (
                        <div>
                            <div key={servico.id || servico.name} className="quadros_servicos bk_cancelado">
                                <span className="status_sv sv_cancelado"><i className="fa fa-ban fa-3x" aria-hidden="true"></i></span>

                                <div className="infos_servicos">
                                    <h1 className="placa">{servico.placa}</h1>
                                    <h4>Status: Este serviço foi cancelado</h4>
                                </div>
                            </div>
                            
                            <button onClick={() => deleteServico(servico)}>Cancelar o servico</button>
                            <button onClick={() => {
                                document.location.href = "./editar_servico/index.jsx/" + servico.id;
                            }}>Editar Servico</button>
                        </div>
                    ))
                }
            </div>
            <div id="transitador"></div>
        </>
    )
}