import React, { useState } from 'react'
import Button from '../button'

const PostCard = ({ title, text, imageUrl, comments }) => {
  const [isCommentShow, setCommentShow] = useState(false)
  const updatedComments = [...comments].reverse()
  const firstComment = [...updatedComments][0]
  const restComments = [...updatedComments].toSpliced(1)
  console.log(updatedComments)
  console.log(restComments)
  const handleClick = () => {
    setCommentShow(!isCommentShow)
    console.log(1)
  }
  return (
    <li>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{text}</p>
      <ul>{!!updatedComments.length && <li>{firstComment.comment}</li>}
        {isCommentShow && [...updatedComments].toSpliced(1).map((item) => (
          
          <li key={item.id}>{item.comment}</li>
        ))}
      </ul>
      {updatedComments.length > 1 && <Button text="showMore" onClick={handleClick} />}
    </li>
  )
}

export default PostCard