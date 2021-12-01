import { useEffect, useState } from "react"
import { API } from 'aws-amplify';
import { HeaderEdicao } from "../../components/HeaderEdicao";
import { listEstoques } from "../../graphql/queries"

export default function Estoque(props){

    const [estoque, setEstoque] = useState([]);

    useEffect(() => {
        fetchEstoque();
    }, [])

    async function fetchEstoque() {
        const apiData = await API.graphql({ query: listEstoques });
        setEstoque(apiData.data.listEstoques.items);
        console.log(apiData.data.listEstoques.items)
    }
    
    return (
        <>
        <HeaderEdicao />
        <div id="lista_pecas">
            <div id="filtro_pecas">
                <input type="text" onKeyUp={filtra_pecas} id="barra_pesquisa" placeholder="Digite para pesquisar..."/>
            </div>
            
            <a href="./add_estoque/index.jsx">
                <div className="quadros_servicos bk_add_peca">
                    <span className="status_sv sv_iniciar"><i className="fa fa-plus-circle fa-4x" aria-hidden="true"></i></span>

                    <div className="infos_servicos">
                        <br/>
                        <h4>Adicionar uma nova peça</h4>
                    </div>
                </div>
            </a>
            {
                estoque.map(item_estoque => (
                    
                    <div className={"all "+ (item_estoque.nome).toLocaleLowerCase()} key={item_estoque.id || item_estoque.nome} onClick={() => {
                        document.location.href = "./editar_estoque/index.jsx/" + item_estoque.id;
                    }}>
                        <a href="#">
                            <div className="quadros_pecas bk_tools">
                                <span className="peca_sv sv_peca"><h2 className="placa">{item_estoque.nome}</h2></span>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>

        <div id="transitador"></div>
    </>
    )
    
    function filtra_pecas(){

        let alvo_filtragem = document.getElementById("barra_pesquisa").value;
        let esconder = document.getElementsByClassName("all");

        alvo_filtragem = alvo_filtragem.toLocaleLowerCase();

        if(alvo_filtragem.length === 0)
            alvo_filtragem = "all";

        for(let i = 0; i < esconder.length; i++)
            esconder[i].style.display = "None";

        let mostrar = document.getElementsByClassName(alvo_filtragem);
    
        for(let i = 0; i < mostrar.length; i++)
            mostrar[i].style.display = "Block";
    }
}