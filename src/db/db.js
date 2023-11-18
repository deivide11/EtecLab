export const questions = [
  {
    title: "Qual tag HTML é utilizada para criar um link?",
    id: 1,
    messageError: "Você errou: A resposta correta é tag a",
    messageCorrect: "Você acertou, incrível!",
    answers: [
      {
        id: 1,
        answer: "a",
        correct: true,
      },
      {
        id: 2,
        answer: "link",
        correct: false,
      },
      {
        id: 3,
        answer: "href",
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },
  {
    title: "Como estilizar um elemento HTML?",
    id: 1,
    messageError: "Você errou: A resposta correta é CSS",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "CSS",
        correct: true,
      },
      {
        id: 2,
        answer: "HTML",
        correct: false,
      },
      {
        id: 3,
        answer: "JavaScript",
        correct: false,
      },
    ],
    category: "CSS",
    status: "active",
  },
  {
    title: "Qual classe é utilizada para criar um botão?",
    id: 1,
    messageError: "Você errou: A resposta correta é btn",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "btn",
        correct: true,
      },
      {
        id: 2,
        answer: "button",
        correct: false,
      },
      {
        id: 3,
        answer: "botao",
        correct: false,
      },
    ],
    category: "CSS",
    status: "active",
  },
  {
    title: "Qual a tag HTML utilizada para criar uma lista?",
    id: 1,
    messageError: "Você errou: A resposta correta é tag ul",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "ul",
        correct: true,
      },
      {
        id: 2,
        answer: "li",
        correct: false,
      },
      {
        id: 3,
        answer: "ol",
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },
  {
    title: "Qual a tag HTML utilizada para criar uma lista ordenada?",
    id: 1,
    messageError: "Você errou: A resposta correta é tag ol",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "ul",
        correct: false,
      },
      {
        id: 2,
        answer: "li",
        correct: false,
      },
      {
        id: 3,
        answer: "ol",
        correct: true,
      },
    ],
    category: "HTML",
    status: "active",
  },
];

export const questionsCsharp = [
  {
    title:
      "Qual é a principal vantagem do C# em relação a outras linguagens de programação?",
    id: 1,
    messageError:
      "Você errou: A resposta correta é A segurança de tipos (type safety).",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "Desempenho superior",
        correct: false,
      },
      {
        id: 2,
        answer: "Facilidade de uso",
        correct: false,
      },
      {
        id: 3,
        answer: "A segurança de tipos (type safety)",
        correct: true,
      },
    ],
    category: "C#",
    status: "active",
  },
  {
    title: "Qual é a sintaxe correta para declarar uma variável em C#?",
    id: 2,
    messageError: "Você errou: A resposta correta é tipoDeDado nomeDaVariavel;",
    messageCorrect: "Você acertou, ótimo!",
    answers: [
      {
        id: 1,
        answer: "nomeDaVariavel = tipoDeDado;",
        correct: false,
      },
      {
        id: 2,
        answer: "tipoDeDado nomeDaVariavel = valorInicial;",
        correct: false,
      },
      {
        id: 3,
        answer: "tipoDeDado nomeDaVariavel;",
        correct: true,
      },
    ],
    category: "C#",
    status: "active",
  },
  {
    title:
      "Qual é o operador utilizado para realizar a atribuição de um valor a uma variável em C#?",
    id: 3,
    messageError: "Você errou: A resposta correta é = (sinal de igual).",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "== (sinal de igual duplo)",
        correct: false,
      },
      {
        id: 2,
        answer: "= (sinal de igual)",
        correct: true,
      },
      {
        id: 3,
        answer: ":= (dois pontos seguidos)",
        correct: false,
      },
    ],
    category: "C#",
    status: "active",
  },
  {
    title:
      "Qual é o método utilizado para exibir uma mensagem na saída padrão em C#?",
    id: 4,
    messageError: "Você errou: a resposta correta é Console.WriteLine().",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "print()",
        correct: false,
      },
      {
        id: 2,
        answer: "writeLine()",
        correct: false,
      },
      {
        id: 3,
        answer: "Console.WriteLine()",
        correct: true,
      },
    ],
    category: "C#",
    status: "active",
  },
  {
    title:
      "Qual é a estrutura de controle utilizada para executar um bloco de código repetidamente em C#?",
    id: 5,
    messageError:
      "Você errou: A resposta correta é loop (exemplo: while, for, foreach).",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "if-else",
        correct: false,
      },
      {
        id: 2,
        answer: "switch-case",
        correct: false,
      },
      {
        id: 3,
        answer: "loop (exemplo: while, for, foreach)",
        correct: true,
      },
    ],
    category: "C#",
    status: "active",
  },
];

