import express from "express"
import cors from "cors"
import functions from "firebase-functions"
import {getCards, getEcard} from "./utils.js"


const app = express()
app.use(express.json())
app.use(cors())


app.get("/ping", (req,res)=>{
    console.log("API pinged...")
    res.send("API pinged...")
})


app.get("/cards/:uid", getCards)
app.get("/ecard/:cid", getEcard)



export const api = functions.https.onRequest(app)

