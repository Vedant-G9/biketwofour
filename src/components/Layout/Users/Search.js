import React, { useState, useContext } from 'react'
import GithubContext from '../../../Context/Github/githubContext'

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext)
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please Enter Somethig')
    } else {
      githubContext.searchUsers(text)
      setText('')
    }
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={onSubmit}>
        <div className="flex m-3 ">
          <input
            className="w-full rounded-full p-2 placeholder-blueGray-500 text-blueGray-600 relative  bg-white  text-md  border-4 border-light-blue-500 border-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            name="text"
            type="text"
            placeholder="Search Users..."
            value={text}
            onChange={onChange}
          />
          <button className="bg-red-500 hover:bg-red-700 focus:outline-none rounded-full text-white p-2 pl-4 pr-4 ml-1">
            <p className="font-semibold text-lg">Search</p>
          </button>
        </div>
      </form>
      {githubContext.users.length > 0 && (
        <div className="flex  justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 uppercase font-semibold text-white tracking-wider py-2 px-4 rounded opacity-70"
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default Search
