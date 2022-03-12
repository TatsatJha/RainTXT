import Quill from 'quill'
import "quill/dist/quill.snow.css"
import { useCallback, useState, useEffect} from 'react'
import SideBar from './SideBar'

const TOOLBAR_OPTIONS = [
    [{header: [1, 2,3,4,5,6,false]}],
    [{font: [] }],
    [{list: "ordered"}, {list:"bullet" }],
    ["bold", "italic", "underline"],
    [{color:[]}, {background: []}],
    [{script: "sub"}, {script: "super"}],
    [{align:[]}],
    ["image", "blockquote", "code-block"],
    ["clean"],
]


export default function TextEditor(props:any) {
    const thing:any = null //Use the most janky workaround because I don't know how to set the type of the quill state
    const [content, setContent] = useState("")
    const [quill, setQuill] = useState(thing)
    const wrapperRef = useCallback(wrapper => {
        if(wrapper == null) return

        wrapper.innerHTML = ""
        const editor = document.createElement("div")
        wrapper.append(editor)
        const q = new Quill(editor, {theme: "snow", modules: {toolbar: TOOLBAR_OPTIONS}})
        setQuill(q)
    },[])
    useEffect(() => {
        if(quill == null) return
        const handler = () =>{
            setContent(quill.getText())
        }

        quill.on("text-change", handler)
        return () => {
            quill.off("text-change", handler)
        }
    }, [quill])
    return (
        <div className="text-editor">
            {true ? <div className="container" ref={wrapperRef}> </div> : <p>nothing</p>}
        </div>
    )
}
