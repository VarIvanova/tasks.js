const userTextField = document.querySelector('#userTextField');
userTextField.addEventListener('click',
(event) => {
    event.preventDefault();
    const userText = prompt('Введите текст');
    userTextField.textContent = userText;
})


