import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dir from "./Dir"

export default function Dirs() {
    const [dir, setDirs] = useState<any[]>([])
        
    useEffect(()=> {
        const getDirs = async () => {
            await axios.get("http://localhost:3000/api/dir").then((response) => {
                const dirs = response.data
                setDirs(dirs)
            })
        }
    getDirs()}, [dir])

    return (
        <div className='grid grid-cols-4 gap-4 justify-evenly ml-64'>
            {dir.map((dirs) => (<Dir title={dirs.title} id={dirs._id} v={dirs._v}></Dir>))}
        </div>
    )
}
