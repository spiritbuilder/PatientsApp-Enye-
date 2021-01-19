import React from 'react'
import "./Patient.css"

export default function Patient({person}) {
const modal= document.getElementById(person.Email);
    window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      } 
   const toggleModal=()=>{
if(document.getElementById(person.Email).style.display==="flex"){
    document.getElementById(person.Email).style.display="none"
}else document.getElementById(person.Email).style.display="flex"
    }

// const handleClick=()=>{
// toggleModal();
// }
    return (
        <div >
            <div class="tooltip">
                <div className="patient" onClick={toggleModal}>
                    <div className="avatar">
                        {person.FirstName[0]+""+person.LastName[0]}
                    </div>
                    <div className="info">
                    <div className="name"><span>{person.FirstName+" "+person.LastName}</span></div>
            <div><span>Email:</span> {person.Email}</div>
            <div className="phone"><span>Phone:</span> {person.PhoneNumber}</div>
                    </div>
                    
            
        
                    </div>
  <span class="tooltiptext">Click to see more details</span>
</div>
            
                    <div className="modal" id={person.Email}>
                    <div className="modalcontent">
                    <div className="modalavatar" >
                        {person.FirstName[0]+""+person.LastName[0]}
                    </div> 
                    <div className="info">
                       <div className="details"><span>First Name:</span> {person.FirstName}</div>
    <div className="details"><span>Last Name:</span> {person.LastName}</div>
    <div className="details"><span>Email:</span> {person.Email}</div>
    <div className="details"><span>Gender</span>: {person.Gender}</div>
    <div className="details"><span>PhoneNumber:</span> {person.PhoneNumber}</div>
    <div className="details"><span>PaymentMethod:</span> {person.PaymentMethod}</div>
                        
                    </div>
                    <div className="closebtn">
                    <button className="close" onClick={toggleModal}>Close</button>
                    </div>
                    </div>
                    
                    </div>
                    
                    </div>
                    
    )
}
