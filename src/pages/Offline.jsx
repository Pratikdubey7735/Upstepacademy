import React, { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Offline() {
  const [game, setGame] = useState(null);
  const [gameOutcome, setGameOutcome] = useState(null);
  const [movesHistory, setMovesHistory] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    white: '',
    black: '',
  });

  useEffect(() => {
    if (!game) {
      const newGame = new Chess();
      setGame(newGame);
      setGameOutcome(null);
      setMovesHistory([]);
      setSelectedSquare(null);
      setPossibleMoves([]);
      promptForPlayerNames();
    }
  }, [game]);

  function promptForPlayerNames() {
    setPlayerNames({
      white: prompt('Enter White Player name:', 'White Player') || 'White Player',
      black: prompt('Enter Black Player name:', 'Black Player') || 'Black Player',
    });
  }

  async function saveGameResult(winner) {
    try {
      await axios.post('https://leader-9ro9.onrender.com/api/saveGameResult', {
        winner,
        playerNames,
      });
    } catch (error) {
      console.error('Error saving game result:', error);
    }
  }

  function startNewGame() {
    setGame(null);
  }

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function onDrop(source, target) {
    let move = null;

    safeGameMutate((game) => {
      move = game.move({
        from: source,
        to: target,
        promotion: 'q',
      });
    });

    if (move === null) return false;

    updateMovesHistory();
    setTimeout(() => setPossibleMoves([]), 300); // Clear possible moves after move
    determineGameOutcome();
    return true;
  }

  function onSquareClick(square) {
    if (square === selectedSquare) {
      setSelectedSquare(null);
      setPossibleMoves([]);
    } else {
      setSelectedSquare(square);
      const moves = game.moves({
        square,
        verbose: true,
      }).map((move) => move.to); // Get all possible moves for the selected piece
      setPossibleMoves(moves);
    }
  }

  function updateMovesHistory() {
    const history = game.history({ verbose: true });
    const formattedMoves = history.reduce((moves, move, index) => {
      const moveNumber = Math.floor(index / 2) + 1;
      const isWhiteMove = index % 2 === 0;
      const moveText = `${isWhiteMove ? `${moveNumber}) ` : ''}${move.san}`;

      if (isWhiteMove) {
        moves.push(moveText);
      } else {
        moves[moves.length - 1] += ` ${move.san}`;
      }

      return moves;
    }, []);

    setMovesHistory(formattedMoves);
  }

  function determineGameOutcome() {
    if (game.in_checkmate()) {
      setGameOutcome(`${game.turn() === 'w' ? playerNames.black : playerNames.white} wins by checkmate!`);
      saveGameResult(game.turn() === 'w' ? playerNames.black : playerNames.white);
    } else if (game.in_draw() || game.in_stalemate() || game.in_threefold_repetition()) {
      setGameOutcome('The game is a draw!');
    } else {
      setGameOutcome(null);
    }
  }

  function downloadPGN() {
    const pgnContent = `[Event "Chess Game"]
[Site "Local"]
[Date "${new Date().toLocaleDateString()}"]
[White "${playerNames.white}"]
[Black "${playerNames.black}"]
[Result "${gameOutcome || '*'}"]

${game.pgn()}`;
    const blob = new Blob([pgnContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'chess_game.pgn';
    link.click();
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gray-200' style={{ backgroundImage: 'url("https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpMEPMs7.png")', backgroundSize: 'cover' }}>
      <div className='flex items-center justify-center border-black p-11'>
        {game ? (
          <div className='flex items-center justify-center h-[600px] w-[600px] border-4 border-solid border-black'>
            <Chessboard
              position={game.fen()}
              onPieceDrop={onDrop}
              onSquareClick={onSquareClick}
              customSquareStyles={
                possibleMoves.reduce((styles, move) => {
                  styles[move] = { background: 'rgba(0, 255, 0, 0.5)' };
                  return styles;
                }, {})
              }
            />
          </div>
        ) : null}
      </div>
      <div className='text-center mt-4 ml-4'>
        {gameOutcome && (
          <p className='font-bold text-4xl text-teal-400'>{gameOutcome}</p>
        )}
        <div className='mt-4'>
          {game ? (
            <button
              className='bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue'
              onClick={startNewGame}
            >
              Start New Game
            </button>
          ) : null}
        </div>
        <div className='mt-4'>
          {!game ? (
            <button
              className='bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue'
              onClick={promptForPlayerNames}
            >
              Start Game
            </button>
          ) : null}
        </div>
        <div className='mt-4'>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue'
            onClick={downloadPGN}
          >
            Download PGN
          </button>
          <Link to='/leaderboard'>
            <button
              className='bg-blue-500 ml-2 text-white py-2 px-4 rounded-full hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue'
            >
              LeaderBoard
            </button>
          </Link>
          <Link to='/game'>
            <button
              className='bg-blue-500 ml-2 text-white py-2 px-8 rounded-full hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue'
            >
              Back
            </button>
          </Link>
        </div>
        <div className='mt-4 h-50 border border-gray-300 p-4'>
          <h2 className='text-4xl font-bold mb-2 text-yellow-300'>Moves History</h2>
          <ul className='list-decimal pl-4 text-2xl text-orange-300 overflow-y-auto h-56'>
            {movesHistory.map((move, index) => (
              <ul key={index} className='mb-1'>
                {move}
              </ul>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Offline;
