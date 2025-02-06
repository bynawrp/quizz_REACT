import useQuizzContext from "../context/QuizzContext"
import Question from "./Question"
import Score from "./Score"

function Quizz(){
    const {state, dispatch} = useQuizzContext()

    function onRestartQuizz(){
        dispatch({
            type : "RESET"
        })
    }
    
    return (
        <>  
            {!state.quizzEnable ? 
            
                <div className="quiz-finished">
                    <p>Votre score est de {state.score}/{state.questions.length}</p>
                    <button onClick={onRestartQuizz}>Recommencer le quizz</button>
                </div>
                :
                <div className="quizz-container">
                    <Question/>
                    <Score/>
                </div>
            }
            
        </>
    )
}

export default Quizz