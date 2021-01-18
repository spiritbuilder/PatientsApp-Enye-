import React from 'react'

function Shower({group}) {
    return (
        <div>
            {group && group.map((patient)=>(
                <div key={patient.phone} className="patient">
                    <div className="avatar">
                        {patient.FirstName[0]+""+patient.LastName[0]}
                    </div>
                    <div className="name">{patient.FirstName+" "+patient.LastName}</div>
                    </div>
                    
                ))}
        </div>
    )
}

export default Shower;
