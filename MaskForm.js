var input = document.getElementById($(".phone input").attr("id"));

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

// if(inputValue.length<11){
//     $("form").disabled=true;
//     $(input).removeClass("success");
//     $(input).addClass("error");
//  formattedValue+="_";
// }else{
//     $(input).removeClass("error");
//     $(input).addClass("success");
// }

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

var input = document.getElementById($(".cpf input").attr("id"));

input.addEventListener('input', () => {
    let cpf = input.value.replace(/\D/g, ''); // Remove tudo que não é número
    let formattedCpf = formatCPF(cpf);
    input.value = formattedCpf;
});

function formatCPF(cpf) {
    // Remove qualquer caractere não numérico
    cpf = cpf.replace(/\D/g, '');

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
    if (cpf.length !== 11) return false;

    // Cálculo dos dígitos verificadores
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let mod = sum % 11;
    let digit1 = mod < 2 ? 0 : 11 - mod;

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    mod = sum % 11;
    let digit2 = mod < 2 ? 0 : 11 - mod;

    // Verifica se os dígitos calculados correspondem aos dígitos verificadores informados
    return (parseInt(cpf.charAt(9)) === digit1 && parseInt(cpf.charAt(10)) === digit2);
}

var input = document.getElementById($(".rg input").attr("id"));

input.addEventListener('input', () => {
    let rg = input.value.replace(/\D/g, ''); // Remove tudo que não é número
    let formattedRg = formatRG(rg);
    input.value = formattedRg;
});

function formatRG(rg) {
    // Remove qualquer caractere não numérico
    rg = rg.replace(/\D/g, '');

    // Adiciona os pontos e o hífen no formato desejado
    let formatted = '';
    for (let i = 0; i < rg.length; i++) {
        if (i === 2 || i === 5) {
            formatted += '.';
        } else if (i === 8) {
            formatted += '-';
        }
        formatted += rg[i];
    }
    return formatted;
}


