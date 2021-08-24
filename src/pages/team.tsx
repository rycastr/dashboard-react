import { FC, useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Heading
} from '@chakra-ui/react'

import FakeApi, { UserData } from '../services/fake-api'
import UsersTable from '../components/users-table'
import SearchBar from '../components/search-bar'

const Team: FC = () => {
  const [users, setUsers] = useState<UserData[]>([])

  useEffect(() => {
    FakeApi.fetch().then((data) => {
      setUsers(data.users)
    })
  })

  return (
    <Box
      width='100%'
      minHeight='100%'
    >
      <SearchBar />
      <Flex
        flexDirection='column'
        paddingY='6'
        paddingX='10'
      >
        <Heading>Users</Heading>
        <Box
          borderRadius='lg'
          borderColor='#E5E6E8'
          borderWidth={1}
          backgroundColor='#FFFFFF'
          mt='5'
          paddingY={2}
        >
          <UsersTable users={users} />
        </Box>
      </Flex>
    </Box>
  )
}

export default Team
