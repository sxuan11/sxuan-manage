import React from 'react';


import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'

import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons.jsx'
import Modals from './pages/ui/modals.jsx'
import loadings from './pages/ui/loadings.jsx'
import carousel from './pages/ui/carousel.jsx'
import chose from './pages/ui/chose.jsx'
import form from './pages/ui/form.jsx'

import nomatch from './pages/nomatch/index'

class IRouter extends React.Component {
    state = {  }
    render() { 
        return ( 
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' render={()=>
                    <Admin>
                        <Route path='/admin/ui/buttons' component={Buttons}/>
                        <Route path='/admin/ui/modals' component={Modals}/>
                        <Route path='/admin/ui/loadings' component={loadings}/>
                        <Route path='/admin/ui/carousel' component={carousel}/>
                        <Route path='/admin/ui/chose' component={chose}/>
                        <Route path='/admin/ui/form' component={form}/>
                        {/* <Route component={nomatch}/> */}
                    </Admin>
                    }/>
                </App>
            </HashRouter>
         );
    }
}
 
export default IRouter;