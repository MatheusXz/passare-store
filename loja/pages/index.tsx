import Head from 'next/head'
import OffcanvasExample from '../src/Components/navbar'
import Login from '../pages/_login'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
  return (
    <>
      <Head>
        <title>Passare Store</title>
        <meta name="description" content="Loja Passare Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <OffcanvasExample />
      <Login></Login>
    </>
  )
}


