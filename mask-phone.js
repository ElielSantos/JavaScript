const input = document.getElementById('answer392913X17X98');

input.addEventListener('input', () => {
    let inputValue = input.value.replace(/\D/g, ''); // Remove tudo que não é número
    let formattedValue = '';

    // Verifica se o telefone é celular (com DDD)
    if (inputValue.length > 10) {
        // Formata como (XX) XXXXX-XXXX
        formattedValue = `(${inputValue.substring(0, 2)}) ${inputValue.substring(2, 7)}-${inputValue.substring(7, 11)}`;
    } else {
        // Formata como (XX) XXXX-XXXX
        formattedValue = `(${inputValue.substring(0, 2)}) ${inputValue.substring(2, 6)}-${inputValue.substring(6, 10)}`;
    }

    // Atualiza o valor do campo de entrada com a versão formatada
    input.value = formattedValue;
});
