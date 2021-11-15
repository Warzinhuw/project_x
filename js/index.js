var timeout_transicao;

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
        document.getElementById("background_login").style.animation = "muda_altura_1 .2s";

        timeout_transicao = setTimeout(() => { document.getElementById("background_login").style.height = "440px"; }, 200);
    }else{
        document.getElementById("prancheta_login").style.display = "Block";
        document.getElementById("prancheta_cadastro").style.display = "None";

        document.getElementById("background_login").style.animation = "muda_altura_2 .2s";

        timeout_transicao = setTimeout(() => { document.getElementById("background_login").style.height = "350px"; }, 200);
    }
}