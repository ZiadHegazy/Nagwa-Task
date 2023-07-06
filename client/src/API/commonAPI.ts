export const fetchWord=async()=>{
    const result=await fetch("http://localhost:8000/wordlist")
    return await result.json()
}
export const getRank=async(score:number)=>{
    const result=await fetch("http://localhost:8000/rank",{method:"POST",
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    
    },
    body: JSON.stringify({score:score})
    })
    return await result.json()
}