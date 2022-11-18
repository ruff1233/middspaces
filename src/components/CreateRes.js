import React from "react";
import {resRef} from '../firebase';

function CreateRes() {
    const [res, setRes] = React.useState("test")

    const createRes = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        const item = {
            task: res,
            done: false
        }
    
        resRef.push(item)
        setRes("")
    }

    return (
        <form onSubmit={createRes}>
            <input type = "text" value={res} onChange={(e) => setRes(e.target.value)} placeholder="res"/>
        </form>
    );

}

export default CreateRes;