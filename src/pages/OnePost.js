import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import {doGet} from "../service";

function OnePost() {
    const params = useParams()
    const [post,setPost]=useState("")
    const [user,setUSer]=useState("")
    useEffect(() => {
        getOnePost(params.id)
    }, [])

    async function getOnePost(id) {
        const OnePost = await doGet("/posts/" + id)
        setPost(OnePost)
        const postUser = await doGet("/users/" + OnePost.userId)
       setUSer(postUser)
    }
    console.log(post)
    return (
        <div className={"row"}>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header">
                        {user.name}
                    </div>
                    <div className="card-body">
                        {user.phone}
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div className="card">
                    <div className="card-header">
                        {post.id +". "+ post.title}
                    </div>
                    <div className="card-body">
                        {post.body}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnePost;