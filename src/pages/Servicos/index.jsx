import { useEffect, useState } from "react"
import { API } from 'aws-amplify';
import { HeaderEdicao } from "../../components/HeaderEdicao";
import { listServicos } from "../../graphql/queries"

export function Servicos() {

    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        fetchServicos();
    }, [])

    async function fetchServicos() {
        const apiData = await API.graphql({ query: listServicos });
        setServicos(apiData.data.listServicos.items);
    }

    const status = ["", "andamento", "finalizado", "interrompido", "pagamento", "cancelado"];
    const frase_status = ["", "O serviço está em andamento", "O serviço foi finalizado", "O serviço foi interrompido", "Aguardando pagamento", "Este serviço foi cancelado"];

    return (
        <>
            <HeaderEdicao />
            <div id="lista_servicos">
                <div id="filtrador_servicos">
                    <a href="#" className="button" onClick={() => filtra_servicos(0)} id="bttn_todos_servicos">Todos</a>
                    <a href="#" className="button sv_finalizado" onClick={() => filtra_servicos(1)}>Finalizados</a>
                    <a href="#" className="button sv_andamento" onClick={() => filtra_servicos(2)}>Em andamento</a>
                    <a href="#" className="button sv_interrompido" onClick={() => filtra_servicos(3)}>Interrompidos</a>
                    <a href="#" className="button sv_pagamento" onClick={() => filtra_servicos(4)}>Aguardando pagamento</a>
                    <a href="#" className="button sv_cancelado" onClick={() => filtra_servicos(5)}>Cancelados</a>
                </div>

                <a href="./add_servico/index.jsx">
                    <div className="quadros_servicos bk_iniciar">
                        <span className="status_sv sv_iniciar"></span>

                        <div className="infos_servicos">
                            <br />
                            <h4>Inicie um novo serviço</h4>
                        </div>
                    </div>
                </a>

                {
                    servicos.map(servico => (
                        <div className={"ftl flt_" + status[servico.status]} key={servico.id || servico.name} onClick={() => {
                            document.location.href = "./editar_servico/index.jsx/" + servico.id;
                        }}>
                            <a href="#">
                                <div className={"quadros_servicos bk_" + status[servico.status]}>
                                    <span className={"status_sv sv_" + status[servico.status]}></span>

                                    <div className="infos_servicos">
                                        <h3 className="placa">{servico.placa}</h3>
                                        Status: {frase_status[servico.status]}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
            <div id="transitador"></div>
        </>
    )

    function filtra_servicos(alvo) {
        let alvos = ["ftl", "flt_finalizado", "flt_andamento", "flt_interrompido", "flt_pagamento", "flt_cancelado"];

        if (alvo !== 0)
            document.getElementById("bttn_todos_servicos").style.opacity = "100";
        else
            document.getElementById("bttn_todos_servicos").style.opacity = "0";

        alvos.forEach(alvo => {
            let esconder = document.getElementsByClassName(alvo);

            for (let i = 0; i < esconder.length; i++) {
                esconder[i].style.display = "None";
            }
        });

        let mostrar = document.getElementsByClassName(alvos[alvo]);

        for (let i = 0; i < mostrar.length; i++) {
            mostrar[i].style.display = "Block";
        }
    }

}