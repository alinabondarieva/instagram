const GET_POSTS = "posts/GET_POSTS"

const getPosts = (posts) => ({
    type: GET_POSTS,
    payload: posts
})

export const getAllPosts = () => async (dispatch) => {
    const res = await fetch("/api/posts")
    if (res.ok) {
        const data = await res.json()
        dispatch(getPosts(data))
        return null
    }
}

const initialState = {
    posts: {}
}

const postReducer = (state = initialState, {type, payload})=>{
    switch (type){
        case GET_POSTS: 
        const newState = payload.reduce((acc, cur) => {
            acc[cur.id] = cur
            return acc
        }, {})
        return newState
        default: return state
    }
} 
export default postReducer