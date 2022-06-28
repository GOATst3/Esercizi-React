import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";


class App extends React.Component{
  state={
    lang:'en'
  }

  handleLanguageChange=(e)=>{
    this.setState({lang : e.target.value})
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render(){

    return (
      <div className="App">
          <select value={this.state.lang} onChange={this.handleLanguageChange}>
            <option value={'en'}>English</option>
            <option value={'it'}>Italiano</option>
          </select>
        <LanguageContext.Provider value={this.state.lang}>
          <DisplayLanguage/>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
