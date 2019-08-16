import React from 'react';

const ShowAddress = (props) => {
  const { address } = props;

  if (address.length === 0) {
    return (
      <div>Your search is not matching. Please try again.</div>
    )
  } 
  return (
    <div > 
      {address.map((address) =>
        <div key= {address.id} className="address" >
            {address.propertyType} {" "}
            {address.unitNumber} <br/>
            { address.streetType} {" "}
            {address.streetNumber} {" "}
            <span style={{textTransform: 'capitalize'}}>{address.street}</span>{", "}  <br/>
            <span style={{textTransform: 'capitalize'}}>{address.suburb}</span>{", "}  
            <span style={{textTransform: 'uppercase'}}>{address.state}</span> {address.postcode}
        </div>
      )}
    </div> 
  )
};

  export default ShowAddress;
  
