import React from 'react';
import './styles.css';

export default function backdrop(props) {
    return(
    <div className="backdrop" onClick={props.click} />
    );
};
