import React from 'react'
import spinner from './Spinner.gif'

export const Spinner = () => {
  return (
    <>
      <img src={spinner} alt="Loading..." className="m-auto block" />
    </>
  )
}

export default Spinner
