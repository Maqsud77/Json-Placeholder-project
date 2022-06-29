import React from 'react';
import {Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";
import SelectUser from "./SelectUser";
import { useForm } from "react-hook-form";
function PostModal({toggle,isOpen,save,changeUser}) {
    const { register, handleSubmit } = useForm();
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader>
              Add post
          </ModalHeader>
            <ModalBody>
                <form id={"post-form"} onSubmit={handleSubmit(save)}>
                    <input {...register("title")} placeholder={"Title"} className={"form-control my-3"} type={"text"} name={"title"}/>
                    <SelectUser onChange={changeUser} />
                    <textarea {...register("body")} placeholder={"Body..."} className={"form-control my-3"} name="body" ></textarea>
                </form>
            </ModalBody>
            <ModalFooter>
                <button onClick={toggle} className={"btn btn-outline-success"} form={"post-form"} type={"submit"}>Save</button>
                <button className={"btn btn-outline-danger"} type={"button"} onClick={toggle}>Cancel</button>
            </ModalFooter>
        </Modal>
    );
}

export default PostModal;