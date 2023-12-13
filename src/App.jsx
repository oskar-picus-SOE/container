import React from "react";

import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostsAppBar from "./components/PostsAppBar";
import * as ReactDOM from "react-dom";
import {LoginForm} from "login_form/LoginForm";


const App = () => (
    <BrowserRouter>
        <div>
            <PostsAppBar/>
            <Routes>
                <Route path={"/"} element={<LoginForm/>}/>
                <Route path={"/add-post"} element={<div></div>}/>
                <Route path={"/posts"} element={<div></div>}/>
            </Routes>
        </div>
    </BrowserRouter>
);
ReactDOM.render(<App/>, document.getElementById("app"));
