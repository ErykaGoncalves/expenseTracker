// app/page.tsx
'use client';

import { useState } from 'react';
import { quizQuestions, QuizQuestion } from './quiz-data';
import { Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, Box } from '@mui/material';

export default function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion: QuizQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption('');
    setShowExplanation(false);
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <Box mt={4}>
      {!quizCompleted ? (
        <>
          <Typography variant="h5" gutterBottom>
            Pergunta {currentQuestionIndex + 1}/{quizQuestions.length}
          </Typography>
          <Typography variant="h6">{currentQuestion.question}</Typography>
          <FormControl component="fieldset">
            <RadioGroup value={selectedOption} onChange={handleOptionChange}>
              {currentQuestion.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
          {showExplanation ? (
            <>
              <Typography
                variant="body1"
                color={selectedOption === currentQuestion.answer ? 'success.main' : 'error.main'}
              >
                {selectedOption === currentQuestion.answer
                  ? 'Correto!'
                  : 'Incorreto!'} {currentQuestion.explanation}
              </Typography>
              <Button variant="contained" color="primary" onClick={handleNextQuestion} sx={{ mt: 2 }}>
                Próxima Pergunta
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitAnswer}
              disabled={!selectedOption}
              sx={{ mt: 2 }}
            >
              Confirmar Resposta
            </Button>
          )}
        </>
      ) : (
        <Typography variant="h4" gutterBottom>
          Quiz Concluído! Sua pontuação: {score}/{quizQuestions.length}
        </Typography>
      )}
    </Box>
  );
}
