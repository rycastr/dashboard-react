import { Flex } from '@chakra-ui/react'

import Team from './pages/team'

import SideBar from './components/sidebar'

function App () {
  return (
    <Flex
      bg='#f3f4f6'
      minH='100vh'
      flexDirection='row'
    >
      <SideBar />
      <Team />
    </Flex>
  )
}

export default App
