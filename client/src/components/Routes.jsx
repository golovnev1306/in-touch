import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
import NotFound from './pages/NotFound/NotFound'
import Registration from './pages/Registration/Registration'


const Routes = () => ( 
<Switch>
	<Route exact path="/" component={Main}/>
	<Route exact path="/login" component={Login}/>
	<Route exact path="/registration" component={Registration}/>
	<Route path="*" component={NotFound}/>
</Switch>
)

export default Routes