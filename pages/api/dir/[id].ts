import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from "../middleware/mongodb"
import Dir from "../models/dir"


async function handler( req: NextApiRequest, res: NextApiResponse) {
    const {
      query: { id },
      method,
    } = req

    switch (method){

    case "GET":
      try {
        const dir = await Dir.findById(id)
        if(dir === null){res.status(404).json({message:"not found"})}
        res.status(200).json(dir)
      } catch (err){res.status(500)}
      break;

    case "PATCH":
      try{
        const oldDir = await Dir.findById(id)
        if(oldDir === null){res.status(404).json({message:"not found"})}
        
        const {dirs, docs, parent} = req.body
        const updatedDir = dirs != null ? {dirs: dirs} : docs != null ? {docs: docs} : {parent: parent}


        await Dir.findByIdAndUpdate(id, updatedDir)
        res.status(200).json(updatedDir)
      } catch (err) {res.status(500)}

        break;

    case "DELETE":
      try {
        const dir = await Dir.findById(id)
        if(dir === null){res.status(404).json({message:"not found"})}
        await dir.findByIdAndDelete(id)
        res.json(dir)
        } catch (error:any) {res.status(500)}
        break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', "PATCH", 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`) 
      break;
    }
  
}
  
export default connectDb(handler)