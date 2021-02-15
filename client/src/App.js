import React, {useEffect} from 'react';
import Content from './components/Content'
import Header from './components/Header/Header'
import {connect} from 'react-redux'
import {initializeApp, setMessage} from "./redux/app-reducer";
import {getIsAutentificated, getIsInitialized, getMessage} from "./selectors/selectors";
import {Alert} from 'react-bootstrap'


const App = ({isAuthentificated, initializeApp, isInitialized, message, setMessage}) => {
    useEffect(() => {
        initializeApp()
    }, [initializeApp])
	
    const closeHandler = () => {
        setMessage({body: null})
    }


    if (isInitialized) {
        return (
            <div className="App">
                <Header/>
                {message.body && (<Alert variant={message.isSuccess ? 'success' : 'danger'} dismissible
                                         onClose={closeHandler}>{message.body}</Alert>)}

                <Content/>
            </div>
        )
    }
    return (
        <div className="App-loading">
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
        isAuthentificated: getIsAutentificated(state),
        isInitialized: getIsInitialized(state),
        message: getMessage(state)
    })

const mapDispatchToProps = dispatch => ({
    initializeApp: () => dispatch(initializeApp()),
    setMessage: message => dispatch(setMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
