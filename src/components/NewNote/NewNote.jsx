import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/actions";
import "./NewNote.css";
export default function NewNote(){
    
    const [input, setInput] = useState({
        title: "",
        contents: ""
    })

    const dispatch = useDispatch();

    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(createNote(input))
        setInput({
            title: "",
            contents: ""
        })
    }

    return(
        <div className="container-newnote">
            <h1 className="h1-newnote">CREATE NOTE</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: 
                        <input type="text" name="title" id="title" value={input.title} onChange={handleChange} required/>
                    </label>
                </div>
                <br/>
                <div>
                    <label htmlFor="contents">Content: 
                        <textarea type="text" name="contents" id="contents" value={input.contents} onChange={handleChange} required/>
                    </label> 
                </div>
                <div>
                    <button className="button-submit" type="submit">Create Note</button>
                </div>
            </form>
        </div>
    )
}