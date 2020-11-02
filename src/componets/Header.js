import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import imagen from '../adv.jpg';




const Imagen = styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 75px;
    height: 75px;
    max-width: 100%;
    height: auto;
    margin-left:5px;
`;
const Boton = styled.button`
    margin-right:10px;
    background-color:#5a5a5a;

`;
const Botonn = styled.button`
    background-color:#5a5a5a;
`;

const Header = () => {
    return (  
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            
        
                <Imagen src={imagen} alt="logo"/>
                <Link to = {'/'}><h1 className='ml-2'>Soluciones PauLafforgue</h1></Link>
                <div className="navbar-collapse" id="firstid">
                    <div className='container'>
                        <div className='navbar-nav  ml-auto'>
                        <Link to={'/brutos/nuevo'}><Boton type='button' className="btn  nuevo-post d-block d-md-inline-block ">Agregar Informacion</Boton></Link>
                        <Link to={'/brutos/buscar'}> <Botonn  type='button' className="btn  nuevo-post d-block d-md-inline-block ">Buscar Informacion</Botonn></Link>
                        </div>
                    
                    </div>

                </div>
        </nav>
    );
}

export default Header;