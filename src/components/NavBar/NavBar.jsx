import React from "react";
import { Link} from "react-router-dom";
import './NavBar.css'
export default function NavBar(){
    return(
        <nav>
            <Link to="/" className="navlink">My Notes</Link>
            <Link to="/create" className="navlink">Create note</Link>
            <Link to="/archive" className="navlink">Archived notes</Link>
        </nav>
    )
}