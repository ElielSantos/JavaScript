//Necessario declarar a Classe(s) de CSS no lime survey (cpf),(rg),(phone) 
=============================================================================================

$(document).ready(function() {
    console.log("CPF OK!");
    //    var input = $(".cpf input");
    var input = document.getElementById($(".cpf input").attr("id"));
    
    input.addEventListener('input', () => {
        let cpf = input.value.replace(/\D/g, ''); // Remove tudo que não é número
        input.value = formatCPF(cpf);
        if (cpf.length === 11 && validateCPF(cpf)) {
            input.setCustomValidity('');
        } else {
            input.setCustomValidity('CPF inválido!');
        }
    });

    function formatCPF(cpf) {
        // Adiciona os pontos e o hífen no formato desejado
        let formatted = '';
        for (let i = 0; i < cpf.length; i++) {
            if (i === 3 || i === 6) {
                formatted += '.';
            } else if (i === 9) {
                formatted += '-';
            }
            formatted += cpf[i];
        }
        return formatted;
    }

    function validateCPF(cpf) {
    // Remove todos os caracteres não numéricos do CPF
    cpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) return false;

    // Verifica se todos os caracteres do CPF são números
    if (!/^\d+$/.test(cpf)) return false;

    // Se passou por todas as validações, o CPF é considerado válido
    return true;
}
});

=============================================================================================
    
$(document).ready(function() {
    console.log("PHONE OK!");

var input = $(".phone input");

//var input = document.getElementById($(".phone input").attr("id"));

input.addEventListener('input', () => {
    let inputValue = input.value.replace(/\D/g, ''); // Remove tudo que não é número
    let formattedValue = '';

    // Verifica se o telefone está no formato esperado
    if (inputValue.length >= 2) {
        // Formata os dois primeiros dígitos do número em parênteses
        formattedValue = `(${inputValue.substring(0, 2)}`;

        // Insere o hífen entre os grupos de números
        if (inputValue.length > 2) {
            formattedValue += `) ${inputValue.substring(2, 7)}`;
        }

        // Insere o hífen entre os grupos de números
        if (inputValue.length > 7) {
            formattedValue += `-${inputValue.substring(7, 11)}`;
        }
    } else {
        // Usa o valor de entrada como está
        formattedValue = inputValue;
    }

    //Atualiza o valor do campo de entrada com a versão formatada
    input.value = formattedValue;
});

input.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace") {
        console.log("Backspace pressed!");
        let inputValue = input.value.replace(/\D/g, '');
        console.log(inputValue);
//      console.log(inputValue.replace(/.$/, ""));
        input.value = inputValue; //inputValue.replace(/.$/, "");
    }
});
    
=============================================================================================

$(document).ready(function() {
    console.log("PHONE OK!");
    
    // Seleciona o primeiro input dentro do elemento com a classe "phone"
    var input = $(".phone input").get(0);
    
    input.addEventListener('input', function() {
        let phone = this.value; // Obtém o valor atual do input
        let formattedPhone = formatPhoneNumber(phone); // Formata o telefone
        this.value = formattedPhone; // Atualiza o valor do input com o telefone formatado
    });
    
    function formatPhoneNumber(phone) {
        // Remove tudo que não é número
        let cleaned = phone.replace(/\D/g, '');
        let formatted = '';

        // Adiciona os parênteses e hífens no formato desejado
        for (let i = 0; i < cleaned.length; i++) {
            if (i === 0) {
                formatted += '(';
            } else if (i === 2) {
                formatted += ') ';
            } else if (i === 7) {
                formatted += '-';
            }
            formatted += cleaned[i];
        }

        return formatted;
    }
});

=============================================================================================
