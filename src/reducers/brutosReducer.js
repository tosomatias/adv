import {
    AGREGAR_BRUTO,
    AGREGAR_BRUTO_EXITO,
    AGREGAR_BRUTO_ERROR,
    COMENZAR_DESCARGA_BRUTOS,
    DESCARGA_BRUTOS_EXITO,
    DESCARGA_BRUTOS_ERROR,
} from '../types';


const initialState = {
    brutos: [],
    error:null,
    loading:null,
}

export default function(state = initialState , action) {
    switch(action.type) {

        case AGREGAR_BRUTO:
        case COMENZAR_DESCARGA_BRUTOS:    
            return {
                ...state,
                loading:action.payload
            }
        case AGREGAR_BRUTO_EXITO:
            return {
                ...state,
                loading:null,
                brutos:[...state.brutos , action.payload]
            }    
        case AGREGAR_BRUTO_ERROR:
        case DESCARGA_BRUTOS_ERROR:    
            return {
                ...state,
                error:action.payload,
                loading:null
            }    
    
    case DESCARGA_BRUTOS_EXITO:
        return {
            ...state,
            loading:null,
            brutos:action.payload
        }     
        default:
            return state;
    }
};