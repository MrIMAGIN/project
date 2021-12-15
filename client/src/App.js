import logo from './logo.svg';
import './App.css';
import React, {useContext, useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import {observer} from "mobx-react-lite";
import NavBar from './components/NavBar';
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from 'react-bootstrap';

const App = observer (() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setUser(true);
      user.setIsAutn(true);
    }).finally(() => setLoading(false));
  }, [])

  if(loading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar/>
     <AppRouter/>
    </BrowserRouter>
  );
});

export default App;
