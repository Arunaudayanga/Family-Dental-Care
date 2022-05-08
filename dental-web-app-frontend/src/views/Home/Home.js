import React from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import cardDetails from "../../components/Card/cardDetails";

<<<<<<< Updated upstream
function Admin() {
=======
function Home() {
>>>>>>> Stashed changes
  return (
    <div className="admin-home">
      <div class="heading">Home</div>
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
<<<<<<< Updated upstream
export default Admin;
=======
export default Home;
>>>>>>> Stashed changes
