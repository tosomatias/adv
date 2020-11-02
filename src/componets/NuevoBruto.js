import React, { Fragment , useState} from 'react';
import {useDispatch} from 'react-redux';
import {crearNuevoBrutoAction} from '../actions/brutosActions';
import {useHistory} from 'react-router-dom';



import styled from '@emotion/styled';
import Swal from 'sweetalert2';



const Body = styled.div`
    background-color:#78c2ad;
`;

const  NuevoBruto = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    
    const [nombre,guardarNombre] = useState('');
    const [fecha,guardarFecha] = useState('');
    const [clave,guardarClave] = useState('');
    const [clave2,guardarClave2] = useState('');
    const [ubicacion,guardarUbicacion] = useState('');
    const [linkBruto,guardarLinkBruto] = useState('');
    const [linkExportado,guardarLinkExportado] = useState('');

    const agregarBruto = (bruto) => dispatch(crearNuevoBrutoAction(bruto));



    const submitNuevoBruto = e => {
        e.preventDefault();
        if(nombre.trim() === ''|| clave.trim() === ''|| clave2.trim() === '' || ubicacion.trim() === '' || linkBruto.trim() === ''){
            return  Swal.fire({
                icon: 'error',
                title: 'Todos los Campos son Obligatorios',
            });
        }

        agregarBruto({
            nombre,
            fecha,
            clave,
            clave2,
            ubicacion,
            linkBruto,
            linkExportado
        });
        history.push('/');
    }




    return (  
        <Fragment>
            <Body>
                <div className="row justify-content-center ">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center mb-4 font-weight-bold">
                                    Agregar Nuevo Informacion
                                </h2>
                                <form
                                    onSubmit={submitNuevoBruto}
                                >
                                    <div className='form-group'>
                                        <label>Nombre del archivo:</label>
                                        <input 
                                            type='text'
                                            name='nombre'
                                            className="form-control"
                                            value={nombre}
                                            onChange = {e => guardarNombre(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Fecha del archivo:</label>
                                        <input 
                                            type='text'
                                            name='fecha'
                                            className="form-control"
                                            value={fecha}
                                            onChange = {e => guardarFecha(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Palabra clave:</label>
                                        <input 
                                            type='text'
                                            name='clave'
                                            className="form-control"
                                            value = {clave}
                                            onChange = {e => guardarClave(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Palabra clave 2:</label>
                                        <input 
                                            type='text'
                                            name='clave2'
                                            className="form-control"
                                            value = {clave2}
                                            onChange = {e => guardarClave2(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Ubicacion  del archivo:</label>
                                        <input 
                                            type='text'
                                            name='ubicacion'
                                            className="form-control"
                                            value = {ubicacion}
                                            onChange = {e => guardarUbicacion(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Link del archivo Bruto:</label>
                                        <input 
                                            type='text'
                                            name='linkBruto'
                                            className="form-control"
                                            value = {linkBruto}
                                            onChange = {e => guardarLinkBruto(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Link del archivo Exportado:</label>
                                        <input 
                                            type='text'
                                            name='linkExportado'
                                            className="form-control"
                                            value = {linkExportado}
                                            onChange = {e => guardarLinkExportado(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                    >Agregar Informacion</button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Body>
        </Fragment>
    );
}

export default  NuevoBruto;