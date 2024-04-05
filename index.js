// Seleciona o elemento <div> com o id "conteudo"
let conteudo = document.getElementById("conteudo");

// Cria um novo elemento <h1> e define seu texto
let titulo = document.createElement("h1");
titulo.textContent = "O que é JavaScript?";

// Cria um novo elemento <p> e define seu texto
let paragrafo = document.createElement("p");
paragrafo.textContent = "JavaScript é uma linguagem de programação de alto nível, interpretada e dinâmica, amplamente usada para criar interatividade em páginas da web. Ele é executado no navegador da web do usuário, permitindo que você crie aplicativos web interativos e dinâmicos. JavaScript é uma linguagem de programação que permite manipular o conteúdo de uma página da web de forma dinâmica. Você pode selecionar elementos HTML, criar novos elementos, adicionar estilos, manipular eventos e muito mais, tudo isso usando JavaScript. Essa página foi criada em um exercicío apenas para demonstração da utilização de JavaScript";

// Adiciona os elementos criados ao elemento <div> com o id "conteudo"
conteudo.appendChild(titulo);
conteudo.appendChild(paragrafo);


