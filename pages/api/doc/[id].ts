import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from "../middleware/mongodb"
import Doc from "../models/doc"


async function handler( req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { id },
        method,
      } = req
    switch (method){
    case "GET":
        try {
            const doc = await Doc.findById(id)
            if(doc === null){res.status(404).json({message:"not found"})}
            res.status(200).json(doc)
        } catch (err){res.status(500)}
        break;
    case "PUT":
        const updatedDoc = new Doc({
            title: req.body.title,
          })
        try {
            const doc = await Doc.findById(id)
            console.log(doc)
            if(doc === null){res.status(404).json({message:"not found"})}

            await Doc.findByIdAndUpdate(id, {title: req.body.title})
            res.status(200).json(updatedDoc)
        } catch (err) {res.status(500)}
        break;
    case "DELETE":
        try {
        const doc = await Doc.findById(id)
        if(doc === null){res.status(404).json({message:"not found"})}
        await Doc.findByIdAndDelete(id)
        res.json(doc)
        } catch (error:any) {res.status(500)}
        break;
    default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`) 
        break;   
    }
}
  
export default connectDb(handler)