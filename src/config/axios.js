
import axios from 'axios';


const InformacionAxios = axios.create({
    baseURL:'http://localhost:4000/'
    

});

export default InformacionAxios;