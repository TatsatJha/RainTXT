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
            {doc.map((docs) => (<Doc date={docs.date} title={docs.title} content={docs.content} id={docs._id} v={docs._v}></Doc>))}
        </div>
    )
}
