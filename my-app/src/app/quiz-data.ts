export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: 'Qual é a capital da França?',
    options: ['Paris', 'Londres', 'Roma', 'Berlim'],
    answer: 'Paris',
    explanation: 'Paris é a capital da França e uma das cidades mais visitadas do mundo.',
  },
  {
    question: 'Quem escreveu "Dom Quixote"?',
    options: ['Miguel de Cervantes', 'William Shakespeare', 'J.K. Rowling', 'Mark Twain'],
    answer: 'Miguel de Cervantes',
    explanation: 'Miguel de Cervantes é o autor do clássico literário "Dom Quixote".',
  },
  {
    question: 'Em que ano o homem pisou na Lua pela primeira vez?',
    options: ['1969', '1959', '1979', '1989'],
    answer: '1969',
    explanation: 'Neil Armstrong pisou na Lua em 20 de julho de 1969 durante a missão Apollo 11.',
  },
  {
    question: "Quem foi o primeiro presidente do Brasil?",
    options: ["Juscelino Kubitschek", "Deodoro da Fonseca", "Getúlio Vargas", "Pedro Álvares Cabral"],
    answer: "Deodoro da Fonseca",
    explanation: "Marechal Deodoro da Fonseca foi o primeiro presidente do Brasil após a proclamação da república em 1889."
  },
  {
    question: "Qual o país com a maior população do mundo?",
    options: ["Índia", "Estados Unidos", "Rússia", "China"],
    answer: "China",
    explanation: "A China tem a maior população mundial, com mais de 1,4 bilhão de habitantes."
  },
  {
    question: "Qual é o planeta mais próximo do Sol?",
    options: ["Terra", "Vênus", "Marte", "Mercúrio"],
    answer: "Mercúrio",
    explanation: "Mercúrio é o planeta mais próximo do Sol, orbitando a uma distância média de cerca de 58 milhões de km."
  },
  {
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "Jorge Amado", "Clarice Lispector", "José de Alencar"],
    answer: "Machado de Assis",
    explanation: "'Dom Casmurro' é uma obra clássica da literatura brasileira escrita por Machado de Assis em 1899."
  },
  {
    question: "Qual é a fórmula química da água?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O",
    explanation: "A água é composta por duas moléculas de hidrogênio e uma de oxigênio, representada pela fórmula H2O."
  },
  {
    question: "Qual foi o primeiro imperador romano?",
    options: ["Júlio César", "Nero", "Augusto", "Calígula"],
    answer: "Augusto",
    explanation: "César Augusto foi o primeiro imperador de Roma, governando de 27 a.C. até sua morte em 14 d.C."
  },
  {
    question: "Quem pintou o quadro 'Mona Lisa'?",
    options: ["Vincent van Gogh", "Michelangelo", "Pablo Picasso", "Leonardo da Vinci"],
    answer: "Leonardo da Vinci",
    explanation: "'Mona Lisa' foi pintada por Leonardo da Vinci e é uma das obras de arte mais famosas do mundo."
  }
];
