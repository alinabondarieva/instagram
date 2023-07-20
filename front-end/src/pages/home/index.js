import React from "react";
import {AuthorList} from "../../components/author-list"
import PostList from "../../components/post-list"

export function HomePage() {
    return(<>
    <PostList/>
    <AuthorList/>
    </>)
}