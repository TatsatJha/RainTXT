import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from "../middleware/mongodb"
import dir from "../models/dir"


async function handler( req: NextApiRequest, res: NextApiResponse) {


  switch (req.method){
    case "GET":
      try {
        const dirs = await dir.find()
        res.json(dirs)
      } catch (err){res.status(500)}
      break;
    case "POST":
      const dirEntry = new dir({
        title: req.body.title,
      })
      try {
        const newDir = await dirEntry.save()
        res.status(201).json(newDir)
      } catch (error: any) {
        res.status(400).json(error.message)
      }
      break;
    case "DELETE":
      try {
        const dirs = await dir.deleteMany()
        res.json(dirs)
      } catch (error:any) {res.status(500)}
      break;
  }
  
}
  
export default connectDb(handler)