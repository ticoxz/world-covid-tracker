import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Paises from './components/Paises';




const App = () => {
    return ( 
        <div>
            <NavBar />
            <Paises />
        </div>
     );
}
 
export default App;