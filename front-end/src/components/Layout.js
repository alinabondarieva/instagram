import React, { useEffect, useCallback, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HomePage } from "../pages/home";

export function Layout() {
    return (<>
        <header className="bg-black">
            <div>header</div>
        </header>
        <HomePage />
    </>);

}
