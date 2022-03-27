import React from 'react'

function Page(props:any) {
  return (
    <div>
        <div className="flex justify-center">
            <textarea style={
                {
                    border: "none",
                    outline: "none",
                    resize: "none",
                    overflow: "hidden"
                }
            } maxLength={3000} value= {props.text}  onChange={(e)=>{ props.setText(e.target.value)} } className='border-2 px-[1in] py-[1in] w-[8.5in] h-[11in] shadow-xl mt-28'></textarea>
        </div>
    </div>
  )
}

export default Page