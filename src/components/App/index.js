import React, { useState, useEffect } from 'react';
import Aside from '../Aside/index'
import NavBar from '../NavBar/index'
import './styles.css'
import SideDrawer from '../SideDrawer/index'
import Backdrop from '../Backdrop/index'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Chat from '../Chat/index'
import ListSubjects from '../ListSubjects/index'
import Simulator from '../Simulator/index'
import RightSide from '../RightSide/index'
import ListDrive from '../ListDrive/index'
import JobList from '../JobList/index'
import Home from '../Home/index'
import Blog from '../Blog/index'
import Curso from '../Cursos/index'


export default function App() {
    const [sideDrawerOpen, setDrawer] = useState(false)
    function drawerToggleClickHandler() {
        setDrawer(true)
        return true
    }
    function backdropClickHandler() {
        setDrawer(false)
    }
    let backdrop;
    if (sideDrawerOpen) {
        backdrop = <Backdrop click={backdropClickHandler} />
    }
    return (
        <BrowserRouter>
            <div className="App">
                <Aside />
                <div className="my-navigations">
                    <NavBar drawerClickHandler={drawerToggleClickHandler} />
                    <SideDrawer show={sideDrawerOpen} />
                    {backdrop}
                    <div className="home-page">
                        <Switch>
                            <Route path="/artigos" exact component={Blog} />
                            <Route path="/simulador" exact component={Simulator} />
                            <Route path="/lista" exact component={ListSubjects} />
                            <Route path="/chat" exact component={Chat} />
                            <Route path="/lista-drive" exact component={ListDrive} />
                            <Route path="/job-list" exact component={JobList} />
                            <Route path="/" exact component={Home} />
                            <Route path="/cursos" exact component={Curso} />
                          
                        </Switch>
                    </div>
                </div>
    
            </div>
        </BrowserRouter>
    );
}
