import React from 'react'
import './styles.css'
import CircularProgressBar from '../CircularProgressBar/index'


export default function CardJob(){
    return(
        <div className="my-card-job">
           <div className="my-circle-progress-job"> <CircularProgressBar /></div>
           <div className="my-description-job">

              <div className="my-job-title">Estágio em Engenharia de Materiais</div>
              <div className="my-job-infos">Informações</div>
              <div className="my-job-tags">Tag</div>



               </div>
        </div>
    )
}