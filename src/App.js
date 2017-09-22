import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//start from here. Define statement
class App extends Component {
  constructor()
  {
    super();
    this.state={
      data:[],
    }

  }
// https://facebook.github.io/react-native/movies.json
  //easy :D    function.... then promise function. Once the data arrives from, url, then response function executes
  componentDidMount()
  {
    fetch('https://ubiqpool.io/api/accounts/0xc6e9103d2faa3422dbc3016d9b85cf9617dfc4af').
    then((Response)=>Response.json()).
    then((findresponse)=>
    {
      //findresponse.payments add extra here
      console.log(findresponse)
      this.setState({
        //data: findresponse.payments   works
        data:findresponse.payments,
      })
    })
  }

  //can put whatever arguments into map that you want.. change dynamicData, key etc
  render() {
    return (
      <div>
        {
          this.state.data.map((dynamicData,key) =>
          <div>
            <span>  {dynamicData.amount} </span>
            <span> {dynamicData.timestamp} </span>
            <span> {dynamicData.tx} </span>
            
            </div>
          )
        }
      </div>
    )
  }
} 

export default App;
 
