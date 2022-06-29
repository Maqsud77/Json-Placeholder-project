import React from 'react';
import Todo from "../components/Todo";
import SelectUser from "../components/SelectUser";
import {useEffect, useState} from "react";
import {doGet} from "../service";


function Todos() {
    const [todos, setTodos] = useState([])
    const [data, setData] = useState([])
    const [currentUser, setCurrentUser] = useState("")
    const [completed, setCompleted] = useState(false)
    const [active, setActive] = useState(false)
    const [page, setPage] = useState(1)

    async function getTodos() {
        const res = await doGet("/todos")
        setTodos(res.filter((item, index) => index >= 0 && index < 10))
        setData(res)
    }

    function filter(userId, completed, page) {
        return data.filter(item => (item.userId === parseInt(userId) || !userId))
            .filter(item => active ? item.completed === completed : item)
            .filter((item, index) => index >= (page - 1) * 10 && index < page * 10)
    }

    useEffect(() => {
        getTodos()

    }, [])
    useEffect(() => {
        const res = filter(currentUser, completed, page)
        console.log(currentUser,completed,page)
        setTodos(res)
    }, [page])


    function onChangeUserSelect(userId) {
        const res = filter(userId, completed, page)
        setTodos(res)
        setCurrentUser(userId)
        setActive(true)
    }

    function handleCheck(event) {
        let checked = event.target.checked
        const res = filter(currentUser, checked, page)
        console.log(res)
        setCompleted(checked)
        setTodos(res)
    }

    function reset() {
        setTodos(data)
        setCurrentUser("")
        setCompleted(false)
        setActive(false)
        setPage(1)
    }

    function onNext() {
        setPage(prevState => prevState + 1)
    }

    function onPrev() {
        setPage(prevState => prevState === 1 ? prevState : prevState - 1)
    }

    return (
        <div>
            <h1 className={"text-center"}>Todos</h1>
            <br/>
            <div className="row mb-4">
                <div className="col-md-1">
                    <button className={"btn btn-outline-warning btn-block mx-3"} onClick={reset}>reset</button>
                </div>
                <div className="col-md-3">
                    <SelectUser onChange={onChangeUserSelect}/>
                </div>
                <div className="col-md-3 mt-2">
                    <label htmlFor="">
                        Completed <input className={"form-check-input"} type="checkbox" checked={completed}
                                         onChange={handleCheck}/>
                    </label>
                </div>

            </div>
            {todos.map((item, index) => <Todo item={item} key={index}/>)}
            <div className="row mt-4 ">
                <div className="col-md-2">
                    <button onClick={onPrev} className={"btn btn-dark"}>{"<<"}prev</button>
                </div>
                <div className="col-md-1">
                    <h1>{page}</h1>
                </div>
                <div className="col-md-2">
                    <button onClick={onNext} className={"btn btn-dark"}>next {">>"}</button>
                </div>
            </div>
        </div>
    );
}

export default Todos;