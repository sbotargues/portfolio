import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelmacphillLoader from '../voxel-macphill-loader'

const LazyVoxelmacphill = dynamic(() => import('../voxel-macphill'), {
  ssr: false,
  loading: () => <VoxelmacphillLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sergi's homepage" />
        <meta name="author" content="Sergi Botargues" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Sergi Botargues's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Sergi Botargues - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelmacphill />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
