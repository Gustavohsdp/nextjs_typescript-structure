import React from 'react'
import Head from 'next/head'

import GustavohsdoLogo from '../assets/gustavohsdp.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <GustavohsdoLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Gustavo Henrique.</p>
    </Container>
  )
}

export default Home
