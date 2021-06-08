import React from "react";
import Question from "./Question";
import Answer from "./Answer";
import quizData from "./quiz-data.json";


function Quiz() {
    console.log(quizData.quizData)
    // const questionArray = quizData.quizData.map((dp, x) => {
    //     return <p>{dp.question}</p>
    // })
    // const questionArray = 


    return(
        <div className={`Quiz`}>
            <div className={`question-section`}>
                <Question />
            {/* {questionArray} */}
            </div>
            <div className={`answer-section`}>
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>
        </div>
    )
}

export default Quiz