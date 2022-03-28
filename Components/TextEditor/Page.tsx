import React, { useEffect, useState } from 'react'

function Page(props:any) {
    // const [localText, setLocalText] = useState(props.text)
    const [count, setCount] = useState(3000)

    // useEffect(()=> { 
    //     const change = () => {
    //         const newCount = count-1
    //         setCount(newCount)
    //     }
    // change()}, [props.text])


  return (
      <>
        <div className="flex justify-center">
            <textarea style={
                {
                    border: "none",
                    outline: "none",
                    resize: "none",
                    overflow: "hidden"
                }
            } maxLength={3000} value= {props.text[props.key]}  onChange={ (e) => props.setText(...props.text, e.target.value) } className='border-2 px-[1in] py-[1in] w-[8.5in] h-[11in] shadow-xl mt-28'></textarea>
        </div>
    </>
  )
}

export default Page