import type { NextPage } from 'next'
import Header from "../Components/Home/Header"
import Main from "../Components/Home/Main"

export async function getServerSideProps({params}:any) {
  const res = await fetch(`http://localhost:3000/api/doc/`)
  const data = await res.json()
  return{ props: { data} }
}

const Home: NextPage = ({data}:any) => {
  return (
    <div>
      <Header></Header>
      <Main data= {data}></Main>
    </div>
  )
}

export default Home
