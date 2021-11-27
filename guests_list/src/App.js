import React from "react";
import Guest from "./Components/Guest/Guest";
import guests from "./guests.json"

class App extends React.Component {

  state = {
    search: ""
  }

  searchHandler = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render = () => {

    const {searchHandler} = this
    const {search} = this.state

    return (
        <>
          <div style={{textAlign: "center"}}>
            <h1>List of guests</h1>
          </div>
          <div style={{height: "100px", textAlign: "center"}}>
            <input style={{textAlign: "center", height: "30px", width: "350px", marginTop: "40px"}}
                   onChange={searchHandler}
                   placeholder="Search..."
                   value={search}
            />
          </div>

          {
            guests.filter(elem => {

              if (search === "") {
                return elem
              } else if (
                  elem.name.toLowerCase().includes(search.toLowerCase()) ||
                  elem.company.toLowerCase().includes(search.toLowerCase()) ||
                  elem.phone.toLowerCase().includes(search.toLowerCase()) ||
                  elem.address.toLowerCase().includes(search.toLowerCase())
              ) {
                return elem
              }
            })
                .map((elem, index) => {
                  return <Guest
                      key={index}
                      name={elem.name}
                      company={elem.company}
                      phone={elem.phone}
                      address={elem.address}
                  />
                })
          }
        </>
    )
  }
}

export default App;
