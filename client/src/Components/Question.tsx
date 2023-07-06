import { useEffect, useState } from "react"
import "./Question.css"
import { fetchWord } from "API/commonAPI"
import { useNavigate } from "react-router"
export function Question(){
    const navigate=useNavigate()
    const [questions,setQuestions]=useState([] as any)
    const [index,setIndex]=useState(0)
    const [selectedAnswer,setSelectedAnswer]=useState("")
    const[correctAnswers,setCorrectAnswers]=useState(0)
    const[confirm,setConfirm]=useState(false)
    useEffect(()=>{
        if(index==10){
            navigate("/rank",{state:correctAnswers*10})
        }
        const begin=async()=>{
            setQuestions(await fetchWord())
        }
        if(index==0){

            begin()
        }
        console.log(questions)
    },[])
    console.log(questions)
    const handleChooseAnswer=(event:any)=>{
        if(!confirm)
        setSelectedAnswer(event.target.value)
    }
    const handleNext=()=>{
        
        setIndex(index+1)
        setConfirm(false)
        setSelectedAnswer("")
        if(index==9){
            navigate("/rank",{state:correctAnswers*10})
        }
    }
    const handleConfirm=()=>{
        if(selectedAnswer==""){
            alert("Choose an answer please")
        }else{
            setConfirm(true)
            if(selectedAnswer.toLocaleLowerCase()==questions[index].pos.toLocaleLowerCase()){
                setCorrectAnswers(correctAnswers+1)
            }
        }
    }
    return(
        <div className="QuestionmainDiv">
            {questions && questions.length!=0 && <div className="QuestionDiv">
                <h1>Question {index+1}/10</h1>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                <progress style={{width:"20vw",height:"5vh"}} value={index} max={10}/>
                {(index/10)*100}%
                </div>
                <div className="questionitself">
                <h2>What is the type of '{questions[index].word}'</h2>
                <div className="questiondiv1"><label style={{fontSize:"1.2rem"}}><input onChange={handleChooseAnswer} type="radio" checked={selectedAnswer=="Adverb"} value="Adverb" style={{color:"white"}}/> Adverb</label>
                <label style={{fontSize:"1.2rem"}}><input onChange={handleChooseAnswer}  type="radio" checked={selectedAnswer=="Adjective"} value="Adjective" style={{color:"white"}}/> Adjective</label>
                <label style={{fontSize:"1.2rem"}}><input onChange={handleChooseAnswer}  type="radio" checked={selectedAnswer=="Verb"} value="Verb" style={{color:"white"}}/> Verb</label>
                <label style={{fontSize:"1.2rem"}}><input onChange={handleChooseAnswer}  type="radio" checked={selectedAnswer=="Noun"} value="Noun" style={{color:"white"}}/> Noun</label>
                 </div>
                </div>
                 <br></br>
                 {!confirm && <button onClick={handleConfirm} className="HomeBtn">Confirm</button>}
                 {confirm && <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}><h3 style={{color:selectedAnswer.toLocaleLowerCase()==questions[index].pos.toLocaleLowerCase()? "green":"red"}}>{selectedAnswer.toLocaleLowerCase()==questions[index].pos.toLocaleLowerCase()? "Correct Answer":"Wrong Answer"}</h3> <button onClick={handleNext} className="HomeBtn">Next</button></div> }
                

            </div>}

        </div>
    )
}