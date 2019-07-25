import React from 'react';


import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'

import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import loadings from './pages/ui/loadings'
import carousel from './pages/ui/carousel'

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
                        {/* <Route component={nomatch}/> */}
                    </Admin>
                    }/>
                </App>
            </HashRouter>
         );
    }
}
 
export default IRouter;