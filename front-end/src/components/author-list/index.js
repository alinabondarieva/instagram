import React from 'react'
import { useSelector } from 'react-redux'
import AuthorCard from '../author-card'

export const AuthorList = () => {
    const authors = useSelector(state => Object.values(state.authors))
    return (
        <div>
            <ul>
                {authors.map(item => (
                <AuthorCard key={item.id} id={item.id}/>
                ))}
            </ul>
        </div>
    )
}
