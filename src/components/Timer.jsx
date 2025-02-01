import React, { useEffect } from 'react';
import './Timer.css';

export function Timer({ dispatch, secondsRemaining }) {
    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'tick' });
        }, 1000);

        return () => clearInterval(id);
    }, [dispatch]);

    const getTimerColor = () => {
        if (secondsRemaining <= 10) return 'danger';
        if (secondsRemaining <= 30) return 'warning';
        return 'normal';
    };

    return (
        <div className={`timer-container ${getTimerColor()}`}>
            <div className="timer-circle">
                <svg className="timer-progress" viewBox="0 0 36 36">
                    <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={`${(secondsRemaining / 300) * 100}, 100`}
                    />
                </svg>
                <div className="timer-display">
                    <span className="timer-value">
                        {mins < 10 ? `0${mins}` : mins}:{seconds < 10 ? `0${seconds}` : seconds}
                    </span>
                </div>
            </div>
        </div>
    );
}