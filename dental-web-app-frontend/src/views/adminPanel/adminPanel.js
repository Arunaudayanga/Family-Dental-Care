import React from "react";
<<<<<<< Updated upstream



import "./AdminPanel.css";
import Card from "../../components/Card/Card";
import cardDetails from "../../components/Card/cardDetails";
//import { Link } from "react-router-dom";

=======
import "./AdminPanel.css";
import Card from "../../components/Card/Card";
import cardDetails from "../../components/Card/cardDetails";
>>>>>>> Stashed changes

function Admin() {
  return (
    <div className="admin-home">
      <div class="heading">Admin Panel</div>
      {cardDetails.map((cardDetails) => {
        return (
          <div>
            <Card
              key={cardDetails.id}
              name={cardDetails.name}
              img={cardDetails.img}
              navigate={cardDetails.navigate}
            />
          </div>
        );
      })}
    </div>
  );
}
export default Admin;