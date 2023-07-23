import React from 'react'
import { useSelector } from 'react-redux'
import AuthorCard from '../author-card'

export const AuthorList = () => {
    const following = useSelector(state => Object.values(state.authors?.following)) || []
    const notFollowing = useSelector(state => Object.values(state.authors?.notFollowing)) || []

    return (
        <div>
            <ul>
                {following.map(item => (
                <AuthorCard key={item.id} status="following" id={item._id}/>
                ))}
                {notFollowing.map(item => (
                <AuthorCard key={item.id} status="notFollowing" id={item._id}/>
                ))}
            </ul>
        </div>
    )
}
