import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import FooterS from "../../components/Footer/Footer";
import "./DoctorSignin.css";

function SignIn() {
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
            <h2> Sign In</h2>


          </div>

        
          <div>
            <form>
              <table>
                <tr>
                  <td className="lable">
                    <label>Email:</label>
                  </td>
                  <td>
                    <input type="text" name="Email" />
                  </td>
                </tr>
                <tr>
                <td className="lable">
                  <label> Password: </label>
                </td>
                <td>
                    <input type="Password" name="Password" />
                    </td>
                    </tr>
              
               
              </table>
              <a href ="#" id ="ForgotPassword"> Forgot Password?</a>
              <br/>
              <input type="submit" value="Login" />
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
export default SignIn;
