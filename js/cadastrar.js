window.addEventListener('load', function(){
    this.document.getElementById('btnCadastrar').addEventListener('click', cadastrarUsuario);

    function cadastrarUsuario(){
        const user = document.getElementById('txtUser').value;
        const pwd = document.getElementById('txtPwd').value;
        const checkPwd = document.getElementById('txtCheckPwd').value;

        if(user == "" || pwd == "" || checkPwd == ""){
            alertWifi('Preencha todas as informações', false, 7, '', 30, "");
        } else {
            if(pwd == checkPwd){
                var vetUsuarios = localStorage.getItem('vetUsuarios');
                var usuarioNovo = {nome: user, senha: pwd};
                //Situação 1: Não existe usuário
                if(!vetUsuarios){
                    vetUsuarios = []; 
                    vetUsuarios.push(JSON.stringify(usuarioNovo));
                    localStorage.setItem('vetUsuarios', JSON.stringify(vetUsuarios));
                }
                // Situação 2: Existe pelo menos 1 usuario 
                else {
                    vetUsuarios = JSON.parse(vetUsuarios);
                    vetUsuarios.push(JSON.stringify(usuarioNovo));
                    localStorage.setItem('vetUsuarios', JSON.stringify(vetUsuarios));
                }
                alertWifi('Cadastro com sucesso!', false, 7, '', 30, "");   
            } else alertWifi('Senha e confirmar senha diferente!', false, 0, '', 30, '');

        } 
    }
});