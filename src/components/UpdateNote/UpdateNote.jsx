import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getNote, updateNote} from "../../redux/actions";
import "./UpdateNote.css";

export default function UpdateNote({match}){
    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getNote(match.params.id))
    },[dispatch,match.params.id])
    
    let note = useSelector(state=>state.note)
    const [input, setInput] = useState({
        title: "",
        contents: ""
    })

    const handleChange = (e)=>{
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(updateNote(note.id,input))
        setInput({
            title: "",
            contents: ""
        })
        window.location.reload();
    }

    return(
        <div className="container-newnote">
            <h1>UPDATE NOTE - ID {note.id}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Actual title: {note.title}</h3>
                    <div className="container-label">
                        <label>New title: 
                            <input 
                                type="text" 
                                placeholder="Write your new note title" 
                                name="title" 
                                value={input.title}
                                onChange={handleChange}
                                required
                                />
                        </label>
                    </div>
                </div>
                <div>
                    <h3>Actual content: {note.contents}</h3>
                    <div className="container-label">
                        <label className="class-label">New content: 
                            <textarea 
                                type="text" 
                                placeholder="Write your new note title" 
                                name="contents" 
                                value={input.contents}
                                onChange={handleChange}
                                required
                                />
                        </label>
                    </div>
                </div>
                <div>
                    <input className="button-submit" type="submit" value="UPDATE NOTE"/>                
                </div>
            </form>
        </div>
    )
}