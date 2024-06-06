//Necessario declarar a Classe(s) de CSS no lime survey (cpf),(rg),(phone) 
==============================================================================================================================================

$(document).ready(function() {
    console.log("CPF OK!");

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

==============================================================================================================================================
$(document).ready(function() {
    console.log("RG OK!");

    // Select the first element within the collection $(".rg input")
    var input = $(".rg input").get(0);

    // Add event listener to the selected element
    input.addEventListener('input', () => {
        let rawValue = input.value.replace(/[^\d]/g, ''); // Remove all non-digits
        let rg = rawValue.replace(/\D/g, ''); // Remove all non-digits

        // Format the input value correctly
        let formattedValue = formatRG(rawValue);

        // Update the input value with the correct formatting
        input.value = formattedValue;

        // Validity check
        if ((rg.length === 9 && formattedValue.length === 12) || (rg.length === 8 && formattedValue.length === 12)) {
            input.setCustomValidity('');
        } else {
            input.setCustomValidity('RG inválido!');
        }
    });

    function formatRG(rawValue) {
        let rg = rawValue.replace(/\D/g, ''); // Remove all non-digits
        let formatted = '';

        // Apply the correct formatting based on the length
        if (rg.length <= 9) {
            // Format: XX.XXX.XXX-X
            for (let i = 0; i < rg.length; i++) {
                if (i === 2 || i === 5) {
                    formatted += '.';
                } else if (i === 8) {
                    formatted += '-';
                }
                formatted += rg[i];
            }
        } else {
            // Format: X.XXX.XXX-XX
            for (let i = 0; i < rg.length; i++) {
                if (i === 1 || i === 4) {
                    formatted += '.';
                } else if (i === 7) {
                    formatted += '-';
                }
                formatted += rg[i];
            }
        }

        return formatted;
    }

});
==============================================================================================================================================
$(document).ready(function() {
    console.log("PHONE OK!");

    var input = $(".phone input").get(0);

    input.addEventListener('input', () => {
        let phone = input.value.replace(/\D/g, ''); // Remove everything that is not a number
        input.value = formatPhoneNumber(phone); // Format the phone number

        // Validate the phone number
        if (phone.length === 11 && validatePhone(phone)) {
            input.setCustomValidity(''); // No error
        } else {
            input.setCustomValidity('Telefone inválido!'); 
        }
    });

    function formatPhoneNumber(phone) {
        let formatted = '';
        
        // Add parentheses and hyphens in the desired format
        for (let i = 0; i < phone.length; i++) {
            if (i === 0) {
                formatted += '(';
            } else if (i === 2) {
                formatted += ') ';
            } else if (i === 7) {
                formatted += '-';
            }
            formatted += phone[i];
        }

        return formatted;
    }
    
    function validatePhone(phone) {
        // Simple validation: ensure phone number is exactly 11 digits long
        return phone.length === 11;
    }
});

==============================================================================================================================================
strlen(this) >=15
==============================================================================================================================================
.error{
    border: 2px solid red;
}

.success{
    border: 2px solid green;
} 
