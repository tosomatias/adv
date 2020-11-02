import {
    AGREGAR_BRUTO,
    AGREGAR_BRUTO_EXITO,
    AGREGAR_BRUTO_ERROR,
    COMENZAR_DESCARGA_BRUTOS,
    DESCARGA_BRUTOS_EXITO,
    DESCARGA_BRUTOS_ERROR,
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