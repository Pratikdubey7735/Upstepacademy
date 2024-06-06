import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Link } from "react-router-dom";

function ChessGame() {
  const [game, setGame] = useState(new Chess());
  const [gameOutcome, setGameOutcome] = useState(null);
  const [selectedSquare, setSelectedSquare] = useState(null); // New state to keep track of selected square
  const [possibleMoves, setPossibleMoves] = useState([]); // New state to store possible moves

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0) {
      determineGameOutcome();
      return;
    }
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    safeGameMutate((game) => {
      game.move(possibleMoves[randomIndex]);
    });
    determineGameOutcome();
  }

  function determineGameOutcome() {
    if (game.in_checkmate()) {
      setGameOutcome(`${game.turn() === 'w' ? 'Black' : 'White'} wins by checkmate!`);
    } else if (game.in_draw() || game.in_stalemate() || game.in_threefold_repetition()) {
      setGameOutcome('The game is a draw!');
    }
  }

  function startNewGame() {
    setGame(new Chess());
    setGameOutcome(null);
    setSelectedSquare(null); // Reset selected square when starting a new game
    setPossibleMoves([]); // Reset possible moves
  }

  function onDrop(source, target) {
    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: source,
        to: target,
        promotion: 'q', // Consider promotion, typically to queen
      });
    });
    if (move === null) return false;
    setTimeout(makeRandomMove, 300); // Delay before the computer's move
    setSelectedSquare(null); // Reset the selected square after a move
    setPossibleMoves([]); // Clear the possible moves
    return true;
  }

  function onSquareClick(square) {
    // If the same square is clicked, deselect it
    if (square === selectedSquare) {
      setSelectedSquare(null);
      setPossibleMoves([]);
    } else {
      // Select the square and determine possible moves
      setSelectedSquare(square);
      const moves = game.moves({
        square: square,
        verbose: true, // Get detailed moves information
      }).map(move => move.to); // Get the target squares
      setPossibleMoves(moves); // Store the possible moves
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url("https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpMEPMs7.png")', backgroundSize: 'cover' }}>
      <div className='mt-4'>
        <h1 className="text-4xl font-bold text-center justify-between text-orange-600">Play Against Computer</h1>
        <div className='flex items-center justify-center h-screen mt-[-5px]'>
          <div className='flex items-center justify-center border-black p-11'>
            <div className='flex items-center justify-center h-[600px] w-[600px] border-4 border-solid border-black'>
              <Chessboard
                position={game.fen()}
                onPieceDrop={onDrop}
                onSquareClick={onSquareClick} // New prop to handle square clicks
                customSquareStyles={
                  possibleMoves.reduce((styles, move) => {
                    styles[move] = { background: 'rgba(0, 255, 0, 0.5)' }; // Highlight possible moves
                    return styles;
                  }, {})
                }
              />
            </div>
          </div>
          {gameOutcome && (
            <div className='text-center mt-4'>
              <p className='text-4xl font-bold text-yellow-600'>{gameOutcome}</p>
            </div>
          )}
          <button onClick={startNewGame} className="bg-blue-500 py-2 px-4 text-white font-xl font-bold ml-4 rounded-3xl hover:bg-red-500">
            Start New Game
          </button>
          <Link to='/offline'>
            <button className="bg-blue-500 py-2 px-4 rounded-3xl text-white font-xl font-bold ml-4 hover:bg-red-500">
              Play VS 2 Player
            </button>
          </Link>
          <Link to='/'><button
              className='bg-blue-500 ml-2 text-white py-2 px-8 rounded-full hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue' 
            >
            Back
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default ChessGame;
