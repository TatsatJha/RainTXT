import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from "../middleware/mongodb"
import doc from "../models/doc"


async function handler( req: NextApiRequest, res: NextApiResponse) {


  switch (req.method){
    case "GET":
      try {
        const docs = await doc.find()
        res.json(docs)
      } catch (err){res.status(500)}
      break;
    case "POST":
      const date = new Date
      const month = new Intl.DateTimeFormat("en-us", {month: "long"}).format(date)
      const docEntry = new doc({
        title: req.body.title,
        content: req.body.content,
        date: `${month} ${date.getDate()}, ${date.getFullYear()}`
      })
      try {
        const newDoc = await docEntry.save()
        res.status(201).json(newDoc)
      } catch (error: any) {
        res.status(400).json(error.message)
      }
      break;
    case "DELETE":
      try {
        const docs = await doc.deleteMany()
        res.json(docs)
      } catch (error:any) {res.status(500)}
      break;
  }
  
}
  
export default connectDb(handler)