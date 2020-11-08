import React,{Fragment,useState,useEffect} from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import {editarBrutoAction} from '../actions/brutosActions';
import styled from '@emotion/styled';
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';


const Body = styled.div`
    background-color:#78c2ad;
`;
const EditarBruto = () => {

    const [bruto,guardarBruto] = useState({
        nombre:'',
        fecha:'',
        clave:'',
        clave2:'',
        ubicacion:'',
        linkBruto:'',
        linkExportado:''
    });
    const history = useHistory();
    const dispatch = useDispatch();
    const brutoeditar = useSelector(state => state.brutos.brutoeditar);
    useEffect(()=> {
        guardarBruto(brutoeditar);
    },[brutoeditar]);
    const {nombre,fecha,clave,clave2,ubicacion,linkBruto,linkExportado} = bruto;
    const onChangeBruto = e => {
        guardarBruto({
            ...bruto,
            [e.target.name]:e.target.value
        });
    }
    const submitEditarBruto = (e) => {
        e.preventDefault();

        dispatch(editarBrutoAction(bruto));
        Swal.fire({
            icon: 'success',
            title: '',
            text: 'La informacion se cargo correctamente!',
            
        })

        history.push('/brutos/buscar');
    }

    return (  
        <Fragment>
            <Body>
                <div className="row justify-content-center  ">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center mb-4 font-weight-bold">
                                    Editar Informacion
                                </h2>
                                <form
                                    onSubmit = {submitEditarBruto}
                                >
                                    <div className='form-group'>
                                        <label>Nombre del archivo:</label>
                                        <input 
                                            type='text'
                                            name='nombre'
                                            className="form-control nuevo-post"
                                            value = {nombre}
                                            onChange = {onChangeBruto}
                                        
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Fecha del archivo:</label>
                                        <input 
                                            type='text'
                                            name='fecha'
                                            className="form-control "
                                            value = {fecha}
                                            onChange = {onChangeBruto}
                                        
                                            
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Palabra clave:</label>
                                        <input 
                                            type='text'
                                            name='clave'
                                            className="form-control"
                                            value = {clave}
                                            onChange = {onChangeBruto}
                                        
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Palabra clave 2:</label>
                                        <input 
                                            type='text'
                                            name='clave2'
                                            className="form-control"
                                            value = {clave2}
                                            onChange = {onChangeBruto}
                                        
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Ubicacion  del archivo:</label>
                                        <input 
                                            type='text'
                                            name='ubicacion'
                                            className="form-control"
                                            value = {ubicacion}
                                            onChange = {onChangeBruto}
                                        
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Link del archivo Bruto:</label>
                                        <input 
                                            type='text'
                                            name='linkBruto'
                                            className="form-control"
                                            value = {linkBruto}
                                            onChange = {onChangeBruto}
                                        
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Link del archivo Exportado:</label>
                                        <input 
                                            type='text'
                                            name='linkExportado'
                                            className="form-control"
                                            value = {linkExportado}
                                            onChange = {onChangeBruto}
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

export default EditarBruto;