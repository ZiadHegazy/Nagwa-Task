const express2=require("express")
import {Request, Response } from "express"
const router=express2.Router()
const fs = require('fs');
router.get("/wordlist",async function (req:Request,res:Response){
    
    fs.readFile("./src/routes/TestData.json",'utf8',(err:any,data:any)=>{
        if (err) {
            console.error('Error:', err);
            return;
          }
        
          try {
            const json = JSON.parse(data);
            let wordList=json.wordList
            let adverbs=wordList.filter((word:any)=>word.pos=="adverb")
            let adjectives=wordList.filter((word:any)=>word.pos=="adjective")
            let verbs=wordList.filter((word:any)=>word.pos=="verb")
            let nouns=wordList.filter((word:any)=>word.pos=="noun")
            let finalarr=[]
            
            const randomAdverb=adverbs[Math.floor(Math.random() * adverbs.length)]
            const randomAdjective=adjectives[Math.floor(Math.random() * adjectives.length)]
            const randomVerb=verbs[Math.floor(Math.random() * verbs.length)]
            const randomNoun=nouns[Math.floor(Math.random() * nouns.length)]
            wordList=wordList.filter((word:any)=>word.id!=randomAdverb.id)
            wordList=wordList.filter((word:any)=>word.id!=randomAdjective.id)
            wordList=wordList.filter((word:any)=>word.id!=randomVerb.id)
            wordList=wordList.filter((word:any)=>word.id!=randomNoun.id)
            
            finalarr.push(randomAdverb)
            finalarr.push(randomAdjective)
            finalarr.push(randomVerb)
            finalarr.push(randomNoun)
            for(var i=1;i<=6;i++){
                const randomWord=wordList[Math.floor(Math.random() * wordList.length)]
                finalarr.push(randomWord)
                wordList=wordList.filter((word:any)=>word.id!=randomWord.id)
            }
            console.log(finalarr)
            res.json(finalarr)

            // Process the JSON data
          } catch (error) {
            console.error('Error:', error);
          }
    })
    

})
router.post("/rank",function(req:Request,res:Response){
    var score:number=req.body.score
    fs.readFile("./src/routes/TestData.json",'utf8',(err:any,data:any)=>{
        if (err) {
            console.error('Error:', err);
            return;
          }
          const json = JSON.parse(data);
          let scoreList=json.scoresList
          var count=0
          for(var i=0;i<scoreList.length;i++){
            if(Number(scoreList[i])<Number(score)){
                count++
            }

          }
          let rank=count*1.0/scoreList.length
          rank=rank*100
          rank=Number(rank.toFixed(2))
          res.json(rank)
          

    })

})
module.exports=router