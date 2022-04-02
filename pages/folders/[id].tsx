import React from 'react'
import { useRouter } from 'next/router'
import Header from "../../Components/Home/Header"
import Main from "../../Components/Home/Main"


export default function folders({data, dirData}:any) {

    const docs = data === undefined ? null : data
    const dirs = dirData === undefined ? null : dirData

    const router = useRouter()
    const id = router.query

    const refreshData = () => {
        router.replace(router.asPath);
    }
  return (
    <div>
        <Header></Header>
        <Main dirId = {id} refresh={refreshData} data = {docs != null ? docs : null} dirData={dirs != null ? dirs : null}></Main>
    </div>
  )
}

export async function getServerSideProps({params}:any) {

    const res = await fetch(`http://localhost:3000/api/dir/${params.id}`)
    const data = await res.json()


    const docs = data.docs != undefined ? data.docs : null
    const dirs = data.dirs != undefined ? data.dirs : null
    // let cleanData:any = []
    // data.forEach((doc:any) => {
    //     if(doc.dir === params.id){
    //         cleanData.push(doc)
    //     }
    // });

    return{ props: { docs, dirs} }
  }
