
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import addEmp from './addEmp'; 
import Head from './Head';
import Foot from './Foot';
import './App.css';
import Split from 'react-split'



class App extends Component {
  // initially data is empty in state
  state = { data: [] };

  componentDidMount() {

    fetch('http://localhost:5000/')
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(data => this.setState({ data }));
  }

  // dispalying the table of JSON values
  renderTable = () =>
  { 
    return this.state.data.map(Employee =>{
      return (
      
        <table>
        <tr>
          <td>{Employee.Name}</td>
          <td>{Employee.Designation}</td>
          <td>{Employee.Salary}</td>
        </tr>
        </table>
        
      )
    })
  }

NewPage()
{

     ReactDOM.render(<addEmp /> ,document.getElementById('Table'));
}


  render() {
    return (
      //rendering the generated table
        <div>
          <Head />
          <Split sizes={[25, 75]}>
              <nav />
       <Router>
       <div className = "middle">
       <br></br>
       <h1>Employee details</h1>
       <br></br>
        <table id = "Table" border="1" align= "center"> 
        {this.state && this.state.data && this.renderTable()}
        </table>
<Link to= {'/addemp'}><button id = "b" onClick= {this.NewPage}>Add employee</button></Link>
<Switch>
  <Route exact path='/addemp' component={addEmp}/>
</Switch>
</div>
</Router>
</Split>
<Foot />
</div>
    );
  }
}
 
export default App;

