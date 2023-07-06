import { useLocation, useNavigate } from "react-router"
import "./Rank.css"
import { useEffect, useState } from "react"
import { getRank } from "API/commonAPI"
export function Rank(){
    const location=useLocation()
    const navigate=useNavigate()
    const score=location.state
    const[rank,setRank]=useState(0)
    useEffect(()=>{
        async function begin() {
            setRank(await getRank(Number(score)))
        }
        begin()
    })
    return(
        <div className="RankMainDiv">
            <h1>Your rank is {rank}</h1>
            <button className="HomeBtn" onClick={()=>navigate("/question")}>Try Again</button>

        </div>
    )
}