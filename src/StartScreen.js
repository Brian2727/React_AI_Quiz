import QuizPromptField from "./components/QuizPromptField";

export default function StartScreen ({ numQuestions, dispatch }) {
    return (
        <div className="start">
            <h2>Welcome To the AI Quiz</h2>
            <h3> Ask For a topic and difficulty to create a quiz of 10 Questions, Good luck!</h3>
            <QuizPromptField dispatch={dispatch}></QuizPromptField>
        </div>
    )
}
