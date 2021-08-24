export type UserData = {
  name: string
  email: string
  role: string
  verified: boolean
  status: boolean
  photo: string
}

export type Data = {
  users: UserData[]
}

class FakeApi {
  static async fetch (): Promise<Data> {
    return {
      users: [
        {
          name: 'Jane Doe',
          email: 'janedoe@example.com',
          role: 'Developer',
          verified: true,
          status: true,
          photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        },
        {
          name: 'Jhon Doe',
          email: 'jhondoe@example.com',
          role: 'Project Manager',
          verified: true,
          status: false,
          photo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        },
        {
          name: 'Joseph Smith',
          email: 'josephsmith@example.com',
          role: 'Developer',
          verified: true,
          status: true,
          photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        },
        {
          name: 'Alice Cooper',
          email: 'alicecooper@example.com',
          role: 'Marketing Manager',
          verified: false,
          status: true,
          photo: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }
      ]
    }
  }
}

export default FakeApi
