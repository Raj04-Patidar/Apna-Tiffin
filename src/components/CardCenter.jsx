import React from "react";
import { Link, useParams } from "react-router-dom";
import tiffinCenter from "../data/tiffinCenters.json";

const CardCenter = () => {
  const { id } = useParams();
  const meal = tiffinCenter.find((meal) => meal.id === parseInt(id));

  if (!meal) {
    return <div className="container py-4">Meal not found.</div>;
  }

  return (
    <div style={{
      backgroundColor: "#10375c"
    }}>
      <div className="container py-4" >
        <div>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={meal.image}
                className="img-fluid "
                alt={meal.alt}
                style={{
                  width: "100%",
                  height: "80vh",
                  padding: "10px 20px",
                  borderRadius: "50px"
                }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body" style={{ backgroundColor: "#d2d7db", color: "black", height: "75vh", margin: "20px", borderRadius: "20px", padding: '25px' }}>
                <h5 className="card-title">{meal.title}</h5>
                <p className="card-text">{meal.description}</p>
                <p className="card-text m-0">{meal.address}</p>
                <p className="card-text ">{meal.contact}</p>
                <p className="card-text">
                  <small className="text-bold">
                    Explore our services in detail!
                  </small>
                </p>
                <div className="card" style={{ width: "50%" }}>
                  <ul className="list-group list-group-flush">
                    {meal.features.map((feature, index) => (
                      <li className="list-group-item" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                    to='/menusection'
                    className="btn m-3"
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Back to serivces
                  </Link>
                  <Link
                    to="/BookTiffin"
                    className="btn"
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Book-Tiffin
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCenter;
