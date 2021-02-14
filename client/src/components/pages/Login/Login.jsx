import React from 'react'
import {NavLink} from 'react-router-dom'
import LoginForm from './LoginForm'
import withSlowAppear from "../../../hoc/withSlowAppear";

const Login = () => {
    return (
        <>
            <LoginForm/>
            <div className={'mt-2'}>
                <NavLink to={'/registration'}>Нет аккаунта? Регистрация</NavLink>
            </div>
        </>
    )
}

export default withSlowAppear(Login)