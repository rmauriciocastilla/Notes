import { GET_ALL_NOTES, GET_NOTE} from "../actions";

const initialState = {
    notes: [],
    archived: [],
    note: {}
}

export default function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_ALL_NOTES:
            return {
                ...state,
                notes: action.payload.filter(note=>!note.archived),
                archived: action.payload.filter(note=>note.archived)
            }
        
        case GET_NOTE:
            return {
                ...state,
                note: action.payload
            }
        default:
            return {...state}
    }    
}