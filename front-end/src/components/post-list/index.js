import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from "../post-card"

const PostList = () => {
  const authors = useSelector(state => Object.values(state.authors))
  const posts = authors.flatMap(({ posts }) => (posts))
  return (
    <div>
      <ul>
        {posts.map(item => (
          <PostCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  )
}

export default PostList 