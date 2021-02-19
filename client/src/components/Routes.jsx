import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
import NotFound from './pages/NotFound/NotFound'
import Registration from './pages/Registration/Registration'
import {connect} from 'react-redux'
import {getIsAutentificated} from "../selectors/selectors";
import Messages from "./pages/Messages/Messages";
import Friends from "./pages/Friends/Friends";
import Peoples from "./pages/Peoples/Peoples";


const Routes = ({isAuthentificated}) => {

    if (isAuthentificated) {
        return (<Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/messages" component={Messages}/>
                <Route exact path="/friends" component={Friends}/>
                <Route exact path="/peoples" component={Peoples}/>
                <Route exact path="/login">
                    <Redirect to={'/'}/>
                </Route>
                <Route exact path="/registration">
                    <Redirect to={'/'}/>
                </Route>
                <Route path="*" component={NotFound}/>
            </Switch>
        )
    } else {

    return (
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/" >
                <Redirect to={'/login'}/>
            </Route>
            <Route path="*" component={NotFound}/>
        </Switch>
    )}

}

const mapStateToProps = (state) => {
    return {
        isAuthentificated: getIsAutentificated(state)
    }
}

export default connect(mapStateToProps, null)(Routes)