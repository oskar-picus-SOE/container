import React from "react";

import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostsAppBar from "./components/PostsAppBar";
import * as ReactDOM from "react-dom";
import {LoginForm} from "login_form/LoginForm";
import {AddPostForm} from "add_post/AddPostForm";
import {ViewPostsList} from "view_posts/ViewPostsList";


const App = () => (
    <BrowserRouter>
        <div>
            <PostsAppBar/>
            <Routes>
                <Route path={"/"} element={<LoginForm/>}/>
                <Route path={"/add-post"} element={<AddPostForm/>}/>
                <Route path={"/posts"} element={<ViewPostsList/>}/>
            </Routes>
        </div>
    </BrowserRouter>
);
ReactDOM.render(<App/>, document.getElementById("app"));
