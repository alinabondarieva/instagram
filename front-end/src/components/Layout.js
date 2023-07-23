import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { HomePage } from "../pages/home";
import { getAllAuthors, getAllFollowingAuthors } from "../store/authorReducer";
import { getAllComments } from "../store/commentsReducer";
import { getAllPosts } from "../store/postReducer";

export function Layout() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllAuthors())
        dispatch(getAllComments())
        dispatch(getAllPosts())
        dispatch(getAllFollowingAuthors(true))
        dispatch(getAllFollowingAuthors(false))
    }, [dispatch])
    return (<>
        <header className="container mx-auto">
            <div>header</div>
        </header>
        <HomePage />
    </>);

}
