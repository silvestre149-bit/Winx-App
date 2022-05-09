import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Home from '../pages/home';
import Pagina10 from '../pages/pagina10';
import Pagina2 from '../pages/pagina2';
import Pagina3 from '../pages/pagina3';
import Pagina4 from '../pages/pagina4';
import Pagina5 from '../pages/pagina5';
import Pagina6 from '../pages/pagina6';
import Pagina7 from '../pages/pagina7';
import Pagina8 from '../pages/pagina8';
import Pagina9 from '../pages/pagina9';


function Routes() {

  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pagina2" exact component={Pagina2} />
        <Route path="/pagina3" exact component={Pagina3} />
        <Route path="/pagina3" exact component={Pagina3} />
        <Route path="/pagina4" exact component={Pagina4} />
        <Route path="/pagina5" exact component={Pagina5} />
        <Route path="/pagina6" exact component={Pagina6} />
        <Route path="/pagina7" exact component={Pagina7} />
        <Route path="/pagina8" exact component={Pagina8} />
        <Route path="/pagina9" exact component={Pagina9} />
        <Route path="/pagina10" exact component={Pagina10} />

    </Switch>
  );
}

export default Routes;
