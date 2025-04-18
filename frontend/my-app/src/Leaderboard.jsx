
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Leaderboard.css'; // Importing CSS for styling

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([
        { username: 'TestUser1', total_score: 90, quizzes_taken: 2 },
        { username: 'TestUser2', total_score: 56, quizzes_taken: 4 },
        { username: 'TestUser3', total_score: 85, quizzes_taken: 3 }
    ]);
    const [loading, setLoading] = useState(false);
    //const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchLeaderboard = async () => {
    //         try {
    //             const response = await axios.get('/leaderboard');
    //             setLeaderboard(response.data);
    //         } catch (err) {
    //             setError('Error fetching leaderboard data. Please try again later.');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchLeaderboard();
    // }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="leaderboard-container">
            <h1>Leaderboard</h1>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Total Score</th>
                        <th>Quizzes Taken</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.length > 0 ? (
                        leaderboard.map((user, index) => (
                            <tr key={user.username}>
                                <td>{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.total_score}</td>
                                <td>{user.quizzes_taken}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No leaderboard data available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;