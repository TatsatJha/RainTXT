import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Doc from "./Doc"

export default function docs() {
    const [doc, setDocs] = useState<any[]>([])

        
    useEffect(()=> {
        const getDocs = async () => {
            await axios.get("http://localhost:3000/api/doc").then((response) => {
                const docs = response.data
                setDocs(docs)
            })
        }
    getDocs()}, [doc])
    

    return (
        <div className='grid grid-cols-4 gap-4 justify-evenly ml-64'>
            {/* {doc.map((doc) => (<Doc date={doc.date} title={doc.title} content={doc.content} id={doc._id} v={doc._v} ></Doc>))} */}
            {doc.map((doc) => (<Doc data = {{...doc}}> </Doc>))}

        </div>
    )
}
