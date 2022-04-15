import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import FooterS from "../../components/Footer/Footer";
import   "./EditProfile.css";
import logo from '../../../src/DPBK4896.png'; 

function EditProfile() {
  return (

    
    <div className="expenseBody">
      <head>
      
      </head>
      <Navbar />
      <div>
        <h1> Family Dental Care</h1>
      </div>
      <fieldset>
        <div>

          <div>
            <h2> Edit Profile</h2>


          </div>

          <div className="container">
          <div className="container-child" id="Pic">
          <img id="profilePic" src={logo} alt="MyBurger"/>
          </div>
          <div className="container-child">
            <form>
              <table>
                <tr>
                  <td className="lable">
                    <label>Name:</label>
                  </td>
                  <td>
                    <input type="text" name="name" />
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
                  <label> Phone No:</label>
                  </td>
                  <td>
                    <input type="text" name="PhoneNo" />
                  </td>
                </tr>
               
              </table>
              <input type="submit" value="Save Changes" />
            </form>
            </div>
          </div>

        </div>
      </fieldset>
      <footer>
      <FooterS/>
      </footer>
    </div>
   
  );


}
export default EditProfile;
