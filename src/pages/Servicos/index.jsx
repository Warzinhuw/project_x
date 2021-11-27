export default function Servicos(props){
    return(
        <a href="#" className="ftl flt_finalizado">
            <div className="quadros_servicos bk_finalizado">
                <span className="status_sv sv_finalizado"><i className="fa fa-check fa-3x" aria-hidden="true"></i></span>

                {/* Automatizado */}
                <div className="infos_servicos">
                    <h1 className="placa">{props.servico.placa}</h1>
                    <h4>Veículo: {props.servico.veiculo}</h4>
                    <h4>Trabalho: {props.servico.trabalho}</h4>
                    <h4>Status: {props.servico.status}</h4>
                </div>

                {/* Exemplos */}
            </div>
        </a>
    )
}