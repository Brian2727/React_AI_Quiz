import React, { useState } from 'react';
import './QuizPromptField.css';

function QuizPromptField({ dispatch }) {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!prompt) return;
        dispatch({ type: 'loading', payload: prompt });
    };

    return (
        <form onSubmit={handleSubmit} className="prompt-form">
            <div className="prompt-group">
                <label htmlFor="prompt">Quiz Topic</label>
                <input
                    type="text"
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your quiz topic and difficulty..."
                    required
                />
            </div>
            <button type="submit" className="btn">
                Start Quiz
            </button>
        </form>
    );
}

export default QuizPromptField;