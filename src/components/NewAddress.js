import React, { Component } from 'react';
import axios from 'axios';
import {Form, Col, Button, ButtonToolbar} from 'react-bootstrap';
import './NewAddress.css'

class NewAddress extends Component {
  constructor(){
    super();
    this.state = {
      newAddress: []
    }
  this.createAddress = this.createAddress.bind(this);
  }

  createAddress(propertyType, unitNumber, streetType, streetNumber, street, suburb, postcode, state){
    axios.post('http://localhost:3000/addresses.json', {
      propertyType:propertyType, 
      unitNumber:unitNumber,
      streetType:streetType, 
      streetNumber:streetNumber, 
      street:street,
      suburb:suburb,
      postcode:postcode,
      state:state
    }).then((result) => {
          this.setState({ newAddress: [...this.state.newAddress, result.data ]})
          console.log(result.data);
          this.props.history.push("/");
      });
    }
    render(){
      return(
        <div className="main">
          <h2 className="h2-header">Add New Address</h2>
          <CreateForm onSubmit = { this.createAddress}/>
        </div>
        )
    }
};

class CreateForm extends Component {
  constructor(){
    super();
    this.state = {
      propertyType: '', 
      unitNumber: '',
      streetType: '', 
      streetNumber: '', 
      street: '',
      suburb: '',
      postcode: '',
      state: ''
    }
    this._handlePropertyType = this._handlePropertyType.bind(this);
    this._handleUnitNumber = this._handleUnitNumber.bind(this);
    this._handleStreetType = this._handleStreetType.bind(this);
    this._handleStreetNumber = this._handleStreetNumber.bind(this);
    this._handleStreet = this._handleStreet.bind(this);
    this._handleSuburb = this._handleSuburb.bind(this);
    this._handlePostcode = this._handlePostcode.bind(this);
    this._handleState = this._handleState.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handlePropertyType(e){
      this.setState({propertyType: e.target.value})
    };
    _handleUnitNumber(e){
      this.setState({unitNumber: e.target.value})
    };
    _handleStreetType(e){
      this.setState({streetType: e.target.value})
    };
    _handleStreetNumber(e){
      this.setState({streetNumber: e.target.value})
    };
    _handleStreet(e){
      this.setState({street: e.target.value})
    };
    _handleSuburb(e){
      this.setState({suburb: e.target.value})
    };
    _handlePostcode(e){
      this.setState({postcode: e.target.value})
    };
    _handleState(e){
      this.setState({state: e.target.value})
    }
    _handleSubmit(e){
      e.preventDefault();
      this.props.onSubmit(
        this.state.propertyType, 
        this.state.unitNumber, 
        this.state.streetType,
        this.state.streetNumber,
        this.state.street,
        this.state.suburb,
        this.state.postcode,
        this.state.state
        )
    };
    render(){
        return (
        <Form onSubmit = {this._handleSubmit} className="form-container">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="label">Property Type:</Form.Label>
                <Form.Control as="select" type="text" 
                  className="input"
                  onInput = {this._handlePropertyType} >
                  <option></option>
                  <option>House</option>
                  <option>Apartment</option>
                </Form.Control>
            </Form.Group>
        
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="label">Unit No.:</Form.Label>
                <Form.Control type="number" 
                  onInput = {this._handleUnitNumber} 
                  min="1"
                  className="input"
                />
            </Form.Group>
          </Form.Row>
        
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="label">Street Type:</Form.Label>
                <Form.Control type="text" 
                  onInput = {this._handleStreetType} 
                  className="input"
                />
                <br />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="red label">Street No.: </Form.Label>
                <Form.Control type="text" 
                  onInput = {this._handleStreetNumber} 
                  required 
                  className="input"
                />
                <br />
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="red label">Street:</Form.Label>
                <Form.Control type="text" 
                  onInput = {this._handleStreet} 
                  required
                  className="input" 
                />
                <br />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="red label">Suburb:</Form.Label>
                <Form.Control type="text" 
                  onInput = {this._handleSuburb} 
                  required 
                  style={{textTransform: 'capitalize'}}
                  className="input"
                />
                <br />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="red label">Post Code:</Form.Label>
                <Form.Control type="number" 
                  onInput = {this._handlePostcode} 
                  required min="1" 
                  className="input"
                />
                <br />
            </Form.Group>
                
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="red label">State:</Form.Label>
                <Form.Control type="text" 
                  onInput = {this._handleState} 
                  required 
                  style={{textTransform: 'uppercase'}}
                  className="input"
                />
                <br />
            </Form.Group>
                
          </Form.Row>
            
            <ButtonToolbar>
              <Button variant="dark" type="submit">Create Address</Button> &nbsp; &nbsp;
               <a href="/"><Button variant="dark">Go to Home Page</Button></a>
            </ButtonToolbar>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Form>
        )
    }
};

export default NewAddress;
