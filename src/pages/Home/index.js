import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from 'rebass'
import styled from 'styled-components'

const Links = styled.div`
  a {
    color: #fff;
    background-color: #999;
    padding: 5px 15px;
    text-decoration: none;
    &:hover {
      background-color: #111;
    }
  }
`

const Home = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      style={{ minHeight: '100vh' }}
    >
      <h1>React Styled Components Training</h1>
      <Links>
        <Link to="/youtube">Youtube</Link>
      </Links>
    </Flex>
  )
}

export default Home
