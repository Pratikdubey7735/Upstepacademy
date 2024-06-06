import React, { useState } from 'react';
const Puzzles = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const puzzles = [
    {
      question: "How many squares does a chessboard have?",
      options: ["68", "66", "64", "62"],
      correctAnswer: "64"
    },
    {
      question: "Who were the opponents in the famous Evergreen Game?",
      options: ["Adolf Anderssen vs. Jean Dufresne", "Paul Morphy vs. Howard Staunton", "Wilhelm Steinitz vs. Emanuel Lasker", "Jose Raul Capablanca vs. Alexander Alekhine"],
      correctAnswer: "Adolf Anderssen vs. Jean Dufresne"
    },
    {
      question: "How many moves was the longest [known] chess game in history?",
      options: ["101", "231", "269", "382"],
      correctAnswer: "269"
    },
    {
      question: "What is it called when a player can't defend an attack against their king?",
      options: ["Check", "Chess", "CheckChess", "Checkmate"],
      correctAnswer: "Checkmate"
    },
    {
      question: "The quickest possible checkmate is in:",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2"
    },
    {
      question: "Where did chess originate?",
      options: ["India", "Russia", "France", "Italy"],
      correctAnswer: "India"
    },
    {
      question: "What does the word “checkmate”/“shah mat” mean in Persian?",
      options: ["King is helpless", "King is alone", "King needs help", "King is dead"],
      correctAnswer: "King is dead"
    },
    {
      question: "Which game is the earliest known predecessor of chess?",
      options: ["Checkers", " Ludo", "Chaturanga", "Go"],
      correctAnswer: "Chaturanga"
    },
    {
      question: "Approximately how old is the game of chess?",
      options: ["Around 1500 years", "Around 600 years", "Around 5000 years", "Around 600 years"],
      correctAnswer: "Around 1500 years"
    },
    {
      question: " Who was the first official World Chess Champion?",
      options: ["Wilhelm Steinitz", "Garry Kasparov", "Bobby Fischer", "Paul Morphy"],
      correctAnswer: "Wilhelm Steinitz"
    },
  ];
  const handleAnswerClick = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
      if (currentQuestionIndex < puzzles.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        alert("Congratulations! You've completed all the puzzles.");
        setCurrentQuestionIndex(0); 
      }
    } else {
      alert("Incorrect. Try again!");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url("https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpMEPMs7.png")', backgroundSize: 'cover' }}>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-center my-8 text-purple-800">Test Your Chess Knowledge!</h1>
          {currentQuestionIndex < puzzles.length ? (
            <div className="flex flex-col items-center">
              <div key={currentQuestionIndex} className="mb-8">
                <p className="text-2xl font-bold mb-2 text-fuchsia-700">{puzzles[currentQuestionIndex].question}</p>
                <div className="grid grid-cols-2 gap-4 mt-8 ">
                  {puzzles[currentQuestionIndex].options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      className="bg-green-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full text-2xl"
                      onClick={() => handleAnswerClick(option, puzzles[currentQuestionIndex].correctAnswer)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-4xl font-bold text-center text-purple-800">
              <p>Congratulations! You've completed all the puzzles.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => setCurrentQuestionIndex(0)}>
                Restart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Puzzles;
