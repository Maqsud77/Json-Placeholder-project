import React from 'react';
import {useEffect, useState} from "react";
import {doGet} from "../service";
function Users() {
    const [users, setUsers] = useState([])

    async function getTodos() {
        const res = await doGet("/users")
        setUsers(res)
    }

    useEffect(() => {
        getTodos()
    })
    return (
        <div>
            <h1 className={"text-center"}>Users</h1>
            <table className={"table"}>
                <thead>
               <tr>
                   <th>№</th>
                   <th>Name</th>
                   <th>Phone</th>
                   <th>Email</th>
                   <th>Username</th>
                   <th>Website</th>
                   <th>Adress</th>
                   <th>Company</th>
               </tr>
                </thead>
                <tbody>
                {users.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.website}</td>
                            <td>{item.address.city}</td>
                            <td>{item.company.name}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Users;