export const questionsJS = [
  {
    title: "O que é uma função em JavaScript?",
    id: 2,
    messageError:
      "Você errou, a resposta correta é: b) Uma unidade de código que realiza uma tarefa específica.",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "Uma estrutura de controle que define loops.",
        correct: false,
      },
      {
        id: 2,
        answer: "Uma unidade de código que realiza uma tarefa específica.",
        correct: true,
      },
      {
        id: 3,
        answer: "Um tipo de dado que armazena valores numéricos.",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title: "Qual é a diferença entre 'let' e 'var' em JavaScript?",
    id: 3,
    messageError:
      "Você errou, a resposta correta é: a) 'let' cria uma variável local, enquanto var cria uma variável global.",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer:
          "'let' cria uma variável local, enquanto 'var' cria uma variável global.",
        correct: true,
      },
      {
        id: 2,
        answer: "'let' permite reatribuir valores, enquanto 'var' não permite.",
        correct: false,
      },
      {
        id: 3,
        answer:
          "'let' é usado para declarar funções, enquanto 'var' é usado para declarar variáveis.",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title:
      "Como você verifica se uma variável contém um valor nulo em JavaScript?",
    id: 5,
    messageError:
      "Você errou, a resposta correta é: c) Comparando a variável com 'null'",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "Usando o operador 'isnull'",
        correct: false,
      },
      {
        id: 2,
        answer: "Usando o operador 'null'",
        correct: false,
      },
      {
        id: 3,
        answer: "Comparando a variável com 'null'",
        correct: true,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title: "Como você verifica se um valor é um array em JavaScript?",
    id: 6,
    messageError:
      "Você errou, a resposta correta é: a) Usando o operador 'isArray()'",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "Usando o operador 'isArray()'",
        correct: true,
      },
      {
        id: 2,
        answer: "Usando o operador 'typeof'",
        correct: false,
      },
      {
        id: 3,
        answer: "Usando o operador 'isarray'",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title: "Qual operador é usado para atribuição de valor em JavaScript?",
    id: 7,
    messageError: "Você errou, a resposta correta é: a) =",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "=",
        correct: true,
      },
      {
        id: 2,
        answer: "==",
        correct: false,
      },
      {
        id: 3,
        answer: "===",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title:
      "Qual é o operador lógico usado para negar uma expressão em JavaScript?",
    id: 8,
    messageError: "Você errou, a resposta correta é: b) '!'",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "&&",
        correct: false,
      },
      {
        id: 2,
        answer: "!",
        correct: true,
      },
      {
        id: 3,
        answer: "||",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title: "Como exibir uma mensagem no console usando JavaScript?",
    id: 9,
    messageError: "Você errou, a resposta correta é: a) console.log()",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "console.log()",
        correct: true,
      },
      {
        id: 2,
        answer: "print()",
        correct: false,
      },
      {
        id: 3,
        answer: "display()",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title:
      "Qual dos seguintes é um exemplo de um tipo de dado primitivo em JavaScript?",
    id: 10,
    messageError: "Você errou, a resposta correta é: c) string",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "object",
        correct: false,
      },
      {
        id: 2,
        answer: "array",
        correct: false,
      },
      {
        id: 3,
        answer: "string",
        correct: true,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title: "O que o operador  +  faz em JavaScript?",
    id: 11,
    messageError:
      "Você errou, a resposta correta é: c) Ambas as opções anteriores.",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "Soma dois números.",
        correct: false,
      },
      {
        id: 2,
        answer: "Concatena strings.",
        correct: false,
      },
      {
        id: 3,
        answer: "Ambas as opções anteriores.",
        correct: true,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title: "Como se referencia um elemento HTML por sua ID usando JavaScript?",
    id: 12,
    messageError: "Você errou, a resposta correta é: a) getElementById()",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "getElementById()",
        correct: true,
      },
      {
        id: 2,
        answer: "querySelector()",
        correct: false,
      },
      {
        id: 3,
        answer: "getElementsByClassName()",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title: "O que é um evento em JavaScript?",
    id: 13,
    messageError:
      "Você errou, a resposta correta é: b) Uma ação desencadeada por uma interação do usuário.",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "Uma função.",
        correct: false,
      },
      {
        id: 2,
        answer: "Uma ação desencadeada por uma interação do usuário.",
        correct: true,
      },
      {
        id: 3,
        answer: "Uma variável.",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title: "Como se define uma função em JavaScript?",
    id: 14,
    messageError:
      "Você errou, a resposta correta é: b) function myFunction() {}",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "def myFunction() {}",
        correct: false,
      },
      {
        id: 2,
        answer: "function myFunction() {}",
        correct: true,
      },
      {
        id: 3,
        answer: "var myFunction = function() {}",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title: "O que o método toUpperCase() faz em JavaScript?",
    id: 15,
    messageError:
      "Você errou, a resposta correta é: b) Converte uma string em maiúsculas.",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "Converte uma string em minúsculas.",
        correct: false,
      },
      {
        id: 2,
        answer: "Converte uma string em maiúsculas.",
        correct: true,
      },
      {
        id: 3,
        answer: "Retorna o comprimento de uma string.",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title:
      "Qual método é usado para obter o comprimento de uma string em JavaScript?",
    id: 16,
    messageError: "Você errou, a resposta correta é: c) length",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "length()",
        correct: false,
      },
      {
        id: 2,
        answer: "size()",
        correct: false,
      },
      {
        id: 3,
        answer: "length",
        correct: true,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title:
      "Qual é a maneira correta de iniciar um bloco de comentário de várias linhas em JavaScript?",
    id: 17,
    messageError: "Você errou, a resposta correta é: b) /*",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: " ",
        correct: false,
      },
      {
        id: 2,
        answer: "/*",
        correct: true,
      },
      {
        id: 3,
        answer: "\u003C&#33;--",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title:
      "Qual método é usado para converter um valor em uma string em JavaScript?",
    id: 18,
    messageError: "Você errou, a resposta correta é: a) toString()",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "toString()",
        correct: true,
      },
      {
        id: 2,
        answer: "toText()",
        correct: false,
      },
      {
        id: 3,
        answer: "stringify()",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title: "O que o método push() faz em um array em JavaScript?",
    id: 19,
    messageError:
      "Você errou, a resposta correta é: b) Adiciona um novo elemento ao final do array.",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "Remove o último elemento do array.",
        correct: false,
      },
      {
        id: 2,
        answer: "Adiciona um novo elemento ao final do array.",
        correct: true,
      },
      {
        id: 3,
        answer: "Ordena os elementos do array em ordem crescente.",
        correct: false,
      },
    ],
    category: "Javascript",
    status: "active",
  },

  {
    title:
      "Qual é a maneira correta de selecionar todos os elementos de uma determinada classe usando JavaScript?",
    id: 20,
    messageError:
      "Você errou, a resposta correta é: c) getElementsByClassName()",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "getElementByClass()",
        correct: false,
      },
      {
        id: 2,
        answer: "querySelector()",
        correct: false,
      },
      {
        id: 3,
        answer: "getElementsByClassName()",
        correct: true,
      },
    ],
    category: "Javascript",
    status: "active",
  },
];

