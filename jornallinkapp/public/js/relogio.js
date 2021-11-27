(function(){
        
    let data = new Date();
    data_final = data.toLocaleDateString("pt-br", {timeZone: 'America/Sao_Paulo'});

    document.getElementById("data_dia").innerHTML = data_final;
    atualizaRelogio_user();

    function atualizaRelogio_user(){
        momentoAtual = new Date();

        horaImprimivel = momentoAtual.toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_Paulo'});
        document.getElementById("relogio").innerHTML = horaImprimivel;
        setTimeout(() => {atualizaRelogio_user(); }, 1000);
    }
})();