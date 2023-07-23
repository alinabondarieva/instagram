// const GET_AUTHOR_FOLLOWING = "author/GET_AUTHOR_FOLLOWING"
// const GET_AUTHOR_NOT_FOLLOWING = "author/GET_AUTHOR_NOT_FOLLOWING"
// const DELETE_AUTHOR_FROM_NOT_FOLLOWING = "author/DELETE_AUTHOR_FROM_NOT_FOLLOWING"
// const ADD_AUTHOR_TO_FOLLOWING = "author/ADD_AUTHOR_TO_FOLLOWING"

const GET_AUTHOR = "author/GET_AUTHOR"
const GET_AUTHOR_FOLLOWING = "author/GET_AUTHOR_FOLLOWING"
const GET_AUTHOR_NOT_FOLLOWING = "author/GET_AUTHOR_NOT_FOLLOWING"


const getFollowingAuthor = (authors) => ({
    type: GET_AUTHOR_FOLLOWING,
    payload: authors
})
const getAuthor = (authors) => ({
    type: GET_AUTHOR,
    payload: authors
})
const getNotFollowingAuthor = (authors) => ({
    type: GET_AUTHOR_NOT_FOLLOWING,
    payload: authors
})

export const getAllAuthors = () => async (dispatch) => {
    const res = await fetch(`/api/authors/`)
    if (res.ok) {
        const data = await res.json()
        dispatch(getAuthor(data))
        return null
    }
}
export const getAllFollowingAuthors = (query) => async (dispatch) => {
    const res = await fetch(`/api/authors/?following=${query}`)
    if (res.ok) {
        const data = await res.json()
        if (query) {
            dispatch(getFollowingAuthor(data))
            return null
        }
        if (!query) {
            dispatch(getNotFollowingAuthor(data))
            return null
        }
    }
}
const initialState = {
    authors: {},
    following: {},
    notFollowing: {},
}
const authorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_AUTHOR_FOLLOWING:
            const followingState = payload.reduce((acc, cur) => {
                acc[cur._id] = cur
                return acc
            }, {})
            return { ...state, following: followingState }
        case GET_AUTHOR_NOT_FOLLOWING:
            const notFollowingState = payload.reduce((acc, cur) => {
                acc[cur._id] = cur
                return acc
            }, {})
            return { ...state, notFollowing: notFollowingState }
        case GET_AUTHOR:
            const authorState = payload.reduce((acc, cur) => {
                acc[cur._id] = cur
                return acc
            }, {})
            return { ...state, authors: authorState }
        default: return state
    }
}

export default authorReducer
// const getAuthorFollowing = (authors) => ({
//     type: GET_AUTHOR_FOLLOWING,
//     payload: authors
// })

// const getAuthorNotFollowing = (authors) => ({
//     type: GET_AUTHOR_NOT_FOLLOWING,
//     payload: authors
// })

// const addAuthorToFollowing = (author) => ({
//     type: ADD_AUTHOR_TO_FOLLOWING,
//     payload: author
// })

// const deleteAuthorFromNotFollowing = (id) => ({
//     type: DELETE_AUTHOR_FROM_NOT_FOLLOWING,
//     payload: id
// })

// export const getAllAuthorFollowing = () => async (dispatch) => {
//     const res = await fetch("/api/author/following")
//     if (res.ok) {
//         const data = await res.json()
//         dispatch(getAuthorFollowing(data))
//         return null
//     }
// }

// export const getAllAuthorNotFollowing = () => async (dispatch) => {
//     const res = await fetch("/api/author/not-following")
//     if (res.ok) {
//         const data = await res.json()
//         dispatch(getAuthorNotFollowing(data))
//         return null
//     }
// }

// export const deleteAllAuthorNotFollowing = (id) => async (dispatch) => {
//     const res = await fetch(`/api/author/not-following/${id}`,
//     {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     if (res.ok) {
//         const data = await res.json()
//         dispatch(deleteAuthorFromNotFollowing(id))
//         return null
//     }
// }

// export const addAuthorFollowing = (author) => async (dispatch) => {
//     const res = await fetch("/api/author/following", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(author)
//     })
//     if (res.ok) {
//         const data = await res.json()
//         dispatch(addAuthorToFollowing(data))
//         return null
//     }
// }
// const initialState = {
//     folowing: {},
//     notFollowing: {}
// }

// const authorReducer = (state = initialState, {type, payload})=>{
//     switch (type){
//         case GET_AUTHOR_FOLLOWING:
//         const followingState = payload.reduce((acc, cur) => {
//             acc[cur.id] = cur
//             return acc
//         }, {})
//         return followingState

//         case GET_AUTHOR_NOT_FOLLOWING:
//         const notFollowingState = payload.reduce((acc, cur) => {
//             acc[cur.id] = cur
//             return acc
//         }, {})
//         return notFollowingState

//         case DELETE_AUTHOR_FROM_NOT_FOLLOWING:
//         const deleteFollowingState = {...state}
//         delete deleteFollowingState.notFollowing[payload.id]
//         return deleteFollowingState

//         case ADD_AUTHOR_TO_FOLLOWING:
//             const newAuthor = {}
//             newAuthor[payload.id] = payload

//         return {...state, newAuthor}
//         default: return state
//     }
// }
// export default authorReducer