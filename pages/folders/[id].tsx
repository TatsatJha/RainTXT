import React from 'react'
import { useRouter } from 'next/router'
import Header from "../../Components/Home/Header"
import Main from "../../Components/Home/Main"


export default function folders({data}:any) {
  
  const router = useRouter()
  const id = router.query.id

  const {docs, dirs} = data

  console.log(data)

    const refreshData = () => {
        router.replace(router.asPath);
    }
  return (
    <div>
        <Header></Header>
        <Main dirId = {id} refresh={refreshData} docData = {docs} dirData={dirs}></Main>
    </div>
  )
}

export async function getServerSideProps({params}:any) {

    const res = await fetch(`http://localhost:3000/api/dir/${params.id}`)
    const data = await res.json()

    // let cleanData:any = []
    // data.forEach((doc:any) => {
    //     if(doc.dir === params.id){
    //         cleanData.push(doc)
    //     }
    // });

    return{ props: { data } }
  }
