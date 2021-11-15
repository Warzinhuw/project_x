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