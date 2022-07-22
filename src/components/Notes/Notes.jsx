import React, {useEffect} from "react";
import Note from "../Note/Note";
import { useDispatch, useSelector} from "react-redux";
import {getAllNotes} from "../../redux/actions";
import './Notes.css';

export default function Notes(){
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllNotes());
    },[notes,dispatch])
    
    
    if(!notes.length){
        return(
            <h1 className="h1center">There are no active notes here 😓</h1>
            )
    }
    return(
        <div>
            <h1  className="h1center">My Notes 🧾</h1>
            <div className="container-notes">
                {notes.map(note=>(
                    <Note
                        id={note.id}
                        key={note.id}
                        title= {note.title}
                        contents = {note.contents}
                        archived = {note.archived}
                    />
                ))}
            </div>
        </div>
    )
}