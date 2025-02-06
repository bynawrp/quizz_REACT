import { useEffect } from "react"
import useQuizzContext from "../context/QuizzContext"

function Timer() {
  const { state, dispatch } = useQuizzContext()

  useEffect(() => {
    if (state.timeLeft > 0) {

      if(state.currentQuestion < state.questions.length){
        const timer = setTimeout(() => {
          dispatch({ type: "TIMER" })
        }, 1000);

        return () => clearTimeout(timer)
      }else{
        dispatch({ type: "END" })
      }
    }
  }, [state.timeLeft])

  let timerClass = "timer";
  if (state.timeLeft <= 5) {
    timerClass = "timer danger";
  } else if (state.timeLeft <= 10) {
    timerClass = "timer warning";
  }

  return (
    <div className="timer-container">
      <div className={timerClass}>
        <span>{state.timeLeft}</span>
      </div>
    </div>
  );
}

export default Timer