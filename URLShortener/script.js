const input = document.querySelector('.InputText');
const button = document.querySelector('.Submit');
const resultText = document.querySelector('.resultText');

button.addEventListener('click', () => {
    const api = 'https://tinyurl.com/api-create.php?url=' + input.value

    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('GET', api);

    xhr.onload = function() {
        console.log(xhr.response);
        resultText.innerText = xhr.response
        resultText.href = xhr.response
    };

    xhr.send();
})