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



========================================================================================
$(document).ready(function() {
    console.log("RG OK!");
    
    // Selecionar o primeiro elemento dentro da coleção $(".rg input")
    var input = $(".rg input").get(0);
    
    // Adicionar o ouvinte de eventos ao elemento selecionado
    input.addEventListener('input', function() {
        let rg = this.value.replace(/\D/g, ''); // Remove tudo que não é número
        let formattedRg = formatRG(rg);
        this.value = formattedRg;
    });

    function formatRG(rg) {
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
});

=======================================================================
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
