import React from 'react';
import {useDispatch} from 'react-redux';
import {borrarBrutoAction,obtenerBrutoEditar} from '../actions/brutosActions';
import { useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';


const Bruto = ({consulta}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    //console.log(consulta);
    const {nombre,fecha,ubicacion,linkBruto,linkExportado,id} = consulta;
    const confirmarEliminarBruto = id => {

        Swal.fire({
            title: 'Pau estás segura de ELIMINAR????',
            text: "Una vez eliminado no lo podras recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(borrarBrutoAction(id));
        
            }
        })
        history.push('/brutos/nuevo');
    }
    const redireccionarEdicion = consulta => {
        dispatch(obtenerBrutoEditar(consulta))
        history.push(`/brutos/editar/${consulta.id}`);
    }


        return (  
            <div >
                <div className="col md-4 mb-3 font-weight-bold ">
                    <div className="card ">
                
                        <h2 className='card-header '>Titulo: {nombre.replace(/^\w/, (c) => c.toUpperCase())}</h2>
                        <div className='card-body'>
                            <ul>
                                <li className='mt-2'>Fecha: {fecha}</li>
                                <li>Ubicacion:  {ubicacion.replace(/^\w/, (c) => c.toUpperCase())}</li>
                                <li>Link Bruto:   {linkBruto}</li>
                                <li>Link Exportado: {linkExportado}</li>
                            </ul>
                                <button 
                                    type="button"
                                    className="btn btn-primary ml-2"
                                    onClick={() => redireccionarEdicion(consulta)}
                                
                                    >Editar
                                </button>
                                
                                    <button
                                        type="button"
                                        className="btn btn-danger ml-4"
                                        onClick = {() => confirmarEliminarBruto(id)}
                                    >
                                    Eliminar
                                </button>
                        </div>
                    
                        

                    </div>
            </div>

            </div>
    );
}

export default Bruto;