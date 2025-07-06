import { useState } from 'react';
import quizData from './quizData';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerOptionClick = (option) => {
    const correctAnswer = quizData[currentQuestion].answer;
    setSelectedAnswer(option);
    setIsCorrect(option === correctAnswer);
    if (option === correctAnswer) setScore(score + 1);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setIsCorrect(null);
        setSelectedAnswer("");
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed!</h2>
            <p className="text-lg">
              You scored <span className="font-semibold">{score}</span> out of{" "}
              <span className="font-semibold">{quizData.length}</span>
            </p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
                setSelectedAnswer("");
                setIsCorrect(null);
              }}
              className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="text-sm text-gray-600 mb-1">
                Question {currentQuestion + 1} of {quizData.length}
              </div>
              <h3 className="text-xl font-semibold">{quizData[currentQuestion].question}</h3>
            </div>

            <div className="grid gap-4">
              {quizData[currentQuestion].options.map((option) => {
                const isSelected = selectedAnswer === option;
                let bgClass = "bg-white";

                if (isSelected && isCorrect) bgClass = "bg-green-200";
                else if (isSelected && isCorrect === false) bgClass = "bg-red-200";

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerOptionClick(option)}
                    className={`${bgClass} px-4 py-2 border border-gray-300 rounded-lg text-left hover:bg-indigo-100 transition duration-150`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

        <div className="h-12 mt-6 text-center font-medium flex items-center justify-center">
        {!showScore && selectedAnswer && (
            <div className="bg-white shadow-md px-6 py-3 rounded-lg">
            {isCorrect ? (
                <span className="text-green-600">Correct! 🎉</span>
            ) : (
                <span className="text-red-600">Sorry, that's not right. 😢</span>
            )}
            </div>
        )}
        </div>

    </div>
  );
}

export default Quiz;
