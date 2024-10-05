//Variables
const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");

//Eventos
checkButton.addEventListener("click", palindromo);

//Funciones
function palindromo() {
    const inputOriginal = textInput.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const inputConvertido = inputOriginal.split("").reverse().join("");
    const inputSinTocar = textInput.value;

    if (textInput.value.trim() === "") {
        alert("Please input a value");
        return;
    }

    if (inputConvertido === inputOriginal) {
        result.textContent =`${inputSinTocar} is a palindrome`;
        result.classList.remove("not-palindrome")
        result.classList.add("is-palindrome")
    } else {
        result.textContent = `${inputSinTocar} is not a palindrome`;
        result.classList.remove("is-palindrome")
        result.classList.add("not-palindrome")
    }

    // inputConvertido === inputOriginal ?  result.textContent =`${inputSinTocar} is a palindrome` : result.textContent = `${inputSinTocar} is not a palindrome`;
}
