import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton';
import './styles.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'


export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <div className="buttons">
                <Link className="my-link" to="/"> Home  </Link>
                <Link className="my-link" to="/simulador"> Simulador  </Link>
                <Link className="my-link" to="/lista-drive"> Google Drive </Link>
                <Link className="my-link" to="/artigos"> Artigos </Link>
                <Link className="my-link" to="/job-list"> Vagas</Link>
            </div>
            <div className="my-auth"><FaUserCircle size={40} /> <button className="my-auth-button">Entrar</button> </div>
            <div className="drawer-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
        </div>
    );
}
