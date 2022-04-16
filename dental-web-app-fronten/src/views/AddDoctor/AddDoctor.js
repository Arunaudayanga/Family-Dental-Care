import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import FooterS from "../../components/Footer/Footer";
//import Select from 'react-select';

import "./AddDoctor.css";


export default class AddDoctor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
    
    render(){

        
            return (
          
              <div className="expenseBody">
                <Navbar />
                <div>
                  <h1> Family Dental Care</h1>
                </div>
                <fieldset>
                  <div>
          
                    <div>
                      <h2 id ="AddDoctorheader"> ADD DOCTOR </h2>
          
          
                    </div>
                    <div >
                    <form>
                      <table>
                        <tr>
                          <td className="lable">
                            <label>Employ ID:</label>
                          </td>
                          <td>
                            <input type="text" name="name" />
                          </td>
                        </tr>
                        <tr>
                        <td className="lable">
                          <label> Doctor Name: </label>
                        </td>
                        <td>
                            <input type="text" name="Email" />
                            </td>
                         
                        </tr>
                        <tr>
                        <td className="lable">
                          <label> Gender :</label>
                          </td>
                          
                          <td>
                            <select id ="GenderSelect" value={this.state.value} onChange={this.handleChange} name="Gender" >
                            <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
        
                            </select>
                          </td>
                          </tr>
                          <tr>
                          <td className="lable">
                          <label> Email: </label>
                        </td>
                        <td>
                            <input type="text" name="Email" />
                            </td>
                        </tr>
                        <tr>
                          <td className="lable">
                          <label> Phone No: </label>
                        </td>
                        <td>
                            <input type="text" name="PhoneNo" />
                            </td>
                        </tr>
                        <tr>
                          <td className="lable">
                          <label> Password: </label>
                        </td>
                        <td>
                            <input type="text" name="Password" />
                            </td>
                        </tr>
                      </table>
                      <input type="submit" id ="AddDoctorSubmitBtn" value="Save Changes" />
                    </form>
                    </div>
          
          
                  </div>
                </fieldset>
                <footer>
                <FooterS/>
                </footer>
              </div>
             
            );
          
          
          
    }

    
   
  }


  