function prancheta_login(){
    
    alvo = document.getElementById("form_login");

    if(alvo.style.display !== "block"){
        document.getElementById("form_login").style.animation = "aparece_bloco .2s";
        document.getElementById("form_login").style.display = "Block";
    }else{
        document.getElementById("form_login").style.animation = "esconde_bloco .2s";
        
        setTimeout(() => { document.getElementById("form_login").style.display = "None"; }, 200);
    }
}

function cadastro_user(alvo){
    // 0 -> Login, 1 -> Cadastro

    if(alvo){
        document.getElementById("prancheta_cadastro").style.animation = "aparece_bloco .2s";
        document.getElementById("prancheta_cadastro").style.display = "Block";

        document.getElementById("prancheta_login").style.animation = "esconde_bloco .2s";
        
        setTimeout(() => { document.getElementById("prancheta_login").style.display = "None"; }, 200);
    }else{
        document.getElementById("prancheta_login").style.animation = "aparece_bloco .2s";
        document.getElementById("prancheta_login").style.display = "Block";

        document.getElementById("prancheta_cadastro").style.animation = "esconde_bloco .2s";
        
        setTimeout(() => { document.getElementById("prancheta_cadastro").style.display = "None"; }, 200);
    }
}