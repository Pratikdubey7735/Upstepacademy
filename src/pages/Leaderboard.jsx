import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getLeaderboard');
        setLeaderboardData(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboardData();
  }, []);

  const playerWins = {};
  leaderboardData.forEach((result) => {
    const winner = result.winner.toLowerCase();
    if (playerWins[winner]) {
      playerWins[winner]++;
    } else {
      playerWins[winner] = 1;
    }
  });

  const sortedPlayers = Object.keys(playerWins).sort((a, b) => playerWins[b] - playerWins[a]);
  const topThreePlayers = sortedPlayers.slice(0, 3);

  return (
    <div  style={{ backgroundImage: 'url("https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpMEPMs7.png")', backgroundSize: 'cover', 
    height: '100vh'  }}>
    <div className="container mx-auto p-4">
      <h2 className="text-6xl font-bold mb-4 text-green-300 text-center">Leaderboard</h2>
      <table className="min-w-full border border-gray-300 bg-white shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Game ID</th>
            <th className="border px-4 py-2">White Player</th>
            <th className="border px-4 py-2">Black Player</th>
            <th className="border px-4 py-2">Winner</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData
            .filter((result) => topThreePlayers.includes(result.winner.toLowerCase()))
            .map((result, index) => (
              <tr key={result._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
                <td className="border px-4 py-2">{result._id}</td>
                <td className="border px-4 py-2">{result.playerNames.white}</td>
                <td className="border px-4 py-2">{result.playerNames.black}</td>
                <td className={`border px-4 py-2 ${result.winner === 'white' ? 'text-green-500' : 'text-red-500'}`}>
                  {result.winner}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    <Link to='/'><button
            className='bg-blue-500 ml-2 text-white py-2 px-8 rounded-full hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue' 
          >
          Back
          </button>
      </Link>
    </div>
  );
};

export default Leaderboard;
