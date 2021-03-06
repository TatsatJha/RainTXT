import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from "../middleware/mongodb"
import dir from "../models/dir"


async function handler( req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body
  } = req

  switch (method){
    case "GET":
      try {
        const dirs = await dir.find()
        let newDirs:Array<any> = []
        dirs.forEach((dir)=>{
          if(dir.parent == false){
            newDirs.push(dir)
          }
        })
        res.json(newDirs)
      } catch (err){res.status(500)}
      break;
    case "POST":
      const dirEntry = new dir({
        title: body.title,
        parent: body.parent,
        
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