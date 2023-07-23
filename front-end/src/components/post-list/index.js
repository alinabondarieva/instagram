import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from "../post-card"

const PostList = () => {
  const posts = useSelector(state => Object.values(state.posts))
  return (
    <div>
      <ul>
        {posts.map(item => (
          <PostCard key={item.id} id={item._id} />
        ))}
      </ul>
    </div>
  )
}

export default PostList 