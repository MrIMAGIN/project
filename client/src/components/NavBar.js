import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar";
import {observer} from "mobx-react-lite";
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { Button, Nav } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const NavBar = observer(() => {

    const {user} = useContext(Context);
    const history = useHistory();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    const click = () => {
        logOut();
        history.push(LOGIN_ROUTE);
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <Navbar className="navbar navbar-light bg-light">
                <NavLink className="navbar-brand mb-0 h1" to={MAIN_ROUTE}>Main</NavLink>
                {user.isAuth ?
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={() => click()} className='ml-auto'>Выйти</Button>
                </Nav>
                : <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>}
            </Navbar>
        </nav>
    );
});

export default NavBar;