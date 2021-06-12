import React from 'react'
import { Link } from 'react-router-dom'

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="w-full p-5 md:w-6/12 xl:4/12  lg:w-4/12 lg:mb-0 mb-6 px-4 transform transition duration-500 hover:scale-110">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-2">
        <div className="px-6">
          <img
            alt="..."
            src={avatar_url}
            className="shadow-xl  rounded-full max-w-full mx-auto  hover:opacity-80 transition-opacity duration-500 ease-in"
            style={{ maxWidth: '150px' }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">{login}</h5>
            <div className="mt-6">
              <button
                className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition-all   bg-blue-700 hover:bg-blue-600 ease-in duration-150 "
                type="button"
              >
                <Link to={`/user/${login}`}>More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Useritem
