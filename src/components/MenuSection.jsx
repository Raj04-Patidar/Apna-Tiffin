
import React from "react";
import meals from "../data/meals.json";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const MenuSection = () => {
  return (
      <div>
        <section id="menu" style={{ backgroundColor: "#f2f2f8", padding: "20px" }}>
          <div className="container">
            <h2
              className="text-center text-black mb-4"
              style={{ fontFamily: "cursive" }}
            >
              Our Services
            </h2>
            <div className="row">
              {meals.map((meal) => (
                <div
                  className="col-md-4"
                  key={meal.id}
                  style={{ margin: "0 0 20px 0" }}
                >
                  <div
                    className="card text-black"
                    style={{ backgroundColor: "#d2d7db" }}
                  >
                    <img src={meal.image} className="card" alt={meal.alt} style={{ height: "40vh", width: "100%" }} />
                    <div className="card-body">
                      <h5 className="card-title">{meal.title}</h5>
                      <h6 className="card-text">{meal.description}</h6>
                      <Link
                        to={`/details/${meal.id}`}
                        className="btn"
                        style={{ backgroundColor: "#10375c", color: "white" }}
                      >
                        Explore More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    

  );
};

export default MenuSection;
