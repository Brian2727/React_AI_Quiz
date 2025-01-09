import React, { useState } from 'react';
export const QuizPromptField = ({dispatch}) => {


    const [prompt, setPrompt] = useState('');

    const handleChange = (event) => {
        setPrompt(event.target.value);
    };

    return (
        <div style={{padding: '20px'}} className="start">
              <textarea
                  value={prompt}
                  onChange={handleChange}
                  placeholder="Type your prompt here..."
                  rows="6"
                  cols="50"
                  style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '12px',
                      border: '1px solid #ccc',
                      fontSize: '16px',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                  }}
              />
            <button style={{marginTop: '20px'}} className={'btn btn-ui'} onClick={() => dispatch({type: 'loading',payload:prompt})}>Start</button>
        </div>
    )
}

export default QuizPromptField;