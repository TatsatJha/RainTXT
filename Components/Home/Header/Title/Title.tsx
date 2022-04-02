import Link from 'next/link'
import React from 'react'

export default function Title(props:any) {
    if(props.page === "/"){
        return (
            <Link href={"/"}>
                <h1 className='text-5xl p-6'>RainTXT</h1>
            </Link>
        )
    }
    else{
        return (
            <Link href={"/"}>
                <h1 className='text-5xl p-6 fixed top-0 left-0 z-10'>RainTXT</h1>
            </Link>
        )   
    }
}
