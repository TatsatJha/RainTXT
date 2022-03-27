import SideBar from './SideBar'
import Page from "./Page"
import ToolBar from './ToolBar'
import { useEffect, useState } from 'react'

export default function TextEditor(props:any) {
    const [divisions, setDivisions] = useState<Array<string>>()
    
    
    // function divide(text: string, length: number,  divisions: Array<string>){
    //     if(length<=0){
    //         divisions.push(text)
    //         setDivisions(divisions)
    //     }
    //     else{
    //         //logic for adding 3000 worth of text to array
    //         const truncatedText = text.substring(0, 3000) 
    //         divisions.push(truncatedText)
    //         const newText = text.substring(3000)
    //         const newLength = length - 3000
    //         //recursive step
    //         divide(newText, newLength, divisions)
    //     }
    // }

    const setText = (text:any) => {
        props.setText(text)
        // divide(text, text.length, [])
    }
    return (
        <>
            <ToolBar></ToolBar>
            <Page text={props.text} setText={props.setText}></Page>
            {/* {divisions===undefined? : divisions?.map(text => <Page text={text} setText={setText}></Page>)} */}
        </>
    )
}
