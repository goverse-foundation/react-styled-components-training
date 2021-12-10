import React from 'react'
import { Flex } from 'rebass'

const Home = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      style={{ minHeight: '100vh' }}
    >
      <div>HEADER</div>
      <div>BODY</div>
    </Flex>
  )
}

export default Home
