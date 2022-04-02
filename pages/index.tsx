import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Header from "../Components/Home/Header"
import Main from "../Components/Home/Main"

const Home: NextPage = ({data, dirData}:any) => {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }

  return (
    <div>
      <Header></Header>
      <Main refresh={refreshData} data= {data} dirData = {dirData}></Main>
    </div>
  )
}

export async function getServerSideProps({params}:any) {
  const dirRes = await fetch(`http://localhost:3000/api/dir/`)
  const dirData = await dirRes.json()

  const res = await fetch(`http://localhost:3000/api/doc/`)
  const data = await res.json()
  return{ props: { data, dirData} }
}


export default Home
