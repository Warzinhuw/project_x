function prancheta_login(){
    
    alvo = document.getElementById("form_login");

    if(alvo.style.display !== "block")
        document.getElementById("form_login").style.display = "Block";
    else
        document.getElementById("form_login").style.display = "None";
}