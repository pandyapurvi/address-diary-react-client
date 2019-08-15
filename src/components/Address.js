import React, { Component } from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: [],
            search: ''
        }
        this.fetchAdress = this.fetchAdress.bind(this); 

        const allAddress = () => {
            axios.get('http://localhost:3000/addresses.json').then((results) => {
              console.log(results.data);
              this.setState({address : results.data});
            })
          };
          allAddress();  
    }
    fetchAdress (e) {
      let result = e;
      console.log("hi and result: " + result);
      axios.get('http://localhost:3000/addresses.json').then((results) => {
      //console.log(results.data);
      const address_data = results.data;
      const listAddress = [];

        for (let i = 0; i < address_data.length; i++) {
          const addressData = address_data[i];
          if( result !=="" && ((addressData.street.toLowerCase().indexOf( result.toLowerCase())=== -1)
          && (addressData.streetType.toLowerCase().indexOf( result.toLowerCase())=== -1)
          && (addressData.streetNumber.toLowerCase().indexOf( result.toLowerCase())=== -1)
          && (addressData.suburb.toLowerCase().indexOf( result.toLowerCase())=== -1)
          && (addressData.postcode.toString().indexOf( result)=== -1)
          && (addressData.state.toLowerCase().indexOf( result.toLowerCase())=== -1)
          && (addressData.unitNumber.toString().indexOf(result)=== -1)
          && (addressData.propertyType.toLowerCase().indexOf( result.toLowerCase())=== -1))
          ){
           console.log(addressData);
          }else{
            console.log(addressData);
            listAddress.push(addressData);
          }

        }
        this.setState({address: listAddress});
    })

    }
    render() {
        return (
            
            <div>
                <h1>Address Diary</h1>
                
                <SearchForm onChange={ this.fetchAdress }/>
                <ShowAddress address = { this.state.address }/>
                
                
            </div>
        )
    }
};

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      evnt: ''
      
    }
    this._handleChange = this._handleChange.bind(this);
  //  this._handleSubmit = this._handleSubmit.bind(this); 
  }
    _handleChange(event){
    console.log(event.target.value);
    this.setState({ evnt: event.target.value});
    this.props.onChange(this.state.evnt);
  };

  // _handleSubmit(event){
  //   event.preventDefault();
  //   console.log("hi");
  //   this.props.onChange(this.state.evnt);
  // }
  render() {
    return (
      <div>
        {/* <form onSubmit={this._handleSubmit}> */}
          
            <input type="text" value={this.state.evnt} onChange={this._handleChange}/>
            {/* <button type="submit" >Search</button> */}
        {/* </form> */}
      </div>
    )
  }
  
}

const ShowAddress = (props) => {

    if ( props.address.length === 0 ){
        return 'Your search is not matching. Please try again.'
      } else {
        return (
         
           
          <div> 
          {props.address.map((address) =>
            <div key= {address.id}>
            <Card bg="dark" text="white" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Text>
                 {address.propertyType} {address.unitNumber}<br/>
                 { address.streetType} {address.streetNumber} {address.street} <br/>
                {address.suburb} {address.postcode} {address.state}
                </Card.Text>
          </Card.Body>
          </Card>
            </div>
          )}
          </div> 
          
          
        )
      }
};

export default Address;