import React from 'react';
import './App.css';

class ContactCard extends React.Component{
  render(){
    var cardStyle = {
      width: "380px",
      height: "220px",
      padding: "0px",
      backgroundColor: "#eca67a",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      margin: "10% 0% 0% 10%"
    };
     return <div style={cardStyle} className="text">
              <div><span>Contact name:</span>  {this.props.name}</div>
              <div><span>Mobile number:</span> {this.props.mobile}</div>
              <div><span>Work phone:</span>    {this.props.phone}</div> 
              <div><span>Email:</span>         {this.props.email} </div>  
    </div>;
  }
}




function App() {
  return (
    <div>
        <ContactCard name="Jon Doe" 
                      mobile="333 333 3333"
                      phone="212 222 2222"
                      email="jonDoe@index.com">
        </ContactCard>
        <ContactCard name="Jojo" 
                      mobile="313 533 3383"
                      phone="212 242 2822"
                      email="jojo@index.com">
        </ContactCard>
        <ContactCard name="Gato" 
                      mobile="373 338 3363"
                      phone="212 722 4212"
                      email="gato@index.com">
        </ContactCard>
      </div>
    

  );
}

export default App;
