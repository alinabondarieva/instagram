const GET_COMMENTS = "comments/GET_COMMENTS"
const CREATE_COMMENT = "comments/CREATE_COMMENT"

const getComments = (comments) => ({
    type: GET_COMMENTS,
    payload: comments
})

const createComment = (comment) => ({
    type: CREATE_COMMENT,
    payload: comment
})

export const getAllComments = () => async (dispatch) => {
    const res = await fetch("/api/comments")
    if (res.ok) {
        const data = await res.json()
        dispatch(getComments(data))
        return null
    }
}

export const addComment = (comment) => async (dispatch) => {
    const res = await fetch("/api/comments", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(createComment(data))
        return null
    }
} 
const initialState = {}
const commentsReducer = (state = initialState, {type, payload})=>{
    switch (type){
        case GET_COMMENTS: 
        const newState = payload.reduce((acc, cur) => {
            acc[cur._id] = cur
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
export default commentsReducer