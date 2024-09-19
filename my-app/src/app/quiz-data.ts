// app/quiz-data.ts
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
  ];
  