import React,{Fragment, useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {obtenerBrutosAction} from '../actions/brutosActions';





import Swal from 'sweetalert2';


const Buscador = () => {

    const dispatch = useDispatch();
    const [buscar,guardarBusqueda] = useState('');
    const [consultas,guardarConsulta] = useState([]);
    

    


    useEffect(() => {

        const cargarBrutos = () => dispatch(obtenerBrutosAction());
        cargarBrutos();
         // eslint-disable-next-line
    },[]);

    const brutos = useSelector(state => state.brutos.brutos);
    
    

    const onSubmitBuscar = e => {
        e.preventDefault();
        
        if(buscar.trim() === ''){
            return  Swal.fire({
                icon: 'error',
                title: 'Todos los Campos son Obligatorios',
            });
        }
    
        const respuesta = brutos.filter(bruto => {
            return bruto.clave === buscar 
            
        });
        guardarConsulta(respuesta);
        
    };
    
  console.log(consultas);
    
    

    
    


    return (  
        <Fragment>
            <div className="row justify-content-center mt-4 ">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Buscar informacion
                            </h2>
                            <form
                                onSubmit = {onSubmitBuscar}
                            >
                                <div className='form-group'>
                                    <input 
                                        type='text'
                                        name='buscar'
                                        className="form-control"
                                        placeholder= 'Ej: Parque Sarmiento'
                                        value = {buscar}
                                        onChange = {e => guardarBusqueda(e.target.value)}
                                    />
                                </div>
                                <button
                                        type="submit"
                                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                    >Buscar Informacion</button>
                            </form>

                
                        
                        </div>
                    </div>
                </div> 
            </div>
        </Fragment>
    );
}

export default Buscador;