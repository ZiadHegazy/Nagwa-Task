import { useNavigate } from "react-router"
import "./Home.css"
export function Home(){
    const navigate=useNavigate()
    return(
        <div className="HomemainDiv">
            <div className="textDiv">
            <h1>English Practice</h1>
            <h2>Practice your english by answering question to differentiatie between different part of speech</h2>
            <button className="HomeBtn" onClick={()=>navigate("/question")}>Start Practicing</button>
            </div>
            {/* <div className="card">
            <p className="cookieHeading">Practice English</p>
            <p className="cookieDescription">Practice your english by answering question to differentiatie between different part of speech</p>

            <div className="buttonContainer">
                <button className="acceptButton" onClick={()=>navigate("/question")}>Start Practicing</button>
            
            </div>
            </div> */}


        </div>
    )
}