export const questionsHTML = [
  {
    title: "HTML é uma linguagem de...?",
    id: 1,
    messageError: "Você errou, a resposta correta é: Marcação",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "Criação",
        correct: false,
      },
      {
        id: 2,
        answer: "Programação",
        correct: false,
      },
      {
        id: 3,
        answer: "Marcação",
        correct: true,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Qual tag abaixo não pertence ao HMTL?",
    id: 2,
    messageError: "Você errou, a resposta correta é: <color></color>",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "<br>",
        correct: false,
      },
      {
        id: 2,
        answer: "<color></color>",
        correct: true,
      },
      {
        id: 3,
        answer: "<span></span>",
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Como deve ser declarado um título da página?",
    id: 3,
    messageError:
      "Você errou, a resposta correta é: <title>Título aqui</title>",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "<title>Título aqui</title>",
        correct: true,
      },
      {
        id: 2,
        answer: '<html title="Título aqui"></html>',
        correct: false,
      },
      {
        id: 3,
        answer: '<title title="titulo">',
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Qual a forma correta de se criar uma imagem?",
    id: 4,
    messageError: "Você errou, a resposta correta é: <img src='link imagem>'",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "<img>link imagem</img>",
        correct: false,
      },
      {
        id: 2,
        answer: '<img src="link imagem">',
        correct: true,
      },
      {
        id: 3,
        answer: '<figure src="link imagem"></figure>',
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Qual Tag abaixo pertence ao HTML?",
    id: 5,
    messageError: "Você errou, a resposta correta é: <sup>",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "<sup>",
        correct: true,
      },
      {
        id: 2,
        answer: "<weight>",
        correct: false,
      },
      {
        id: 3,
        answer: "<super>",
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Como devemos chamar um script css?",
    id: 6,
    messageError:
      'Você errou, a resposta correta é: <link rel="stylesheet" href="link css>',
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: '<script href="link css>"',
        correct: false,
      },
      {
        id: 2,
        answer: '<a href="link css"></a>',
        correct: false,
      },
      {
        id: 3,
        answer: '<link rel="stylesheet" href="link css>',
        correct: true,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Qual é a sigla HTML?",
    id: 7,
    messageError: "Você errou, a resposta correta é: HyperText Markup Language",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "HyperText Markup Language",
        correct: true,
      },
      {
        id: 2,
        answer: " HomeText Markup Language",
        correct: false,
      },
      {
        id: 3,
        answer: '<link rel="stylesheet" href="link css>',
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Qual é a finalidade da tag <head> em uma página HTML?",
    id: 8,
    messageError:
      "Você errou, a resposta correta é: Armazenar metadados sobre a página, como título, scripts e estilos.",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: " Exibir o conteúdo principal da página.",
        correct: false,
      },
      {
        id: 2,
        answer: " Definir o estilo CSS para a página.",
        correct: false,
      },
      {
        id: 3,
        answer:
          "Armazenar metadados sobre a página, como título, scripts e estilos.",
        correct: true,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Qual é a tag usada para incorporar um vídeo em uma página HTML?",
    id: 9,
    messageError: "Você errou, a resposta correta é: <video>",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: " <media>",
        correct: false,
      },
      {
        id: 2,
        answer: "<video>",
        correct: true,
      },
      {
        id: 3,
        answer: "<videomedia>",
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Qual é a diferença entre os elementos <div> e <span> em HTML?",
    id: 10,
    messageError:
      "Você errou, a resposta correta é: Todas as opções estão corretas.",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer:
          "<div> é um elemento de bloco, enquanto <span> é um elemento em linha.",
        correct: false,
      },
      {
        id: 2,
        answer:
          "<div> usado para agrupar elementos relacionados,<span> usado para aplicar estilos a partes específicas do texto.",
        correct: false,
      },
      {
        id: 3,
        answer: "Todas as opções estão corretas.",
        correct: true,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title:
      "Qual é a função do atributo alt em uma tag de imagem (<img>) em HTML?",
    id: 11,
    messageError:
      "Você errou, a resposta correta é: Fornecer um texto alternativo quando a imagem não pode ser exibida.",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer:
          "Fornecer um texto alternativo quando a imagem não pode ser exibida.",
        correct: true,
      },
      {
        id: 2,
        answer: "Definir a altura da imagem.",
        correct: false,
      },
      {
        id: 3,
        answer: "Especificar a largura da imagem.",
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Qual é a função da tag <iframe> em HTML?",
    id: 12,
    messageError:
      "Você errou, a resposta correta é: Incorporar conteúdo de uma página externa dentro de uma página HTML.",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "Exibir imagens em um formato de galeria..",
        correct: false,
      },
      {
        id: 2,
        answer:
          "Incorporar conteúdo de uma página externa dentro de uma página HTML.",
        correct: true,
      },
      {
        id: 3,
        answer: "Reproduzir áudio em uma página da web.",
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Qual é a finalidade da tag <nav> em HTML5?",
    id: 13,
    messageError:
      "Você errou, a resposta correta é: Representar a área de navegação de um site.",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "Criar uma lista de links de navegação.",
        correct: false,
      },
      {
        id: 2,
        answer: "Definir a posição dos elementos de navegação em uma página.",
        correct: false,
      },
      {
        id: 3,
        answer: "Representar a área de navegação de um site.",
        correct: true,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Qual é a tag HTML utilizada para criar uma tabela?",
    id: 14,
    messageError: "Você errou, a resposta correta é: <colgroup>",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "<table>",
        correct: true,
      },
      {
        id: 2,
        answer: "<tr>",
        correct: false,
      },
      {
        id: 3,
        answer: "<td>",
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title:
      "Qual é a tag usada para agrupar opções em um elemento <select> em HTML?",
    id: 15,
    messageError: "Você errou, a resposta correta é: <optgroup>",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "<select-group>",
        correct: false,
      },
      {
        id: 2,
        answer: "<option-group>",
        correct: false,
      },
      {
        id: 3,
        answer: "<optgroup>",
        correct: true,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title:
      "Qual é a tag usada para marcar um texto importante ou enfatizado em HTML?",
    id: 16,
    messageError: "Você errou, a resposta correta é: <em>",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "<em>",
        correct: true,
      },
      {
        id: 2,
        answer: "<strong>",
        correct: false,
      },
      {
        id: 3,
        answer: "<bold>",
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Como se insere uma quebra de linha em HTML?",
    id: 17,
    messageError: "Você errou, a resposta correta é: <br>",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "<nl>",
        correct: false,
      },
      {
        id: 2,
        answer: "<br>",
        correct: true,
      },
      {
        id: 3,
        answer: "<lb>",
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title: "Qual é a tag usada para criar um título na página HTML?",
    id: 18,
    messageError: "Você errou, a resposta correta é: <h1>",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "<title>",
        correct: false,
      },
      {
        id: 2,
        answer: "<header>",
        correct: false,
      },
      {
        id: 3,
        answer: "<h1>",
        correct: true,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title:
      "Qual é a tag usada para criar uma área de texto em um formulário em HTML?",
    id: 19,
    messageError: "Você errou, a resposta correta é: <textarea>",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "<text>",
        correct: false,
      },
      {
        id: 2,
        answer: "<textarea>",
        correct: true,
      },
      {
        id: 3,
        answer: "<input>",
        correct: false,
      },
    ],
    category: "HTML",
    status: "active",
  },

  {
    title:
      "Qual é a tag usada para incluir um arquivo de script JavaScript em HTML?",
    id: 20,
    messageError: "Você errou, a resposta correta é: <script>",
    messageCorrect: "Você acertou, parabéns!",
    answers: [
      {
        id: 1,
        answer: "<js>",
        correct: false,
      },
      {
        id: 2,
        answer: "<javascript>",
        correct: false,
      },
      {
        id: 3,
        answer: "<script>",
        correct: true,
      },
    ],
    category: "HTML",
    status: "active",
  },
];

export const todasQuestoes = [
  questionsHTML,
  questionsCsharp,
  questionsJS,
  questions,
];
