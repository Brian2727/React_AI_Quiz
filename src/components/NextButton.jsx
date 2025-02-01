import React from 'react';
import './NextButton.css';

export function NextButton({dispatch, answer}) {
    if (answer === null) return null;

    return (
        <button 
            className="next-button"
            onClick={() => dispatch({type: "nextQuestion"})}
        >
            Next
            <span className="arrow">→</span>
        </button>
    );
}