import { FC } from 'react'
import {
  HStack,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import {
  DotsVerticalIcon,
  PencilAltIcon,
  TrashIcon
} from '@heroicons/react/outline'
import { UserData } from '../services/fake-api'

type UserTableProps = {
  users: UserData[]
}

const UsersTable: FC<UserTableProps> = ({ users }) => {
  return (
    <Table variant='simple'>
      <TableCaption>The workflow team users</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>Verified</Th>
          <Th>Status</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user, index) => {
          return (
            <Tr key={index} _hover={{ backgroundColor: '#f6f8fa' }}>
              <Td>
                <HStack spacing='16px'>
                  <Image
                    borderRadius='full'
                    boxSize='32px'
                    src={user.photo}
                  />
                  <Text fontWeight='medium'>Jane Doe</Text>
                </HStack>
              </Td>
              <Td>{user.email}</Td>
              <Td color='#6b7280'>{user.role}</Td>
              <Td color='#6b7280'>{user.verified ? 'Yes' : 'No'}</Td>
              <Td>
                <Tag
                  size='sm'
                  borderRadius='full'
                  variant='subtle'
                  colorScheme={user.status ? 'green' : 'red'}
                >
                  <TagLabel fontWeight='bold'>{user.status ? 'Active' : 'Disabled'}</TagLabel>
                </Tag>
              </Td>
              <Td textAlign='right'>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<Icon as={DotsVerticalIcon} fontSize='lg' />}
                    borderRadius='full'
                    variant='ghost'
                  />
                  <MenuList>
                    <MenuItem icon={<Icon as={PencilAltIcon} fontSize='lg' />}>
                      Edit
                    </MenuItem>
                    <MenuItem icon={<Icon as={TrashIcon} fontSize='lg' />}>
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default UsersTable
