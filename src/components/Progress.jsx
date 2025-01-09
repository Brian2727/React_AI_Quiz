export function Progress({index,numQuestions,points}) {
    return (
        <header className="progress">
            <progress className="progress-bar" value={index} max={numQuestions}/>
            <p>Question {index}/{numQuestions}</p>
            <p>{points}/{numQuestions} points</p>
        </header>
    )
}