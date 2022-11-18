import { Note, SettingsRemote } from "@mui/icons-material";
import React, { useState } from "react";
import {middspacesRef} from './firebase';
import Button from '@mui/material/Button';

function CreateRes() {
    const [res, setRes] = React.useState("test")

    const createRes = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        const item = {
            task: res,
            done: false
        }
    
        middspacesRef.push(item)
        setRes("")
    }

    return (
        <form onSubmit={createRes}>
            <input type = "text" value={res} onChange={(e) => setRes(e.target.value)} placeholder="res"/>
        </form>
    );

}

export default CreateRes;