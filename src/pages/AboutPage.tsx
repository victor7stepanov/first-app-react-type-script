import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>About app page</h1>
      <p>
       This app was created by React + TypeScript stack. Version 1.0.0
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Back to Todo List
      </button>
    </>
  )
}
