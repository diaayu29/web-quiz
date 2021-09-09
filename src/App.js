import React, {useState} from 'react';
import DataQuestion from './QuestionIPADB.json';
import DataIPS from './QuestionIPSDB.json'
import Timers from './IPA';

function App() {

  const [getCount, setCount] = useState(1)
  const [getShowStartIPA, setShowStartIPA] = useState(false)
  const [getShowStartIPS, setShowStartIPS] = useState(false)
  const [getShowQuiz, setShowQuiz] = useState(false)
  const [getShowQuizIPS, setShowQuizIPS] = useState(false)
  const [getShowResult, setShowResult] = useState(false)
  const [getNilai, setNilai] = useState(0)
  const [getGreetingsUnder] = useState("Opsss!!")
  const [getGreetings] = useState("CONGRATS!!!")
  const [getStartQuiz, setStartQuiz] = useState(true)

  const showQuestion = () => {
    if(getCount === 20) {
      setShowResult(true)
      setShowQuiz(false)
    } else {
      let question = DataQuestion[getCount - 1].Question
      return <p>{question}</p>
    }
  }
  const showQuestionIPS = () => {
    if(getCount === 20) {
      setShowResult(true)
      setShowQuizIPS(false)
    } else {
      let question = DataIPS[getCount - 1].Question
      return <p>{question}</p>
    }
  }

  const showChoicesA = () => {
    let choiceA = DataQuestion[getCount - 1].choice_a
    return <span>{choiceA}</span>
  }
  const showChoicesB = () => {
    let choiceA = DataQuestion[getCount - 1].choice_b
    return <span>{choiceA}</span>
  }
  const showChoicesC = () => {
    let choiceA = DataQuestion[getCount - 1].choice_c
    return <span>{choiceA}</span>
  }
  const showChoicesD = () => {
    let choiceA = DataQuestion[getCount - 1].choice_d
    return <span>{choiceA}</span>
  }



  const showChoicesAIPS = () => {
    let choiceA = DataIPS[getCount - 1].choice_a
    return <span>{choiceA}</span>
  }
  const showChoicesBIPS = () => {
    let choiceA = DataIPS[getCount - 1].choice_b
    return <span>{choiceA}</span>
  }
  const showChoicesCIPS = () => {
    let choiceA = DataIPS[getCount - 1].choice_c
    return <span>{choiceA}</span>
  }
  const showChoicesDIPS = () => {
    let choiceA = DataIPS[getCount - 1].choice_d
    return <span>{choiceA}</span>
  }

  const handleHidden = () => {
    setShowStartIPA(false)
    setShowQuiz(true)
  }
  const handleHiddenIPS = () => {
    setShowStartIPS(false)
    setShowQuizIPS(true)
  }
  const handleHome = () => {
    setShowResult(false)
    setStartQuiz(true)
    setNilai(0)
    setCount(1)
  }

  const answer = (userAns) => {
    let userAnswer = userAns.target.textContent
    let correctAnswer = DataQuestion[getCount - 1].answer
    setCount(getCount + 1);
    if(userAnswer === correctAnswer) {
      setNilai(getNilai + 5)
    }
  }

  const answerIPS = (userAns) => {
    let userAnswer = userAns.target.textContent
    let correctAnswer = DataIPS[getCount - 1].answer
    setCount(getCount + 1);
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

  const awalIPA = () => {
    
    setShowStartIPA(true)
    
    setStartQuiz(false)
  }

  const awalIPS = () => {
    setShowStartIPS(true)
    
    setStartQuiz(false)
  }




  return (
    <div className="App">
    {
      getStartQuiz?
    
      <div className = "bg-pinkLight h-screen text-center">
        <div className =" absolute left-1/3 top-1/3">
        <p className = "font-bold">Selamat Datang di Quiz Web</p>
        <p>Temukan pelajaran yang anda inginkan disini !!</p>
        <p>Silahkan pilih pelajaran di bawah ini</p>
        <button className = "bg-buttonLight mt-12 mx-4 px-4 py-2 rounded-lg text-white" onClick = {awalIPA}>IPA</button>
        <button className = "bg-buttonLight px-4 py-2 rounded-lg text-white" onClick = {awalIPS}>IPS (Sejarah)</button>
        </div>
      </div>:null
      }

      {
        getShowStartIPS?
      <div className = "StartPage bg-purpleLight h-screen md:flex">
        <div className = "ShowRules md:w-2/4 text-center my-auto pt-16 md:pt-0">
          <p className = "font-extrabold">Aturan :</p>
          <p>Jumlah soal : 20</p>
          <p>Waktu : 40 menit</p>
          <p>Kelulusan minimal 80%</p>
        </div>

        <div className = "StartQuiz bg-pinkLight md:relative md:w-2/4">
          <button className = "bg-buttonLight absolute top-2/4 md:top-1/2 left-1/3 md:left-1/2 px-4 py-2 md:px-8 md:py-4 rounded-lg text-white" type = "button" onClick = {handleHiddenIPS}>Mulai</button>
        </div>
      </div>:null
      }

      {
      getShowQuizIPS?
      <div className = "PageQuiz bg-purpleLight md:flex h-screen">
      <p className = "absolute z-10 right-16 top-4 text-lg"><Timers></Timers></p>
        <div className="PageOne md:w-2/4 text-center my-auto md:relative">
          <p className = "font-bold">Pertanyaan</p>
          <div>{showQuestionIPS()}</div>
          <p className = "absolute right-10 top-3/4 md:top-36">{getCount} / 20</p>
         
        </div>
        <div className="PageTwo md:bg-pinkLight md:w-2/4 md:relative text-center">
          <div className = "absolute top-16 md:top-1/3 left-3 right-3 md:left-9">
            <button id= "choices" className = {`choices block mb-4 p-2 rounded-md text-white bg-buttonLight`} onClick = {answerIPS}>{showChoicesAIPS()}</button>
            <button id= "choices" className = {`choices block mb-4 p-2 rounded-md text-white bg-buttonLight`} onClick = {answerIPS}>{showChoicesBIPS()}</button>
            <button id= "choices" className = {`choices block mb-4 p-2 rounded-md text-white bg-buttonLight`} onClick = {answerIPS}>{showChoicesCIPS()}</button>
            <button id= "choices" className = {`choices block mb-4 p-2 rounded-md text-white bg-buttonLight`} onClick = {answerIPS}>{showChoicesDIPS()}</button>
          </div>
          
        </div>
      </div>:null
      }




    {
        getShowStartIPA?
      <div className = "StartPage bg-purpleLight h-screen md:flex">
        <div className = "ShowRules md:w-2/4 text-center my-auto pt-16 md:pt-0">
          <p className = "font-extrabold">Aturan :</p>
          <p>Jumlah soal : 20</p>
          <p>Waktu : 40 menit</p>
          <p>Kelulusan minimal 80%</p>
        </div>

        <div className = "StartQuiz bg-pinkLight md:relative md:w-2/4">
          <button className = "bg-buttonLight absolute top-2/4 md:top-1/2 left-1/3 md:left-1/2 px-4 py-2 md:px-8 md:py-4 rounded-lg text-white" type = "button" onClick = {handleHidden}>Mulai</button>
        </div>
      </div>:null
      }

    {
      getShowQuiz?
      <div className = "PageQuiz bg-purpleLight md:flex h-screen">
      <p className = "absolute z-10 right-16 top-4 text-lg"><Timers></Timers></p>
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
       getShowResult?
       <div className = "PageResult bg-purpleLight md:flex h-screen">
         <div className = "ShowResult md:w-2/4 text-center my-auto">
           <p className = "font-bold text-2xl">{greetings()}</p>
           <p>Nilai anda adalah {getNilai}</p>
         </div>
         <div className = "HomeButton bg-pinkLight md:w-2/4 md:relative">
           <button className = "absolute top-1/2 bg-buttonLight rounded-md text-xl md:py-4 md:px-6 px-4 py-3 text-white left-1/3 sm:left-80 md:left-1/2" type="button" onClick = {handleHome}>Home</button>
         </div>
       </div>:null
     }
     
    </div>
  );
}

export default App;
