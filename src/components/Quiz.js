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
            setQuestionNumber(questionNumber += 1);
            console.log(questionNumber)
        } else {
            console.log("Try again...")
        }
    }

    function handleQ2(e) {
        if (e.target.textContent === quizData.quizData[1].correctAnswer) {
            console.log("CORRECT!")
            setQuestionNumber(questionNumber += 1);
            console.log(questionNumber)
        } else {
            console.log("Try again...")
        }
    }

    function handleQ3(e) {
        if (e.target.textContent === quizData.quizData[2].correctAnswer) {
            console.log("CORRECT!")
            setQuestionNumber(questionNumber += 1);
            console.log(questionNumber)
        } else {
            console.log("Try again...")
        }
    }

    function handleQ4(e) {
        if (e.target.textContent === quizData.quizData[3].correctAnswer) {
            console.log("CORRECT!")
            setQuestionNumber(questionNumber += 1);
            console.log(questionNumber)
        } else {
            console.log("Try again...")
        }
    }

    function handleQ5(e) {
        if (e.target.textContent === quizData.quizData[4].correctAnswer) {
            console.log("CORRECT!")
            setQuestionNumber(questionNumber += 1);
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

    const roundThreeQs = quizData.quizData[2].choices.map((choice, x) => {
        return <button onClick={handleQ3} className={`choice-button`}>{choice}</button>
        console.log("Choices: ", choice)
    })

    const roundFourQs = quizData.quizData[3].choices.map((choice, x) => {
        return <button onClick={handleQ4} className={`choice-button`}>{choice}</button>
        console.log("Choices: ", choice)
    })

    const roundFiveQs = quizData.quizData[4].choices.map((choice, x) => {
        return <button onClick={handleQ5} className={`choice-button`}>{choice}</button>
        console.log("Choices: ", choice)
    })

        let quizQuestion;
        let roundQuestions;
        if (questionNumber === 0) {
            console.log("QUESTION NUMBER: ", questionNumber)
            quizQuestion = quizData.quizData[0].question
            roundQuestions = roundOneQs
        } else if (questionNumber === 1) {
            console.log("QUESTION NUMBER: ", questionNumber)
            quizQuestion = quizData.quizData[1].question
            roundQuestions = roundTwoQs
        } else if (questionNumber === 2) {
            console.log("QUESTION NUMBER: ", questionNumber)
            quizQuestion = quizData.quizData[2].question
            roundQuestions = roundThreeQs
        } else if (questionNumber === 3) {
            console.log("QUESTION NUMBER: ", questionNumber)
            quizQuestion = quizData.quizData[3].question
            roundQuestions = roundFourQs
        } else if (questionNumber === 4) {
            console.log("QUESTION NUMBER: ", questionNumber)
            quizQuestion = quizData.quizData[4].question
            roundQuestions = roundFiveQs
        }

        // console.log("ROUND THREES: ", roundThreeQs)
        // let roundQuestions;
        // if (questionNumber === 0)
   
    
        return(
            <div className={`Quiz`}>
                <div className={`question-section`}>
                {quizQuestion}
                    {/* {questionNumber === 0 ? quizData.quizData[0].question : quizData.quizData[1].question} */}
                </div>
                <div className={`answer-section`}>
                    {roundQuestions}
                </div>
            </div>
        )

    
}

export default Quiz