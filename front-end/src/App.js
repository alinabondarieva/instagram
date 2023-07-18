import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/home";
import {NotFoundPage} from "./pages/pageIsNotFound"
import { PostsPage } from "./pages/postPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/posts/:id" element={<PostsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    )
);

export function App() {
    return (
        <RouterProvider router={router}/>
    );
}