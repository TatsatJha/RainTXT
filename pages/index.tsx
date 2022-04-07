import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Header from "../Components/Home/Header"
import Main from "../Components/Home/Main"

const Home: NextPage = ({docData, dirData}:any) => {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }

  return (
    <div>
      <Header></Header>
      <Main refresh={refreshData} docData= {docData} dirData = {dirData}></Main>
    </div>
  )
}

export async function getServerSideProps({params}:any) {
  const dirRes = await fetch(`http://localhost:3000/api/dir/`)
  const dirData = await dirRes.json()

  const docRes = await fetch(`http://localhost:3000/api/doc/`)
  const docData = await docRes.json()
  return{ props: { docData, dirData} }
}


export default Home
