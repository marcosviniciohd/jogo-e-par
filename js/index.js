window.addEventListener('load', function() {
    document.getElementById('btnEntrar').addEventListener('click', verificarLogin);

    function verificarLogin() {
        // Obtem o nome de usuário e senha do formulário
        var user = document.getElementById('txtUser').value;
        var pwd = document.getElementById('txtPwd').value;
        var vetUsuarios;

        // Verifica se foi informado usuário e senha no formulario
        if (user == '' || pwd == ''){
            alertWifi('Preencha todas as informações', false, 0, '', 30, '');
        } else {
            vetUsuarios = localStorage.getItem('vetUsuarios');
            // Situação 1: Ainda não existe nada cadastrado.
            if(!vetUsuarios){
                alertWifi('Ainda não há nenhum usuário cadastrado', false, 0, '', 30, '');
            } else {
                var achou = false;
                vetUsuarios = JSON.parse(vetUsuarios);
                for(i = 0; i < vetUsuarios.length; i++){
                    var usuario = JSON.parse(vetUsuarios[i]);
                    if(usuario.nome == user && usuario.senha == pwd){
                        achou = true;
                        break;
                    }
                }
                if (achou == true) {
                    alertWifi('Usuário encontrado!', false, 0, '', 30, '');
                } else {
                    alertWifi('Usuário não encontrado', false, 0, '', 30, '');
                }
            }
        }
    }
});