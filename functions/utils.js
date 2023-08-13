import { initializeApp, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import service_account from "./service_account.json" assert {type: "json"}

initializeApp({
    credential:cert(service_account)
})
const db = getFirestore()


export function getCards(req,res){

    const uid = req.params.uid
    db.collection("cards").get()
    .then(rawData=>{
        const cardsUIDmatch = []
        const cardsAll = rawData.docs.filter(doc=>{
                        let _card = doc.data()
                        _card.id = doc.id
                       if(_card.uid == uid) cardsUIDmatch.push(_card)
                       return _card
                    })

        res.send(cardsUIDmatch)
    })
}

export function getEcard(req,res){

    const cid = req.params.cid
    db.collection("cards").get()
    .then(rawData=>{
        let cardUIDmatch = {}
        const cardsAll = rawData.docs.filter(doc=>{
                        let _ecard = doc.data()
                        _ecard.id = doc.id
                        console.log(_ecard.id ,"---", cid)
                       if(_ecard.id == cid) cardUIDmatch = _ecard
                       return _ecard
                    })

        res.send(cardUIDmatch)
    })




}