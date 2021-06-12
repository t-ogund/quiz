import React from "react";
import Question from "./Question";
import Answer from "./Answer";
import quizData from "./quiz-data.json";


function Quiz() {
    // console.log(quizData.quizData)
    // const answerArray = quizData.quizData.map((dp, x) => {
    //     // return <p>{dp.answer}</p>
    //     console.log(dp.choices)
    //     console.log(`${dp.choices[x]} is an answer option`)
    //     return <p>{dp.choices[0]} is the correct answer.</p>
    // })
    console.log("Quiz Data: ", quizData.quizData)

    

    const firstChoices = quizData.quizData[0].choices.map(choice => {

        function handleClick(e) {
            console.log(e.target.textContent)
            if (e.target.textContent === quizData.quizData[0].correctAnswer) {
                console.log("CORRECT!")
            } else {
                console.log("Try again...")
            }
        }

        return(
            <button onClick={handleClick} className={`choice-button`}>{choice}</button>
        )
    })
    


    return(
        <div className={`Quiz`}>
            <div className={`question-section`}>
                <Question />
            {/* {questionArray} */}
            </div>
            <div className={`answer-section`}>
                {firstChoices}
            </div>
        </div>
    )
}

export default Quiz