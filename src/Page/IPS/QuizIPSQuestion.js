import React, {useState, useEffect} from 'react';
import DataQuestion from './QuestionIPSDB.json'
import Result from '../result';

function ShowQuestionIPS() {
  const [getStartQuiz, setStartQuiz] = useState(true)
  const [getResult, setResult] = useState(false)
  const [getCount, setCount] = useState(1)
  const [getNilai, setNilai] = useState(0)
  const [getGreetingsUnder] = useState("Opsss!!")
  const [getGreetings] = useState("CONGRATS!!!")

  const showQuestion = () => {
    if(getCount <= 20) {
      let question = DataQuestion[getCount - 1].Question
      return <p>{question}</p> 
    } else {
      setResult(true)
      setStartQuiz(false)
    }
  }

  const ShowResultNilai = () => {
    setResult(true)
    setStartQuiz(false)
  }

  
  const showChoicesA = () => {
    if(getCount <= 20) {
    let choiceA = DataQuestion[getCount - 1].choice_a
    return <span>{choiceA}</span>
    }
  }
  const showChoicesB = () => {
    if(getCount <= 20) {
    let choiceA = DataQuestion[getCount - 1].choice_b
    return <span>{choiceA}</span>
    }
  }
  const showChoicesC = () => {
    if(getCount <= 20) {
    let choiceA = DataQuestion[getCount - 1].choice_c
    return <span>{choiceA}</span>
    }
  }
  const showChoicesD = () => {
    if(getCount <= 20) {
    let choiceA = DataQuestion[getCount - 1].choice_d
    return <span>{choiceA}</span>
    }
  }
  const answer = (userAns) => {
    if(getCount <= 20) {
      setCount(getCount + 1);
    }
    let userAnswer = userAns.target.textContent
    let correctAnswer = DataQuestion[getCount - 1].answer
    if(userAnswer === correctAnswer) {
      setNilai(getNilai + 5)
    }
  }
  const greetings = () => {
    if(getNilai <= 80) {
       return getGreetingsUnder
    } else {
      return getGreetings
    }
   }

   const Timers = (props) => {
    const {initialMinute = 2,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                  if(getCount <= 20) {
                    setCount(getCount + 1);
                  } else {
                    ShowResultNilai()
                  }
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
   return (
      <span>
        <span> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</span> 
      </span>
    )
  }
  return (
    <div>
    { getStartQuiz ?  
    <div className = "PageQuiz bg-purpleLight md:flex h-screen">
    <p className = "absolute z-10 right-16 top-4 text-lg"><Timers /></p>
      <div className="PageOne md:w-2/4 text-center my-auto md:relative">
        <p className = "font-bold">Pertanyaan</p>
        <div>{showQuestion()}</div>
        <p className = "absolute right-10 top-3/4 md:top-36">{getCount} / 20</p>
       
      </div>
      <div className="PageTwo md:bg-pinkLight md:w-2/4 md:relative text-center">
        <div className = "absolute top-16 md:top-1/3 left-3 right-3 md:left-9">
          <button id= "choices" className = {`choices block mb-4 p-2 rounded-md text-white bg-buttonLight`} onClick = {answer}>{showChoicesA()}</button>
          <button id= "choices" className = {`choices block mb-4 p-2 rounded-md text-white bg-buttonLight`} onClick = {answer}>{showChoicesB()}</button>
          <button id= "choices" className = {`choices block mb-4 p-2 rounded-md text-white bg-buttonLight`} onClick = {answer}>{showChoicesC()}</button>
          <button id= "choices" className = {`choices block mb-4 p-2 rounded-md text-white bg-buttonLight`} onClick = {answer}>{showChoicesD()}</button>
          
        </div>
        </div>
      </div>:null
      }
      {
            getResult ? 
            <Result ShowResult = {getNilai} Greetings = {greetings()}/>:null
          }
    </div>
  )
}

export default ShowQuestionIPS