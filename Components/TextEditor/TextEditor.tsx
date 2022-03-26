import SideBar from './SideBar'
import Page from "./Page"
import ToolBar from './ToolBar'

export default function TextEditor(props:any) {

    return (
        <>
            <ToolBar></ToolBar>
            <Page text={props.text} setText={props.setText}></Page>
        </>
    )
}
