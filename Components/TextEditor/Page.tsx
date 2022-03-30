import React, { useEffect, useState } from 'react'

function Page(props:any) {
    const [count, setCount] = useState(3000)
    const text = props.text
    const [localText, setLocalText] = useState(text)

    // useEffect(()=> { 
    //     const change = () => {
    //         const newCount = count-1
    //         setCount(newCount)
    //     }
    // change()}, [props.text])

    const handler = (e:any) => {
      setLocalText(e.target.value)
    }
      useEffect(()=>{
    const setDivisions = () =>{
    }
  setDivisions()}, [localText])

  return (
      <>
        <div className="flex justify-center">
      {console.log(...props.allText)}
            <textarea style={
                {
                    border: "none",
                    outline: "none",
                    resize: "none",
                    overflow: "hidden"
                }
            } value= {localText || props.text}  onChange={handler} className='border-2 px-[1in] py-[1in] w-[8.5in] h-[11in] shadow-xl mt-28'></textarea>
        </div>
    </>
  )
}

export default Page