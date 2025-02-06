import {createContext, useContext} from "react";
import useQuizzReducer from "../reducer/QuizzReducer.jsx";

const QuizzContext = createContext()

export function QuizzProvider({children}){
    const [state, dispatch] = useQuizzReducer();
    return <QuizzContext.Provider value={{state, dispatch}}>{children}</QuizzContext.Provider>
}

function useQuizzContext(){
    return useContext(QuizzContext)
}

export default useQuizzContext