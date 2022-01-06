import React, {useContext, useState } from "react";
import { Button, Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {observer} from "mobx-react-lite";
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Context } from "../index";
import '../Auth.css'

const Auth =  observer (() => {

    const {user} = useContext(Context)
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;

            if(isLogin)
            {
                data = await login(email, password);
            }
            else
            {
                data = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            history.push(MAIN_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }  
    }

    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center" 
            style={{height: window.innerHeight - 54}}>
                <Card style={{width: 500}} className="shadowbar p-5">
                    <h2 className="m-auto text">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control className="mt-2" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                        <Form.Control className="mt-2" placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                    </Form>
                    <button onClick={click} className="btn navbtn">
                        {isLogin ? 'Войти' : 'Регистрация'}
                        </button>
                    <div> {isLogin ? 
                    <NavLink to={REGISTRATION_ROUTE} className="text_reg">Регистрация</NavLink> :
                    <NavLink to={LOGIN_ROUTE} className="text_reg">Авторизация</NavLink>
                    }
                    </div>
                </Card>
            </Container>
        </div>
    )
});

export default Auth;