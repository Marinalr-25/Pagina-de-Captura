const botao = document.querySelectorAll('.js-botao');
const body = document.body;

botao.forEach((b) => {
  b.addEventListener('click', function () {
    body.classList.toggle('popup--aberto');
  });
});
