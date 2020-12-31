const card = document.querySelector(".card");

function login(){

    let email = $('#email').val();
    let password = $('#password').val();

    clearErrors();

    if(email == ''){
        $('#email').effect('shake','slow');
        $('#error-email').text("O email não pode estar vazio!!");
    }else if(password == ''){
        $('#password').effect('shake','slow');
        $('#error-password').text("A senha não pode estar vazia!!");
    }else if(email == 'email@email.com' && password == '1234'){
        alert('login bem sucedido!!')
    }else{
        $('.card').effect('shake','slow');
        $('#error-login').text("Email ou senha Incorreta!!");
    }   
}


function clearErrors(){
    $('#error-email').text('');
    $('#error-password').text('');
    $('#error-login').text('');
}