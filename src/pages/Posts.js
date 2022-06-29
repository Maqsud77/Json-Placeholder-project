import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {doGet, doPost} from "../service";
import SelectUser from "../components/SelectUser";
import PostModal from "../components/PostModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Posts() {

    const [posts, setPosts] = useState([])
    const [data, setData] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [user, setUser] = useState(false)
    let navigate = useNavigate();

    async function getPosts() {
        const res = await doGet("/posts")
        setPosts(res)
        setData(res)
    }
   async function savePost(data) {
       const res = await doPost("/posts",data)
       toast("Ma`lumot saqlandi")
       setData(prev=>{
           prev.unshift(res)
           setPosts([...prev])
           return prev
       })
    }
    useEffect(() => {
        getPosts()
    }, [])

    const openOnePost = (id) => {
        navigate("" + id)
    }
    function filter(userId){
        return data.filter(item=>(item.userId===parseInt(userId)) || userId==="")
    }

    function onChangeUser(userId) {
        const res= filter(userId)
        setPosts(res)
    }
    function toggleModal(){
    setModalVisible(prev=>!prev)
    }
    function onSubmit(data) {
        data.user =user
        savePost(data)

    }
    function changeUser(id) {
    setUser(id)
    }
    return (
        <div className={"posts-page"}>
            <ToastContainer/>
            <h1 className={"text-center"}>Posts</h1>
            <button className={"btn btn-dark float-end "} onClick={toggleModal}>Add</button>
            <div className="row">
                <div className="col-md-3">
                   <SelectUser onChange={onChangeUser}/>
                </div>
            </div>
            <div className="row">
                {posts.map((item) => {
                    return (
                        <div onClick={() => openOnePost(item.id)} key={item.id} className={"col-md-3 my-4 post-card"}>
                            <div className="card ">
                                <div className="card-header bg-dark text-white">
                                    {item.title}
                                </div>
                                <div className="card-body">
                                    {item.body}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
           <PostModal changeUser={changeUser} isOpen={modalVisible} toggle={toggleModal} save={onSubmit}/>
        </div>
    );
}

export default Posts;