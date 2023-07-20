import React, { useEffect} from "react";
import { getAllAuthorFollowing } from "../../store/authorReducer";
import {useSelector, useDispatch} from "react-redux"

export function HomePage() {
    const author = useSelector(state=>console.log(state))
    const dispatch = useDispatch()
    // console.log(author);
    useEffect(()=>{
        dispatch(getAllAuthorFollowing())
    })
    return(<h2>HomePage</h2>)
}