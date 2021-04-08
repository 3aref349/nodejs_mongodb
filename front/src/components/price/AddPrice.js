
import React, { Component } from 'react'
import './Test.css'





 class AddPrice extends Component {
    constructor(props) {
        super(props)
        this.state = {
         currentStep: 1,
          appDate:  '',
          appTime: '',

         Gas_80_Price:'' , 
         Gas_92_Price:'' , 
         Gas_95_Price:'' , 
         Diesel_Price:'' , 
        
        }
      }
    
      handleChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }
       
      handleSubmit = event => {
        event.preventDefault()
        const { appDate, appTime,  Gas_80_Price, Gas_92_Price, Gas_95_Price,Diesel_Price} = this.state
        alert(`Your registration detail: \n 
               AppDate: ${appDate} \n 
               AppTime: ${appTime} \n
               Gasoline 80: ${Gas_80_Price} \n
               Gasoline 92: ${Gas_92_Price} \n
               Gasoline 95: ${Gas_95_Price} \n
               Diesel: ${Diesel_Price} \n
            
               ` )
      }
      
      _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 1? 2: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }
    
    /*
    * the functions for our button
    */
    previousButton() {
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        return (
          <button 
            className="btn btn-secondary" 
            type="button" onClick={this._prev}>
          Previous
          </button>
        )
      }
      return null;
    }
    
    nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep <2){
        return (
          <button 
            className="btn btn-primary float-right" 
            type="button" onClick={this._next}>
          Next
          </button>        
        )
      }
      return null;
    }
      
      render() {    
        return (
          <React.Fragment>
          <h1>Step Form</h1>
          <p>Step {this.state.currentStep} </p> 
    
          <form onSubmit={this.handleSubmit}>
          {/* 
            render the form steps and pass required props in
          */}
            <Step1 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              appDate={this.state.appDate}
              appTime={this.state.appTime}
            />
            <Step2 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              prodonePrice={this.state.prodonePrice}
              prodtwoPrice={this.state.prodtwoPrice}
              prodthrePrice={this.state.prodthrePrice}
              prodfourPrice={this.state.prodfourPrice}
            />
    
         
            {this.previousButton()}
            {this.nextButton()}
    
          </form>
          </React.Fragment>
        );
      }
    }
    
    function Step1(props) {
      if (props.currentStep !== 1) {
        return null
      } 
      return(
        <div className="form-group">
          <label htmlFor="email">appDate</label>
          <input
            className="form-control"
            id="appdate"
            name="appDate"
            type="date"
            placeholder="Enter D"
            value={props.appDate}
            onChange={props.handleChange}
            />


<label htmlFor="email">apptime</label>
          <input
            className="form-control"
            id="appTime"
            name="appTime"
            type="time"
            placeholder="Enter D"
            value={props.appTime}
            onChange={props.handleChange}
            />

        </div>
      );
    }
    
    function Step2(props) {
      if (props.currentStep !== 2) {
        return null
      } 
      return(
        <React.Fragment>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter prodonePrice"
            value={props.prodonePrice}
            onChange={props.handleChange}
            />
              <input
            className="form-control"
            id="prodtwoPrice"
            name="prodtwoPrice"
            type="integr"
            placeholder="Enter prodtwoPrice"
            value={props.prodtwoPrice}
            onChange={props.handleChange}
            />

               <input
            className="form-control"
            id="prodthrePrice"
            name="prodthrePrice"
            type="float"
            placeholder="Enter prodthrePrice"
            value={props.prodthrePrice}
            onChange={props.handleChange}
            />
              <input
            className="form-control"
            id="prodfourPrice"
            name="prodfourPrice"
            type="float"
            placeholder="Enter prodfourPrice"
            value={props.prodfourPrice}
            onChange={props.handleChange}
            />
            
        </div>
        <button className="btn btn-success btn-block">Sign up</button>
        </React.Fragment>
      );
    }
  


    
    

export default AddPrice