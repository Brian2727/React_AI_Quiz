import React from 'react';
import './Options.css';

export function Options({question, dispatch, answer}) {
    const hasAnswered = answer !== null;

    return (
        <div className="options-container">
            {question.options.map((option, index) => (
                <button
                    key={option}
                    className={`option ${index === answer ? "answer" : ""} 
                              ${hasAnswered 
                                ? index === question.correctOption 
                                    ? "correct" 
                                    : index === answer 
                                        ? "wrong" 
                                        : "" 
                                : ""}`}
                    onClick={() => dispatch({type: "newAnswer", payload: index})}
                    disabled={hasAnswered}
                    style={{"--animation-order": index}}
                >
                    {option}
                    {hasAnswered && (index === question.correctOption || index === answer) && (
                        <span className="icon">
                            {index === question.correctOption ? "✓" : "✗"}
                        </span>
                    )}
                </button>
            ))}
        </div>
    );
}