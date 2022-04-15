import Head from 'next/head'
import { Fragment } from 'react'
import HomePage from "../components/HomePage"


import { appContext} from './_app'

export default function Home() {

  return (

    <Fragment>
       <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="This is a fully  functional clone of amazons website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage key={Math.random()}/>

    </Fragment>
  )
}