function contarLetraA() {
    // Obtém o valor do textarea
    const inputString = document.getElementById('inputString').value;

    // Converte a string para minúsculas para a verificação
    const lowerCaseString = inputString.toLowerCase();

    // Conta a quantidade de letras 'a'
    const countA = lowerCaseString.split('a').length - 1;

    // Exibe a mensagem
    const messageElement = document.getElementById('message');
    messageElement.textContent = `A letra 'a' aparece ${countA} vezes na string.`;
}
