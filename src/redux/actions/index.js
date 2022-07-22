import axios from "axios";
export const GET_ALL_NOTES = "GET_ALL_NOTES";
export const GET_NOTE = "GET_NOTE";

export const getAllNotes = () => (dispatch) =>{
    return axios.get('https://rmauriciocastilla-notes-node.herokuapp.com/')
            .then(response=>response.data)
            .then(notes => dispatch({type: GET_ALL_NOTES, payload: notes}))
            .catch(e=>console.log(e))
}

export const deleteNote = (id) => () =>{
    return axios.delete(`https://rmauriciocastilla-notes-node.herokuapp.com/${id}`)
            .then(response=>response.data)
            .then(msg=>console.log(msg))
            .catch(e=>console.log(e));

}

export const updateNote = (id, payload) => () =>{
    return axios.put(`https://rmauriciocastilla-notes-node.herokuapp.com/${id}`, payload)
            .then(response=>response.data)
            .then(e => alert(e))
            .catch(e=>console.log(e));

}

export const createNote = (payload) => () =>{
    return axios.post('https://rmauriciocastilla-notes-node.herokuapp.com/', payload)
            .then(response=>response.data)
            .then(e=>alert(e))
            .catch(e=>console.log(e));
}

export const getNote = (id) => async (dispatch) =>{
    return await axios.get(`https://rmauriciocastilla-notes-node.herokuapp.com/${id}`)
            .then(response=>response.data)
            .then(note => dispatch({type: GET_NOTE, payload: note}))
            .catch(e=>console.log(e))
}