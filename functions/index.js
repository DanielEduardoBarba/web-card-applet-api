import express from "express"
import cors from "cors"
import functions from "firebase-functions"

const app = express()
app.use(express.json())
app.use(cors())


app.get("/ping", (req,res)=>{
    console.log("API pinged...")
    res.send("API pinged...")
})



export const api = functions.https.onRequest(app)

