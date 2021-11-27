import React from "react";

class Guest extends React.Component {

  state = {
    arrived: false
  }

  arrivedHandler = () => {
    this.setState({
      arrived: true
    })
  }

  render = () => {

    const {name, company, phone, address} = this.props
    const {arrived} = this.state
    const {arrivedHandler} = this

    return (
        <>
          {!arrived &&
          <div style={{background: "whitesmoke", margin: "30px 300px 0px 300px", padding: "20px"}}>
            <p>Guest <strong>{name}</strong> is work in the company <strong>"{company}"</strong>.</p>
            <p>Contacts: </p>
            <p><strong>{phone}</strong></p>
            <p><strong>{address}</strong></p>
            <button style={{background: "lightgreen", width: "200px", height: "40px"}} onClick={arrivedHandler}><strong>arrived</strong></button>
          </div>
          }
        </>
    )
  }
}

export default Guest