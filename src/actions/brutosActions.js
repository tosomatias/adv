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
    COMENZAR_EDICION_BRUTO,
    BRUTO_EDITADO_EXITO,
    BRUTO_EDITADO_ERROR
} from '../types';
import Swal from 'sweetalert2';


import InformacionAxios from '../config/axios';



export function crearNuevoBrutoAction(bruto){
    return  async(dispatch) => {
        dispatch(agregarBruto());
        try {
            await InformacionAxios.post('/brutos',bruto);
            
            dispatch(agregarBrutoExito(bruto));
            Swal.fire({
                icon: 'success',
                title: '',
                text: 'La informacion se cargo correctamente!',
                
            })
        } catch (error) {
            console.log(error);
            dispatch(agregarBrutoError(true));
        }
    }
}
const agregarBruto = () => ({
    type:AGREGAR_BRUTO,
    payload:true
});
const agregarBrutoExito = bruto => ({
    type:AGREGAR_BRUTO_EXITO,
    payload:bruto
});
const agregarBrutoError = (estado) => ({
    type:AGREGAR_BRUTO_ERROR,
    payload:estado
});

export function obtenerBrutosAction(){
    return async (dispatch) => {
        dispatch(descargarBrutos());

        try {
            const respuesta = await InformacionAxios.get('/brutos');
            
            dispatch(descargarBrutosExito(respuesta.data));

        } catch (error) {
            console.log(error);
            dispatch(descargarBrutosError);
            
        }
    }
}
const descargarBrutos = () => ({
    type:COMENZAR_DESCARGA_BRUTOS,
    payload:true
});
const descargarBrutosExito = brutos => ({
    type:DESCARGA_BRUTOS_EXITO,
    payload:brutos
});
const descargarBrutosError = () => ({
    type:DESCARGA_BRUTOS_ERROR,
    payload:true
});


export function borrarBrutoAction(id){
    return async(dispatch) => {
        dispatch(obtenerBrutoEliminar(id));

        try {
            await InformacionAxios.delete(`/brutos/${id}`);
            dispatch(brutoEliminadoExito());
            Swal.fire(
                'Eliminado',
                'Su informacion fue eliminada',
                'success'
            )
            
        } catch (error) {
            console.log(error);
            dispatch(brutoEliminadoError);
            
        }
    }
};


const obtenerBrutoEliminar= (id) => ({
    type:OBTENER_BRUTO_ELIMINAR,
    payload:id
});
const brutoEliminadoExito = () => ({
    type:BRUTO_ELIMINADO_EXITO,

});
const brutoEliminadoError  = () => ({
    type:BRUTO_ELIMINADO_ERROR,
    payload:true
});

export function obtenerBrutoEditar (bruto){
    return (dispatch) => {
        dispatch(obtenerBrutoAction(bruto));
    }
};
const obtenerBrutoAction = (bruto) => ({
    type:OBTENER_BRUTO_EDITAR,
    payload:bruto
});

export function editarBrutoAction(bruto) {
    return async(dispatch) => {
        dispatch(comenzarRdicionBruto());

        try {
            await InformacionAxios.put(`/brutos/${bruto.id}`,bruto);
            
            dispatch(brutoEditadoExito(bruto));
        } catch (error) {
            console.log(error);
            dispatch(brutoEditadoError());
            
        }
    }
};

const comenzarRdicionBruto = () =>({
    type:COMENZAR_EDICION_BRUTO,

});
const brutoEditadoExito = bruto => ({
    type:BRUTO_EDITADO_EXITO,
    payload:bruto
});
const brutoEditadoError= () => ({
    type:BRUTO_EDITADO_ERROR,
    payload:true
});