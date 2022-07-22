import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote, updateNote, getAllNotes } from "../../redux/actions";
import './Note.css';

export default function Note({title,contents, id, archived}){

    const [decision, setDecision] = useState(false);
    const dispatch = useDispatch();

    function yesDelete(){
        dispatch(deleteNote(id))
        window.location.reload();
    }

    function noDelete(){
        setDecision(false);
    }

    function archiveNote(){
        let archiveDecision = !archived;
        dispatch(updateNote(id,{archived: archiveDecision}))
        dispatch(getAllNotes())
    }

    if(decision){
        return(
            <div className="container-decision">
                <h2>Are You Sure</h2>
                <div>
                    <button onClick={yesDelete} className="button-yes">SI</button>
                    <button onClick={noDelete} className="button-no">NO</button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div id={id} className="container-note">
                <div className="container-text">
                    <h2>Title: {title}</h2>
                    <h3>Content: {contents}</h3>
                </div>
                <div className="container-icons">
                    <div onClick={()=>setDecision(true)} className="cursor cont-icon-delete">
                        <i className="fa-solid fa-trash-can fa-2x"></i>
                    </div>
                    <Link to={`/update/${id}`}>
                        <div className="cursor cont-icon-edit">
                            <i className="fa-solid fa-pen-to-square fa-2x"></i>
                        </div>
                    </Link>
                    <div onClick={archiveNote} className="cursor cont-icon-archive">
                        <i className="fa-solid fa-box-archive fa-2x"></i>
                    </div>
                </div>
            </div>
        )
    }
}