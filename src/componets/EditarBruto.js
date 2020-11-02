import React from 'react';


const EditarBruto = () => {
    return (  
        <div className="row justify-content-center mt-3">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form>
                            <div className='form-group'>
                                <label>Nombre del archivo:</label>
                                <input 
                                    type='text'
                                    name='nombre'
                                    className="form-control"
                                />
                            </div>
                            <div className='form-group'>
                                <label>Palabra clave:</label>
                                <input 
                                    type='text'
                                    name='clave'
                                    className="form-control"
                                />
                            </div>
                            <div className='form-group'>
                                <label>Ubicacion  del archivo:</label>
                                <input 
                                    type='text'
                                    name='ubicacion'
                                    className="form-control"
                                />
                            </div>
                            <div className='form-group'>
                                <label>Link del archivo:</label>
                                <input 
                                    type='text'
                                    name='link'
                                    className="form-control"
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
    );
}

export default EditarBruto;