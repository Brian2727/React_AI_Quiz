import QuizPromptField from "./components/QuizPromptField";
import {useAuth} from "./components/Context/AuthContext";
import { useEffect, useState } from 'react';

export default function StartScreen ({ numQuestions, dispatch }) {
    const {user} = useAuth();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`start ${isVisible ? 'start-visible' : ''}`}>
            <div className="start-content">
                <h2 className="start-title">
                    Welcome To the AI Quiz
                    <span className="user-email">{user.email}</span>
                </h2>
                <h3 className="start-subtitle">
                    Ask For a topic and difficulty to create a quiz of 10 Questions, Good luck!
                </h3>
                <div className="prompt-field-container">
                    <QuizPromptField dispatch={dispatch} />
                </div>
            </div>
        </div>
    );
}
