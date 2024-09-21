'use client';

import { useState } from 'react';
import { quizQuestions, QuizQuestion } from './quiz-data';
import { Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, Box } from '@mui/material';
import Image from 'next/image';
import imgQuestion from '../app/image/question.svg'
import completed from '../app/image/completed.svg'

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
          <Box
            sx={{
              background: '#613DFC',
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#fff'
              }}
            >
              Pergunta {currentQuestionIndex + 1}/{quizQuestions.length}
            </Typography>
          </Box>
          <Box sx={{
            width: '100%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image
              src={imgQuestion}
              alt='image the question'
            />
          </Box>
          <Box sx={{ background: '#613DFC', borderRadius: '40px' }}>
            <Box sx={{ m: '40px', color: '#fff' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{currentQuestion.question}</Typography>
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
            </Box>
          </Box>
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
              <Button variant="contained" color="primary" onClick={handleNextQuestion}
                sx={{ mb: 2, display: 'flex', justifyContent: 'center', backgroundColor: '#613DFC', color: '#fff' }}
              >
                Próxima Pergunta
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitAnswer}
              disabled={!selectedOption}
              sx={{ mb: 2, display: 'flex', justifyContent: 'center', color: '#fff' }}
            >
              Confirmar Resposta
            </Button>
          )}
        </>
      ) : (
        <Box sx={{
          width: '100%',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Image
            src={completed}
            alt='image the question'
          />

          <Typography variant="h4" gutterBottom>
            Quiz Concluído! Sua pontuação: {score}/{quizQuestions.length}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
