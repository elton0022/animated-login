const card = document.querySelector(".card");

function login(){

    let email = $('#email').val();
    let password = $('#password').val();

    if(email == ''){
        $("#email").effect("shake","slow");
    }else if(password == ''){
        $("#password").effect("shake","slow");
    }else if(email == 'maria@email.com' && password == '1234'){
        alert('login bem sucedido!!')
    }else{
        $(".card").effect("shake", "slow");
    }   
}

function t(){

    card.addEventListener("mouseenter", (e) => {
       
        card.style.transform = "translateZ(150px)";
       
    });
    
}