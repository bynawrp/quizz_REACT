import { useEffect } from "react";
import useQuizzContext from "../context/QuizzContext";
import Answer from "./Answer";
import Timer from "./Timer";

function Question() {
  const { state, dispatch } = useQuizzContext();
  const currentQuestion = state.questions[state.currentQuestion];

  useEffect(() => {
    if (state.timeLeft === 0) {
      dispatch({ type: "NEXT" })
    }
  }, [state.timeLeft, dispatch]);

  function checkAnswer(answer) {

    if (state.currentQuestion < state.questions.length - 1) {
        dispatch({
            type: "CHECK",
            payload: answer,
        });

        dispatch({
            type: "NEXT",
        });

    } else {
        dispatch({
            type: "END",
        });
    }
  }

  return (
    <>
      <Timer />
      <h2 className="question">{currentQuestion.question}</h2>
      <div className="answers">
        {currentQuestion.options.map((option, i) => (
          <Answer value={option} key={i} func={checkAnswer} />
        ))}
      </div>
    </>
  );
}

export default Question;
