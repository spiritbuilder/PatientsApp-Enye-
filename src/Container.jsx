import React, { Component } from 'react';
import axios from "axios";
import "./Container.css";
import Display from "./Display"

class Container extends Component {
state={
    searchvalue:"",
    filter1:"",
    filter2:"",
    patients:"",
    filtered:""
}

componentDidMount(){
this.makeApiCall();
//console.log("this is component did mount",this.state)
}
handleClick=(e)=>{
    this.handleSearch(this.state.searchvalue, this.state.filter1,this.state.filter2)
}
handleChange = e =>{
    
    this.setState({searchvalue: e.target.value})
    this.handleSearch(e.target.value, this.state.filter1,this.state.filter2)
    //console.log(this.state.searchvalue);
     
    
}
handleSearch= (searchvalue, filter1, filter2)=>{
   const arr =[];
    const p = this.state.patients;
    for(let i = 0; i<p.length;i++){
        if(filter1===""&&filter2===""){
            if ((p[i].FirstName.toLowerCase().includes(searchvalue.toLowerCase())||p[i].LastName.toLowerCase().includes(searchvalue.toLowerCase()))&&p[i].Gender.includes(filter1)&&p[i].PaymentMethod.includes(filter2)){
                arr.push(p[i]);
            }
        }else if(filter1!==""&&filter2===""){
            if ((p[i].FirstName.toLowerCase().includes(searchvalue.toLowerCase())||p[i].LastName.toLowerCase().includes(searchvalue.toLowerCase()))&&p[i].Gender===filter1&&p[i].PaymentMethod.includes(filter2)){
                arr.push(p[i]);
            }

        }else if(filter1===""&&filter2!==""){
            if ((p[i].FirstName.toLowerCase().includes(searchvalue.toLowerCase())||p[i].LastName.toLowerCase().includes(searchvalue.toLowerCase()))&&p[i].Gender.includes(filter1)&&p[i].PaymentMethod===filter2){
                arr.push(p[i]);
            }

        }else{
            if ((p[i].FirstName.toLowerCase().includes(searchvalue.toLowerCase())||p[i].LastName.toLowerCase().includes(searchvalue.toLowerCase()))&&p[i].Gender===filter1&&p[i].PaymentMethod===filter2){
                arr.push(p[i]);
            }

        }
    }

    this.setState({filtered:arr})


}

handlegender=(e)=>{
    this.setState({filter1: e.target.value});
    this.handleSearch(this.state.searchvalue, e.target.value,this.state.filter2)
    //console.log(this.state);
}
handlepayment=(e)=>{
    this.setState({filter2: e.target.value})
    this.handleSearch(this.state.searchvalue, this.state.filter1,e.target.value)
    //console.log(this.state);
}
makeApiCall = async ()=>{
const j  = await axios.get("https://api.enye.tech/v1/challenge/records");
this.setState({patients: j.data.records.profiles,
filtered:j.data.records.profiles})
}

    render() {
        
        return (
            <div className="top">
                <div className="header">
                    <h1>Patients Records App</h1>
                    <div className="search">
                        <input onChange={this.handleChange}   className="topsearchbar" type="text" placeholder="Kindly input Name to search"/>
                        
                    </div>
                    <div className="filter">
                        <select name="Gender" id="gender" value={this.state.filter1} onChange={this.handlegender}>
                            <option value="">Select Gender</option>
                            <option  value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer to skip">other</option>
                        </select>
                        <select name="paymentMethod" id="payment" value={this.state.filter2} onChange={this.handlepayment}>
                            <option value="">Select Payment Method</option>
                            <option  value="cc">Cash Credit</option>
                            <option value="paypal">Paypal</option>
                            <option value="money order">Money Order</option>
                            <option value="check">Check</option>
                        </select>
                    </div>
                    
                </div>
                
                <Display patients={this.state.filtered} />
                
            </div>
        );
    }
}

export default Container;

//<button onClick={this.handleSearch} className= "searchbtn"> Search</button>
