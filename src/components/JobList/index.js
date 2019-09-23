import React from 'react'
import './styles.css'
import CardJob from '../CardJob/index'



export default function JobList() {
    return (
        <div className="my-job-container">


            <div className="my-search-job" >
                <input className="my-input-job" placeholder="Busque pelo titulo da vaga..." />
            </div>



            <div className="my-job-list">
                <CardJob />
                <CardJob />
                <CardJob />
                <CardJob />
                <CardJob />
                <CardJob />
            </div>



        </div>
    )
}