import {
    AGREGAR_BRUTO,
    AGREGAR_BRUTO_EXITO,
    AGREGAR_BRUTO_ERROR,
    COMENZAR_DESCARGA_BRUTOS,
    DESCARGA_BRUTOS_EXITO,
    DESCARGA_BRUTOS_ERROR,
    OBTENER_BRUTO_ELIMINAR,
    BRUTO_ELIMINADO_EXITO,
    BRUTO_ELIMINADO_ERROR,
    OBTENER_BRUTO_EDITAR,
    BRUTO_EDITADO_EXITO,
    BRUTO_EDITADO_ERROR
} from '../types';


const initialState = {
    brutos: [],
    error:null,
    loading:null,
    brutoeliminar:null,
    brutoeditar:null
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
        case BRUTO_ELIMINADO_ERROR:  
        case BRUTO_EDITADO_ERROR :
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
    case OBTENER_BRUTO_ELIMINAR:
        return {
            ...state,
            brutoeliminar:action.payload
        }   
    case BRUTO_ELIMINADO_EXITO:
        return {
            ...state,
            brutos:state.brutos.filter(bruto => bruto.id !== state.brutoeliminar),
            brutoeliminar:null
        }     
    case OBTENER_BRUTO_EDITAR:
        return {
            ...state,
            brutoeditar:action.payload

        }    
    case BRUTO_EDITADO_EXITO:
        return {
            ...state,
            brutoeditar:null,
            brutos: state.brutos.map(bruto => bruto.id === action.payload.id ? bruto = action.payload : bruto)
        }    
        default:
            return state;
    }
};