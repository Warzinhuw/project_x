var timeout_transicao;

$(document).ready(function(){
    $("#click_login").click(() => {
        $("#form_login").fadeToggle();
    });

    $("#imagem_configura").click(() => {
        $("#perfil_usuario").fadeToggle();
        $("#config_perfil").fadeIn();
    });

    $("#config_perfil").click(() => {
        $("#perfil_usuario").fadeToggle();
        $("#config_perfil").fadeOut();
    });
});

function prancheta_login(){
    
    alvo = document.getElementById("form_login");

    if(typeof timeout_transicao !== "undefined")
        clearTimeout(timeout_transicao);
        
    if(alvo.style.display !== "block"){
        document.getElementById("form_login").style.animation = "aparece_bloco .2s";
        document.getElementById("form_login").style.display = "Block";
    }else{
        document.getElementById("form_login").style.animation = "esconde_bloco .2s";
        
        timeout_transicao = setTimeout(() => { document.getElementById("form_login").style.display = "None"; }, 200);
    }
}

function cadastro_user(alvo){
    // 0 -> Login, 1 -> Cadastro
    if(typeof timeout_transicao !== "undefined")
        clearTimeout(timeout_transicao);

    if(alvo){
        document.getElementById("prancheta_cadastro").style.display = "Block";
        document.getElementById("prancheta_login").style.display = "None";
        // document.getElementById("background_login").style.animation = "muda_altura_1 .2s";

        // timeout_transicao = setTimeout(() => { document.getElementById("background_login").style.height = "400px"; }, 200);
    }else{
        document.getElementById("prancheta_login").style.display = "Block";
        document.getElementById("prancheta_cadastro").style.display = "None";

        // document.getElementById("background_login").style.animation = "muda_altura_2 .2s";

        // timeout_transicao = setTimeout(() => { document.getElementById("background_login").style.height = "300px"; }, 200);
    }
}

function troca_tela(caso){
    const urls = ["usuario.html", "veiculos.html", "servicos.html", "clientes.html", "estoque.html"];
    
    document.getElementById("transitador").style.display = "None";
    document.getElementById("transitador").style.display = "transita_telas .5s !important";
    document.getElementById("transitador").style.display = "Block";

    setTimeout(() => {
        document.getElementById("transitador").style.animation = "";
        document.getElementById("transitador").style.width = "100%";
        
        document.location.href = urls[caso];
    }, 500);
}

function filtra_servicos(alvo){
    let alvos = ["ftl", "flt_finalizado", "flt_andamento", "flt_interrompido", "flt_pagamento", "flt_cancelado"];

    if(alvo !== 0)
        document.getElementById("bttn_todos_servicos").style.opacity = "100";
    else
        document.getElementById("bttn_todos_servicos").style.opacity = "0";

    alvos.forEach(alvo => {
        esconder = document.getElementsByClassName(alvo);

        for(let i = 0; i < esconder.length; i++){
            esconder[i].style.display = "None";
        }
    });

    mostrar = document.getElementsByClassName(alvos[alvo]);

    for(let i = 0; i < mostrar.length; i++){
        mostrar[i].style.display = "Block";
    }
}

function filtra_pecas(){

    let alvo_filtragem = document.getElementById("barra_pesquisa").value;
    esconder = document.getElementsByClassName("all");

    if(alvo_filtragem.length === 0)
        alvo_filtragem = "all";

    for(let i = 0; i < esconder.length; i++){
        esconder[i].style.display = "None";
    }

    mostrar = document.getElementsByClassName(alvo_filtragem);

    for(let i = 0; i < mostrar.length; i++){
        mostrar[i].style.display = "Block";
    }
}