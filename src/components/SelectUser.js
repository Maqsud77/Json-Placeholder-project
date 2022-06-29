import {useEffect, useState} from "react";
import {doGet} from "../service";

function SelectUser({onChange}) {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrenrUser] = useState('')

    async function getUsers() {
        const users = await doGet("/users")
        setUsers(users)
    }
    useEffect(() => {
        getUsers()
    }, [])

    function onChangeSelect(event) {
        let id = event.target.value
        let id1 = id === '' ? '' : parseInt(id)
        setCurrenrUser(id1)
        if (onChange)
        onChange(id1)
    }
    return (
        <select  className={"form-control"} value={currentUser} onChange={onChangeSelect}>
            <option value="">All</option>
            {users.map(item =>
                <option key={item.id} value={item.id}>
                    {item.name}
                </option>)}
        </select>

    );
}

export default SelectUser;