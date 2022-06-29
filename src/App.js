import React from 'react';
import {Route,Routes,Link} from "react-router-dom";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import {Button} from "reactstrap";
import OnePost from "./pages/OnePost";
function App() {
    return (
        <div className={"container"}>
          <h1>Json Placeholder</h1>
            <Link to={"/posts"}><Button className={"btn btn-dark m-1"}>Posts</Button></Link>
            <Link to={"/todos"}><Button className={"btn btn-dark m-1"}>Todos</Button></Link>
            <Link to={"/users"}><Button className={"btn btn-dark m-1"}>Users</Button></Link>
            <Routes>
                <Route path={"/posts"} element={<Posts/>} ></Route>
                <Route path={"/posts/:id"} element={<OnePost/>} ></Route>
                <Route path={"/todos"} element={<Todos/>} ></Route>
                <Route path={"/users"} element={<Users/>} ></Route>
            </Routes>
        </div>

    );
}

export default App;