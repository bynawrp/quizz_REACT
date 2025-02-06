import useQuizzContext from "../context/QuizzContext"

function Score(){
    const {state} = useQuizzContext()
    return (
        <div className="score">
            <span>Score : {state.score}</span>
        </div>
    )
}

export default Score