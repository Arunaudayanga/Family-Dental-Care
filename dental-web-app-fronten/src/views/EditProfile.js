import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import FooterS from "../components/Footer/Footer";


function EditProfile() {
  return (
    <div className="expenseBody">
      <Navbar />
      <div>
        <h1> Family Dental Care</h1>
      </div>
      <fieldset>
        <div>

          <div>
            <h2> Edit Profile</h2>


          </div>
          <div>
            <form>
              <table>
                <tr>
                  <td>
                    <label>Name:</label>
                  </td>
                  <td>
                    <input type="text" name="name" />
                  </td>
                </tr>
                <tr>
                <td>
                  <label> Email: </label>
                </td>
                <td>
                    <input type="text" name="Email" />
                    </td>
                 
                </tr>
                <tr>
                <td>
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
      </fieldset>
      <FooterS/>
    </div>
  );


}
export default EditProfile;
