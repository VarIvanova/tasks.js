const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
  alert('Служит для вывода информации в консоль');
})

const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
  alert('Служит для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «Ок»');
})

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', () => {
  alert('Создает всплывающее окно, которое позволяет взаимодействовать с пользователем, получая от него ввод данных');
})