const GET_AUTHOR_FOLLOWING = "author/GET_AUTHOR_FOLLOWING"
const GET_AUTHOR_NOT_FOLLOWING = "author/GET_AUTHOR_NOT_FOLLOWING"
const DELETE_AUTHOR_FROM_NOT_FOLLOWING = "author/DELETE_AUTHOR_FROM_NOT_FOLLOWING"
const ADD_AUTHOR_TO_FOLLOWING = "author/ADD_AUTHOR_TO_FOLLOWING"

const getAuthorFollowing = (authors) => ({
    type: GET_AUTHOR_FOLLOWING,
    payload: authors
})

const getAuthorNotFollowing = (authors) => ({
    type: GET_AUTHOR_NOT_FOLLOWING,
    payload: authors
})

const addAuthorToFollowing = (author) => ({
    type: ADD_AUTHOR_TO_FOLLOWING,
    payload: author
})

const deleteAuthorFromNotFollowing = (id) => ({
    type: DELETE_AUTHOR_FROM_NOT_FOLLOWING,
    payload: id
})

export const getAllAuthorFollowing = () => async (dispatch) => {
    const res = await fetch("/api/author/following")
    if (res.ok) {
        const data = await res.json()
        dispatch(getAuthorFollowing(data))
        return null
    }
}

export const getAllAuthorNotFollowing = () => async (dispatch) => {
    const res = await fetch("/api/author/not-following")
    if (res.ok) {
        const data = await res.json()
        dispatch(getAuthorNotFollowing(data))
        return null
    }
}

export const deleteAllAuthorNotFollowing = (id) => async (dispatch) => {
    const res = await fetch(`/api/author/not-following/${id}`,
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(deleteAuthorFromNotFollowing(id))
        return null
    }
}

export const addAuthorFollowing = (author) => async (dispatch) => {
    const res = await fetch("/api/author/following", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(author)
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(addAuthorToFollowing(data))
        return null
    }
} 
const initialState = {
    folowing: {},
    notFollowing: {}
}

const authorReducer = (state = initialState, {type, payload})=>{
    switch (type){
        case GET_COMMENTS: 
        const newState = payload.reduce((acc, cur) => {
            acc[cur.id] = cur
            return acc
        }, {})
        return newState

        case CREATE_COMMENT:
            const newComment = {}
            newComment[payload.id] = payload

        return {...state, newComment}
        default: return state
    }
} 
export default authorReducer