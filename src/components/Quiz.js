import React, {useState, useEffect} from "react";
import Question from "./Question";
import Answer from "./Answer";
import quizData from "./quiz-data.json";


function Quiz() {
    let [questionNumber, setQuestionNumber] = useState(0)
    console.log("quizData: ", quizData)
    console.log("quizData.quizData: ", quizData.quizData)

    function handleQ1(e) {
        if (e.target.textContent === quizData.quizData[0].correctAnswer) {
            console.log("CORRECT!")
            setQuestionNumber(questionNumber += 1)
            console.log(questionNumber)
        } else {
            console.log("Try again...")
        }
    }

    function handleQ2(e) {
        if (e.target.textContent === "Olaf") {
            console.log("CORRECT!")
            questionNumber += 1;
            console.log(questionNumber)
        } else {
            console.log("Try again...")
        }
    }

    const roundOneQs = quizData.quizData[0].choices.map((choice, x) => {
        return <button onClick={handleQ1} className={`choice-button`}>{choice}</button>
        console.log("Choices: ", choice)
    })

    const roundTwoQs = quizData.quizData[1].choices.map((choice, x) => {
        return <button onClick={handleQ2} className={`choice-button`}>{choice}</button>
        console.log("Choices: ", choice)
    })

   
    
        return(
            <div className={`Quiz`}>
                <div className={`question-section`}>
                    {questionNumber === 0 ? quizData.quizData[0].question : quizData.quizData[1].question}
                </div>
                <div className={`answer-section`}>
                    {questionNumber === 0 ? roundOneQs : roundTwoQs}
                </div>
            </div>
        )
    
    
}

export default Quiz