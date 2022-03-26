import SideBar from './SideBar'


export default function TextEditor(props:any) {

    return (
        <div className="">
            <input value= {props.text} onChange={(e)=>props.setText(e.target.value)} className='border-2 w-fit p-64' type="text"></input>
        </div>
    )
}
