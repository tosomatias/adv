import React, { Fragment } from 'react';
import jumbotrom from '../jumbotrom.jpg';
import styled from '@emotion/styled';



const Img = styled.img`
    width:550px; 
    height:350px;
    background-size: cover;
    background-position: center center;
    background-size: cover;
    margin-top:50px;
    margin-bottom:50px;
    margin-left:300px
    

`;



const Inicio = () => {
    return (  
        <Fragment>
        
            <div className="container">
                
                <Img src={jumbotrom} alta='fondo' />
                    
                
            </div>
            
            
            
            
            <footer>
                    <div className="container p-5 text-white text-center">
                        <a href="https://twitter.com/">
                            <i className="fab fa-twitter text-white  "></i>
                        </a>
                        
                        <a href="https://www.instagram.com/">
                            <i className="fab fa-instagram text-white mr-2 ml-2"></i>
                        </a>
                        
                    
                        <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f  text-white ml-1 "></i>
                        </a>
                    </div>
            </footer>


        </Fragment>
    );
}

export default Inicio;