import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'

export default function Aside() {
    return (

        <div className="Aside">
            <div className="my-logo">
                ICTAPP
            </div>
            <Link to="/chat" className="my-link-aside">Chat</Link>
            <Link to="/lista" className="my-link-aside">Disciplinas</Link>
            <Link to="/cursos" className="my-link-aside">Cursos</Link>

        </div>


    )
}