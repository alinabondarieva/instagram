import React, { useEffect, useCallback, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HomePage } from "../pages/home";
import { getAllAuthors } from "../store/authorReducer";

export function Layout() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllAuthors())
    }, [dispatch])
    return (<>
        <header className="bg-black">
            <div>header</div>
        </header>
        <HomePage />
    </>);

}
