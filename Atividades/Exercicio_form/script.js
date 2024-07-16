const form = document.querySelector('.myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const valorA = parseFloat(document.getElementById('fieldOne').value.trim());
  const valorB = parseFloat(document.getElementById('fieldTwo').value.trim());

  if (isNaN(valorA) || isNaN(valorB)) {
    document.getElementById('mensage').textContent = 'Por favor, digite apenas números nos campos A e B.';
  } else if (valorB <= valorA) {
    document.getElementById('mensage').textContent = 'O valor de B deve ser maior que o valor de A.';
  } else {
    document.getElementById('mensage').textContent = 'Formulário enviado com sucesso!';
  }
});
