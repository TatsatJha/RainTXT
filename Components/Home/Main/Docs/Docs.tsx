import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Doc from "./Doc"

export default function docs(props:any) {
    const [doc, setDocs] = useState<any[]>([])
    const [refresh, setRefresh] = useState<any>(false)
    const [docUI, setDocUI] = useState<any>()
        
    useEffect(()=> {
        const getDocs = async () => {
            // await axios.get("http://localhost:3000/api/doc").then((response) => {
            //     const docs = response.data
            //     setDocs(docs)
            //     console.log(doc)
            //     const docUI =  doc.map((doc) => (<Doc data = {{...doc}} refresh= {refresh} setRefresh={setRefresh}> </Doc>))
            //     setDocUI(docUI)
            // })
            setDocs(props.data)
            console.log(doc)
        }
    getDocs()}, [refresh])
    
    return (
        <div className='grid grid-cols-4 gap-4 justify-evenly ml-64'>
            {/* {doc.map((doc) => (<Doc date={doc.date} title={doc.title} content={doc.content} id={doc._id} v={doc._v} ></Doc>))} */}
            {doc.map((doc) => (<Doc data = {{...doc}} refresh= {refresh} setRefresh={setRefresh}> </Doc>))}
        </div>
    )
}
