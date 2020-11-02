import React from 'react';

const Bruto = ({consulta}) => {
    console.log(consulta);
    const {nombre,fecha,ubicacion,linkBruto,linkExportado} = consulta;
        return (  
            <div >
                <div className="col md-4 mb-3 font-weight-bold ">
                    <div className="card ">
                        <h2 className='card-header text-center'>{nombre}</h2>
                        <div className='card-body'>
                            <ul>
                                <li className='mt-2'>Fecha:{fecha}</li>
                                <li>Ubicacion:  {ubicacion}</li>
                                <li>Link Bruto:   {linkBruto}</li>
                                <li>Link Exportado: {linkExportado}</li>
                            </ul>
                                <button 
                                    type="button"
                                    className="btn btn-primary ml-2"
                                
                                    >Editar
                                </button>
                                
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                
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