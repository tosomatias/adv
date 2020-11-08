import React from 'react';
import Header from './componets/Header';
import Inicio from './componets/Inicio';
import NuevoBruto from './componets/NuevoBruto';
import Buscador from './componets/Buscador';
import EditarBruto from './componets/EditarBruto';


import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom';


import {Provider} from 'react-redux';
import store from './store';




function App() {
  return (
    <Router>
      <Provider store = {store}>
        <Header/>
          
          <Switch>
            <Route exact path='/' component={Inicio}/>
            <Route exact path='/brutos/nuevo' component={NuevoBruto}/>
            <Route exact path = '/brutos/buscar' component={Buscador}/>
            <Route exact path='/brutos/editar/:id' component={EditarBruto}/>
          </Switch>
      </Provider>
    </Router>
  );
}

export default App;
