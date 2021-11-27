import { Servicos } from "../../paginas/Servicos";

const servicos = [{ placa: "ABC-1234", veiculo: "Ford Ka", trabalho: "Troca de óleo", status: "Em andamento" },
{ placa: "ABC-5497", veiculo: "Ford Ka", trabalho: "Troca de óleo", status: "Em andamento" }]

export function StatusServicos() {
    return (
        <>
            {/* {
                servicos.map(element => {
                    return (
                        <Servicos key={element.placa} servico={element} />
                    )
                })
            } */}
        </>
    )
}