function isAnswerCorrect(question, userAnswer) {
    return question.correctAnswer === userAnswer;
}

function countCorrectAnswers(questions, userAnswers) {
    return questions.filter((question, index) => isAnswerCorrect(question, userAnswers[index])).length;
}

function calculatePercentage(correctCount, totalQuestions) {
    return (correctCount / totalQuestions) * 100;
}

function getResultMessage(percentage) {
    return percentage >= 70 ? 'Congratulations! You passed the quiz.' : 'Unfortunately, you did not pass the quiz.';
}

function createQuizResult(questions, userAnswers) {
    const correctCount = countCorrectAnswers(questions, userAnswers);
    const percentage = calculatePercentage(correctCount, questions.length);
    const message = getResultMessage(percentage);
    return {
        percentage,
        message
    };
}

const questions = [
    {
        question: 'What is the capital of France?',
        correctAnswer: 'Paris'
    },
    {
        question: 'What is the capital of Germany?',
        correctAnswer: 'Berlin'
    },
    {
        question: 'What is the capital of Italy?',
        correctAnswer: 'Rome'
    }
];

const userAnswers = ['Paris', 'Berli', 'Rom'];

const result = createQuizResult(questions, userAnswers);
console.log(result);