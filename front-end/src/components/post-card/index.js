import React, { useEffect, useState } from 'react'
import Button from '../button'
import { useSelector } from 'react-redux'

const PostCard = ({ id }) => {
  const post = useSelector(state => state.posts[id])
  const comments = useSelector(state=> Object.values(state.comments)) || []
  const filteredComments = comments.filter(item=>item.post===id)
  console.log((filteredComments));
  const [isCommentShow, setCommentShow] = useState(false)

  
  const firstComment = filteredComments[0]
  const restComments = [...filteredComments].toSpliced(1)

  const handleClick = () => {
    setCommentShow(!isCommentShow)
    console.log(1)
  }

  return (
    <li>
      <h2>{post?.title}</h2>
      <img src={post?.imgUrl} alt={post?.title} />
      <p>{post?.text}</p>
      <ul>{!!filteredComments.length && <li>{firstComment.comment}</li>}
        {isCommentShow && restComments.toSpliced(1).map((item) => (
          
          <li key={item.id}>{item.comment}</li>
        ))}
      </ul>
      {filteredComments.length > 1 && <Button text="showMore" onClick={handleClick} />}
    </li>
  )
}

export default PostCard