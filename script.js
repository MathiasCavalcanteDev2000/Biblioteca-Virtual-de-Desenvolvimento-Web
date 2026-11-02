// Filtro do catálogo
const campoBusca = document.getElementById('busca');
const itens = document.querySelectorAll('#lista-livros li');
const statusBusca = document.getElementById('status-busca');

campoBusca.addEventListener('input', () => {
  const termo = campoBusca.value.trim().toLocaleLowerCase('pt-BR');
  let visiveis = 0;

  itens.forEach((item) => {
    const titulo = item.querySelector('h3').textContent.toLocaleLowerCase('pt-BR');
    const corresponde = titulo.includes(termo);
    item.hidden = !corresponde;
    if (corresponde) visiveis++;
  });

  statusBusca.hidden = visiveis > 0;
});

// Validação do formulário de sugestões
const formulario = document.getElementById('form-sugestao');
const mensagem = document.getElementById('mensagem-form');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nome = formulario.elements['nome'].value.trim();
  const titulo = formulario.elements['titulo'].value.trim();

  mensagem.className = 'erro';

  if (nome === '') {
    mensagem.textContent = 'Informe o nome do leitor.';
    return;
  }
  if (titulo.length < 3) {
    mensagem.textContent = 'O título do livro precisa ter pelo menos 3 caracteres.';
    return;
  }

  mensagem.className = 'sucesso';
  mensagem.textContent = `Obrigado, ${nome}! Recebemos a sugestão "${titulo}".`;
  formulario.reset();
});