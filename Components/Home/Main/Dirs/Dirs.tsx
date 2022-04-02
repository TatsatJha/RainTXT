import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dir from "./Dir"
import Link from 'next/link'

export default function Dirs(props:any) {
    const [dir, setDirs] = useState<any[]>([])
        
    useEffect(()=> {
        const getDirs = async () => {
            setDirs(props.data)
        }
    getDirs()}, [dir])

    return (
        <div className='grid grid-cols-4 gap-4 justify-evenly ml-64 my-4'>
            {dir == null ? <></>: dir.map((dirs) => (<Dir title={dirs.title} id={dirs._id} v={dirs._v}></Dir>))}
        </div>
    )
}
