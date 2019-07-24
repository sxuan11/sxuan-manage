import React from 'react';


import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'

import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
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
                        <Route component={nomatch}/>
                    </Admin>
                    }/>
                </App>
            </HashRouter>
         );
    }
}
 
export default IRouter;