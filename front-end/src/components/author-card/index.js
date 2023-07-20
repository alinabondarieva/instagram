import React from 'react'
import {useSelector } from 'react-redux'

const AuthorCard = ({id}) => {
  const author = useSelector(state => state.authors[id])
  return (
      <li>
<h2>{author.name}</h2>
      </li>
  )
}

export default AuthorCard