import SideBar from './SideBar'
import Page from "./Page"
import ToolBar from './ToolBar'
import { useEffect, useState, useRef, MutableRefObject } from 'react'

export default function TextEditor(props:any) {

    // const [division, setDivisions] = useState<Array<string>>([""])
    
    // useEffect(()=> { 
    //     const divide = (text: string, length: number,  divisions: Array<string>) =>{

    //         if(length<=0){
    //             setDivisions(divisions)
    //             console.log(divisions)
    //         }
    //         else{
    //             //logic for adding 3000 worth of text to array
    //             const truncatedText = text.substring(0, 3000)
    //             divisions.push(truncatedText)
    //             const newText = text.substring(3000)
    //             const newLength = length - 3000

    //             console.log(newLength)
    //             console.log(newText)
    //             //recursive step
    //             divide(newText, newLength, divisions)
    //         }
    //     }
    
    //     divide(props.text, props.text.length, [])}, [props.text])

    // const setText = (text:any) => {
    //     props.setText(text)
    //     divide(props.text, props.text.length, [])
    // }
    const nextPage = useRef<any>(null)
    const currentPage = useRef<any>(null)

    const handleEnter = () =>{
        console.log("I am here")
        // props.setText("yoink")
    }
    return (
        <div>
            <ToolBar></ToolBar>
            {/* {division.length == 0 ?  <Page text={props.text} setText={props.setText}></Page> : division?.map(text => <Page text={text} setText={props.setText}></Page>)} */}
            <div ref={currentPage} onKeyDown={(e)=> {nextPage.current.Page.focus()} }>
                <Page text={props.text} setText={props.setText}></Page>
            </div>
            <div ref={nextPage}>
                <Page text= {""} setText={props.setText}></Page>
            </div>
        </div>
    )
}
