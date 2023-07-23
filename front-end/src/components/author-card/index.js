import React from 'react'
import { useSelector } from 'react-redux'

const AuthorCard = ({ id, status }) => {
  const {nickName, imageUrl} = useSelector(state => state.authors?.[status][id]) || {}
  
  return (
    <li>
      <h2>{nickName}</h2>
      <img src={imageUrl} alt={nickName}/>
    </li>
  )
}

export default AuthorCard