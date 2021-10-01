import {FileActionTypes} from './file.types';
import {combineReducers} from "redux";

const INITIAL_STATE = {
}

const createReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FileActionTypes.CREATE.REQUEST:
            return{
                ...state,
            }

        case FileActionTypes.CREATE.SUCCESS:
            return{
                ...state,
            }

        case FileActionTypes.CREATE.ERROR:
            return{
                ...state,
            }

        case FileActionTypes.CREATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const updateReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FileActionTypes.UPDATE.REQUEST:
            return{
                ...state,
            }

        case FileActionTypes.UPDATE.SUCCESS:
            return{
                ...state,
            }

        case FileActionTypes.UPDATE.ERROR:
            return{
                ...state,
            }

        case FileActionTypes.UPDATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const deleteReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FileActionTypes.DELETE.REQUEST:
            return{
                ...state,
            }

        case FileActionTypes.DELETE.SUCCESS:
            return{
                ...state,
            }

        case FileActionTypes.DELETE.ERROR:
            return{
                ...state,
            }

        case FileActionTypes.DELETE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const showReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FileActionTypes.SHOW.REQUEST:
            return{
                ...state,
            }

        case FileActionTypes.SHOW.SUCCESS:
            return{
                ...state,
            }

        case FileActionTypes.SHOW.ERROR:
            return{
                ...state,
            }

        case FileActionTypes.SHOW.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const listReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FileActionTypes.LIST.REQUEST:
            return{
                ...state,
            }

        case FileActionTypes.LIST.SUCCESS:
            return{
                ...state,
            }

        case FileActionTypes.LIST.ERROR:
            return{
                ...state,
            }

        case FileActionTypes.LIST.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}





const fileReducer = combineReducers(
    {
        fileCreate: createReducer,
        fileUpdate: updateReducer,
        fileDelete: deleteReducer,
        fileShow: showReducer,
        fileList: listReducer,
    }
);

export default fileReducer;

