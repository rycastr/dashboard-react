import { FC } from 'react'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  Text
} from '@chakra-ui/react'
import {
  CalendarIcon,
  ChartBarIcon,
  CollectionIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon
} from '@heroicons/react/outline'
import Logo from '../assets/logo.svg'

const SideBar: FC = () => {
  return (
    <Flex
      as='aside'
      bg='#FFFFFF'
      borderRightWidth={1}
      borderRightColor='#E5E7EB'
      width='320px'
      flexDirection='column'
      justifyContent='space-between'
    >
      <Box padding='8px'>
        <HStack
          paddingY='12px'
          paddingX='10px'
          spacing='12px'
        >
          <Image src={Logo} boxSize='42px' />
          <Heading size='md'>workflow</Heading>
        </HStack>
        <Box>
          <Flex as='ul' flexDirection='column'>
            <Menu>
              <Link
                mt={1}
                p={2}
                // backgroundColor='#f3f4f6'
                _hover={{ textDecor: 'none', backgroundColor: '#f3f4f6' }}
                borderRadius={8}
              >
                <MenuButton>
                  <Flex pt='1'>
                    <Icon color='#9A9BA0' fontSize='xl' as={HomeIcon} />
                    <Text ml={4}>Dasboard</Text>
                  </Flex>
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <Link
                mt={1}
                p={2}
                backgroundColor='#f3f4f6'
                _hover={{ textDecor: 'none', backgroundColor: '#f3f4f6' }}
                borderRadius={8}
              >
                <MenuButton>
                  <Flex pt='1'>
                    <Icon color='#9A9BA0' fontSize='xl' as={UsersIcon} />
                    <Text ml={4}>Team</Text>
                  </Flex>
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <Link
                mt={1}
                p={2}
                // backgroundColor='#f3f4f6'
                _hover={{ textDecor: 'none', backgroundColor: '#f3f4f6' }}
                borderRadius={8}
              >
                <MenuButton>
                  <Flex pt='1'>
                    <Icon color='#9A9BA0' fontSize='xl' as={FolderIcon} />
                    <Text ml={4}>Projects</Text>
                  </Flex>
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <Link
                mt={1}
                p={2}
                // backgroundColor='#f3f4f6'
                _hover={{ textDecor: 'none', backgroundColor: '#f3f4f6' }}
                borderRadius={8}
              >
                <MenuButton>
                  <Flex pt='1'>
                    <Icon color='#9A9BA0' fontSize='xl' as={CalendarIcon} />
                    <Text ml={4}>Calendar</Text>
                  </Flex>
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <Link
                mt={1}
                p={2}
                // backgroundColor='#f3f4f6'
                _hover={{ textDecor: 'none', backgroundColor: '#f3f4f6' }}
                borderRadius={8}
              >
                <MenuButton>
                  <Flex pt='1'>
                    <Icon color='#9A9BA0' fontSize='xl' as={CollectionIcon} />
                    <Text ml={4}>Documents</Text>
                  </Flex>
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <Link
                mt={1}
                p={2}
                // backgroundColor='#f3f4f6'
                _hover={{ textDecor: 'none', backgroundColor: '#f3f4f6' }}
                borderRadius={8}
              >
                <MenuButton>
                  <Flex pt='1'>
                    <Icon color='#9A9BA0' fontSize='xl' as={ChartBarIcon} />
                    <Text ml={4}>Reports</Text>
                  </Flex>
                </MenuButton>
              </Link>
            </Menu>
          </Flex>
        </Box>
      </Box>
      <Box>
        <HStack
          borderTopWidth={1}
          borderTopColor='#E5E7EB'
          paddingX='16px'
          paddingY='16px'
          spacing='16px'
        >
          <Image
            borderRadius='full'
            boxSize='42px'
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
          />
          <Flex flexDirection='column'>
            <Text fontWeight='bold' fontSize='md'>Jane Doe</Text>
            <Link fontSize='sm'>View profile</Link>
          </Flex>
        </HStack>
      </Box>
    </Flex>
  )
}

export default SideBar
