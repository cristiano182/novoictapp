import React from 'react'
import './styles.css'
import CircularProgressBar from '../CircularProgressBar/index'

export default function Simulator() {

    return (
        <div className="painel">
            <div className="my-header">
                <div className="my-header-button"><button className="my-button2" type="button">Curso: Engenharia de Materiais</button></div>

                <div className="my-circle">
                    <p style={{ fontSize: '10px', color: '#ddd' }}>0 horas em UC'S OBRIGATORIAS de um total de 3204 </p>
                    <CircularProgressBar />
                </div>


            </div>
            <div className="my-columns">
                <div className="my-column">
                    <div className="my-card-header" >Disciplinas já cursadas</div>
                    <div className="my-card-body"> lista</div>
                </div>
                <div className="my-column">
                    <div className="my-card-header" >Disciplinas obrigatorias do seu curso</div>
                    <div className="my-card-body"> lista</div>
                </div>
                <div className="my-column">
                    <div className="my-card-header" >Disciplinas interdisciplinares BCT</div>
                    <div className="my-card-body"> lista</div>
                </div>
            </div>
        </div>
    )
}