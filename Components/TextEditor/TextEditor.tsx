import SideBar from './SideBar'


export default function TextEditor(props:any) {

    return (
        <div className="flex justify-center">
            <textarea style={
                {
                    border: "none",
                    outline: "none",
                    resize: "none"
                }
            } value= {props.text} onChange={(e)=>props.setText(e.target.value)} className='border-2 px-[1in] py-[1in] w-[8.5in] h-[11in] shadow-xl mt-32'></textarea>
        </div>
    )
}
