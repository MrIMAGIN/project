import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar";
import {observer} from "mobx-react-lite";
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { Button, Nav } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import '../Auth.css';

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
        <nav>
            <Navbar className="topnav">
                {user.isAuth ?
                <Nav>
                    <button onClick={() => click()} className="btn navbtn">Выйти</button>
                </Nav>
                : <Nav>
                    <button className="btn navbtn" onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</button>
                </Nav>}
            </Navbar>
        </nav>
    );
});

export default NavBar;