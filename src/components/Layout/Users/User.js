import React, { useEffect, useContext, Fragment } from 'react'
import Spinner from '../Spinner'
import { Link } from 'react-router-dom'
import Repos from '../../Repos/Repos'
import GithubContext from '../../../Context/Github/githubContext'

const User = ({ match }) => {
  const githubContext = useContext(GithubContext)
  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
    // eslint-disable-next-line
  }, [])

  const { getUser, loading, user, repos, getUserRepos } = githubContext

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
    hireable,
  } = user

  if (loading) return <Spinner />
  return (
    <Fragment>
      <Link
        to="/"
        className="ml-10 py-2 px-3 text-white font-semibold rounded m-2 bg-blue-500 hover:bg-blue-700"
      >
        Back
      </Link>
      <span className="font-bold text-gray-700">Hireable </span>:{' '}
      {hireable ? (
        <i className="fas fa-check text-green-500" />
      ) : (
        <i className="fas fa-times-circle text-red-600" />
      )}
      <div className="flex items-center justify-center mx-auto  w-full py-4">
        <div className="max-w-md py-2 px-8 bg-white w-full   shadow-lg rounded-lg my-2">
          <div className="flex justify-center ">
            <img
              className="cursor-pointer w-24 h-24 object-cover rounded-full border-2 border-indigo-500  hover:opacity-80 transition-opacity duration-500 ease-in"
              src={avatar_url}
              alt=""
            />
          </div>
          <div>
            <div className="flex justify-center mt-4">
              <span className="text-xl font-medium text-indigo-500">
                {name}
              </span>
            </div>
            <div className="font-bold flex justify-center text-ml m-1 text-gray-600">
              Location : <span className="  text-gray-600"> {location}</span>
            </div>

            <p className="mt-2  text-gray-600">
              <span className="font-bold md:break-words sm:break-words text-gray-700">
                Bio{' '}
              </span>{' '}
              : {bio}
            </p>
          </div>
          <div className="max-w-md p-3 px-5 bg-gray-50 shadow-sm rounded-lg my-2">
            <button className="py-2 px-3 mt-1 bg-gradient-to-br from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle
                  cx="4.5"
                  cy="3.5"
                  r={2}
                  stroke="white"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 10.5V9.5C1.5 8.39543 2.39543 7.5 3.5 7.5H5.5C6.60457 7.5 7.5 8.39543 7.5 9.5V10.5"
                  stroke="white"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 5.125C7.79289 5.125 7.625 5.29289 7.625 5.5C7.625 5.70711 7.79289 5.875 8 5.875V5.125ZM11 5.875C11.2071 5.875 11.375 5.70711 11.375 5.5C11.375 5.29289 11.2071 5.125 11 5.125V5.875ZM9.875 4C9.875 3.79289 9.70711 3.625 9.5 3.625C9.29289 3.625 9.125 3.79289 9.125 4H9.875ZM9.125 7C9.125 7.20711 9.29289 7.375 9.5 7.375C9.70711 7.375 9.875 7.20711 9.875 7H9.125ZM8 5.875H11V5.125H8V5.875ZM9.125 4V7H9.875V4H9.125Z"
                  fill="white"
                />
              </svg>
              <p className="text-xs leading-3 text-white dark:text-gray-100 ml-1">
                <a href={html_url}>Visit Github Profile</a>
              </p>
            </button>
            <p className="mt-2 text-gray-600">
              <span className="font-bold text-gray-700">Username </span> :{' '}
              {login}
            </p>
            <p className="text-gray-600">
              <span className="font-bold text-gray-700">Company </span> :{' '}
              {company}
            </p>
            <p className="text-gray-600">
              <span className="font-bold _blank text-gray-700">Website </span> :{' '}
              <a href={blog}>{blog}</a>
            </p>
          </div>
          <div className="max-w-md p-3  bg-gray-50 rounded-lg  shadow-sm my-2">
            <div className="flex justify-evenly">
              <span className="inline-block text-white bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold">
                Followers {followers}
              </span>
              <span className="inline-block text-white bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold  ">
                Following {following}
              </span>
            </div>
            <div className="flex justify-evenly mt-2">
              <span className="inline-block text-white bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold ">
                Repos {public_repos}
              </span>
              <span className="inline-block text-white bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold">
                Gists {public_gists}
              </span>
            </div>
          </div>
          <span className="font-bold md:break-words sm:break-words text-gray-700">
            Latest Repository :
          </span>{' '}
          <div className="flex justify-evenly">
            <div className="max-w-md p-3 px-5 bg-gray-50 shadow-sm rounded-lg my-2">
              <Repos repos={repos} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default User
