const nomes = ['Kikita', 'Ronaldo', 'Pavão'];
const desafios = [
  'Você paga tudo!',
  'Escolhe o lanche de todo mundo!',
  ' ' + nomes [Math.floor(Math.random() * nomes.length)] + ' Ganhou um lanche grátis!',
  'Hoje escapou!',
  'Tem que buscar o lanche!',
  'Pode escolher primeiro!',
  'Escolhe alguém pra dividir o lanche com você',
  'Não pode usar as mãos pra pegar o lanche.',
  'Só pode comer depois de todo mundo.',
  'Diz uma frase filosófica sobre comida.',
  'Hoje escapou!',
];

const roleta = document.getElementById('roleta');
const botao = document.getElementById('botaoGirar');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
  botao.disabled = true;
  resultado.textContent = '';
  roleta.textContent = 'Girando';
  roleta.style.transform = 'rotate(1080deg)';

  setTimeout(() => {
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const desafio = desafios[Math.floor(Math.random() * desafios.length)];
    resultado.textContent = `${nome}: ${desafio}`;
    roleta.textContent = 'Clique para Girar';
    roleta.style.transform = 'rotate(0deg)';
    botao.disabled = false;
  }, 3000);
});