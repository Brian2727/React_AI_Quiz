export function FinishedScreen({points,numQuestions,dispatch}) {
    const percentage = (points / numQuestions) * 100;
    let emoji;
    if (percentage === 100){
        emoji = '🥇'

    }
    else if (percentage >= 87){
        emoji = '🥈'
    }
    else if (percentage >= 74){
        emoji = '🦙'
    }
    else{
        emoji = '🪠'
    }
    return (
        <>
        <p className={'result'}>
           <span>{emoji}</span> You scored <strong>{points}</strong> out of <strong>{numQuestions}</strong>
        </p>
            <button className={'btn btn-ui'} onClick={() => dispatch({type:'restart'})}>Restart Quiz</button>
            </>
    )
}