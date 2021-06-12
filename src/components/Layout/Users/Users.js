import React, { useContext } from 'react'
import Spinner from '../Spinner'
import UserItem from './Useritem'
import GithubContext from '../../../Context/Github/githubContext'

const Users = () => {
  const githubContext = useContext(GithubContext)
  const { loading, users } = githubContext
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="p-3 flex flex-wrap mt-5">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default Users
