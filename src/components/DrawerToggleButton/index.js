import React from 'react'

import './styles.css'

export default function drawerToggleButton(props) { 

  return(
  <button className="toggle-button"  onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
  )

}
