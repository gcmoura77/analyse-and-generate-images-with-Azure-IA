import React from 'react';

function App() {

  // Título
  const title = document.createElement('h1');
  title.textContent = 'Análise e Geração de Imagens';
  document.body.appendChild(title);

  // Caixa de texto para inserir a URL da imagem
  const urlInput = document.createElement('input');
  urlInput.type = 'text';
  urlInput.placeholder = 'Insira a URL da imagem';
  document.body.appendChild(urlInput);

  // Botão para disparar a análise de imagem
  const analyzeButton = document.createElement('button');
  analyzeButton.textContent = 'Analisar Imagem';
  analyzeButton.addEventListener('click', () => {
    
    });
  document.body.appendChild(analyzeButton);

  // Botão para disparar a geração de imagem
  const generateButton = document.createElement('button');
  generateButton.textContent = 'Gerar Imagem';
  generateButton.addEventListener('click', () => {
    // Lógica para gerar a imagem
  });
  document.body.appendChild(generateButton);

  return <p></p>;

}

export default App;
