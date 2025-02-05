import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './FinishedScreen.css';

export function FinishedScreen({points, maxPossiblePoints, dispatch}) {
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [showConfetti, setShowConfetti] = useState(true);

    const detectSize = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        const timer = setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds

        return () => {
            window.removeEventListener('resize', detectSize);
            clearTimeout(timer);
        };
    }, []);

    console.log(maxPossiblePoints);
    const percentage = (points / maxPossiblePoints ) * 100;
    
    const getEmoji = () => {
        if (percentage === 100) return '🏆';
        if (percentage >= 80) return '🎉';
        if (percentage >= 60) return '🌟';
        if (percentage >= 40) return '👍';
        return '💪';
    };

    const getMessage = () => {
        if (percentage === 100) return 'Perfect Score! Incredible!';
        if (percentage >= 80) return 'Excellent Work!';
        if (percentage >= 60) return 'Well Done!';
        if (percentage >= 40) return 'Good Effort!';
        return 'Keep Practicing!';
    };

    const shouldShowConfetti = percentage >= 60 && showConfetti;

    return (
        <div className="finished-screen">
            {shouldShowConfetti && (
                <Confetti
                    width={windowDimension.width}
                    height={windowDimension.height}
                    numberOfPieces={200}
                    recycle={false}
                    colors={['#3b82f6', '#2563eb', '#1d4ed8', '#60a5fa', '#93c5fd']}
                    gravity={0.3}
                />
            )}
            <div className="result-container">
                <div className="emoji-container">
                    <span className="result-emoji">{getEmoji()}</span>
                </div>
                <h2 className="result-message">{getMessage()}</h2>
                <div className="score-container">
                    <p className="score-text">
                        You scored <span className="points">{points}</span> out of <span className="total">{maxPossiblePoints}</span>
                    </p>
                    <div className="percentage-bar">
                        <div 
                            className="percentage-fill" 
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                    <p className="percentage-text">{Math.round(percentage)}%</p>
                </div>
            </div>
            <button 
                className="restart-button"
                onClick={() => dispatch({type: 'restart'})}
            >
                Try Again
                <span className="restart-icon">↺</span>
            </button>
        </div>
    );
}