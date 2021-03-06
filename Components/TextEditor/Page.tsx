import React, { useEffect, useState } from 'react'

function Page(props:any) {
    const [count, setCount] = useState(3000)
    const [localText, setLocalText] = useState(props.text)

    // useEffect(()=> { 
    //     const change = () => {
    //         const newCount = count-1
    //         setCount(newCount)
    //     }
    // change()}, [props.text])

  //   const handler = (e:any) => {
  //     setLocalText(e.target.value)
  //   }
  //   useEffect(()=> {
  //     const setDivisions = () => {
  //       let newArray:any = []
  //       props.allText.forEach((text: any, index:any) => {
  //         if(index === props.index){
  //           newArray.push(localText)
  //         }
  //         else if(text===""){
  //         }
  //         else{
  //           newArray.push(text)
  //         }
  //       });
  //       props.setTextDivisions(newArray)
  //     }
  // setDivisions()}, [localText])

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
            } value = {props.text}  onChange={(e)=>props.setText(e.target.value)} className='border-2 px-[1in] py-[1in] w-[8.5in] h-[11in] inline shadow-xl mt-28'></textarea>
            <canvas width="8.5in" height="11in"></canvas>
        </div>
    </>
  )
}

export default Page