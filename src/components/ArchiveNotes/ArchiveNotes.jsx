import "./ArchiveNotes.css"
import React, {useEffect} from "react";
import Note from "../Note/Note";
import { useSelector, useDispatch } from "react-redux";
import { getAllNotes } from "../../redux/actions";

export default function ArchiveNotes(){
    const archived = useSelector(state => state.archived)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllNotes());
    },[archived])

    if(archived.length){
        return(
            <div>
                <h1 className="h1center">My archived notes 📁</h1>
                <div className="container-notes-archived">
                    {archived.length && archived.map(note=>(
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
    else{
        return(
        <h1 className="h1center">There are no notes filed here 😓</h1>
        )
    }
}