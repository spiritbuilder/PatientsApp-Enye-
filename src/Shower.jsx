import React from 'react'
import Patient from "./Patient"
import "./Shower.css"

function Shower({group}) {
    return (
        <div className="show">
            <div className="shower">
            {group && group.map((patient)=>(
                <Patient person = {patient}/>
                    
                ))}
        </div>
        </div>
    )
}

export default Shower;
