import { FC } from 'react'
import {
  Flex,
  Icon,
  Input
} from '@chakra-ui/react'
import { SearchIcon } from '@heroicons/react/outline'

const SearchBar: FC = () => {
  return (
    <Flex
      borderBottomWidth={1}
      borderBottomColor='#E5E7EB'
      backgroundColor='#FFFFFF'
      alignItems='center'
    >
      <Icon color='#9A9BA0' fontSize='xl' as={SearchIcon} marginX={5} />
      <Input
        variant='unstyled'
        placeholder='Search'
        paddingY={6}
      />
    </Flex>
  )
}

export default SearchBar
