import React from "react";
import "./Home.css";
import usa from "../assets/usa.jpg";
import israel from "../assets/israel.jpg";
import russia from "../assets/russia.jpg";

import { ReactCountryFlag } from "@fadi-ui/react-country-flag";
function Home() {
  return (
    <>
      <section className="container-fluid" id="home">
        <h1 id="primaryText" className="text-center">
          Discover the World with Our Flights
        </h1>
        <p id="secondaryText" className="text-center text-light">
          Fly with comfort and convenience
        </p>
        <div className="buttonGroup text-center d-flex justify-content-center flex-wrap gap-2">
          <button
            className="btn btn-light mx-3"
            style={{ fontSize: "0.8rem", padding: "0.7rem 2rem" }}
          >
            Book Now
          </button>
          <button
            className="btn btn-dark"
            style={{ fontSize: "0.8rem", padding: "0.7rem 1.6rem" }}
          >
            Explore Now
          </button>
        </div>
      </section>
      {/* ----------------------------------------------------- */}
      <section className="container-fluid">
        <h1 className="text-center my-5">Explore the World!🌍</h1>
        <div className="cards d-sm-flex flex-sm-column flex-sm-wrap d-md-grid d-lg-grid d-xl-grid">
          <div className="card">
            <img src={usa} className="card-img-top" alt="usa" />
            <div className="card-body">
              <h5 className="card-title">
                United States{" "}
                <ReactCountryFlag countryCode="US" height={18} width={25} />{" "}
              </h5>
              <p className="card-text">
                Discover the land of endless opportunities and breathtaking
                adventures—visit the USA today!
              </p>
              <a href="#" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
          <div className="card">
            <img src={israel} className="card-img-top" alt="usa" />
            <div className="card-body">
              <h5 className="card-title">
                Israel&nbsp;
                <ReactCountryFlag countryCode="IL" height={18} width={25} />
              </h5>
              <p className="card-text">
                Experience a journey through history,innovation, and natural
                beauty—visit Israel today!
              </p>
              <a href="#" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
          <div className="card">
            <img src={russia} className="card-img-top" alt="usa" />
            <div className="card-body">
              <h5 className="card-title">
                Russia&nbsp;
                <ReactCountryFlag countryCode="RU" height={18} width={25} />
              </h5>
              <p className="card-text">
                Embark on an unforgettable adventure through timeless
                history—visit Russia now!
              </p>
              <a href="#" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      <br />
      <section className="third">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <p className="carousel-content" style={{textAlign:"center",fontSize:"2rem",textWrap:"wrap"}}>
            Your dream destination is just a
              click away! Book now for the best fares, seamless flights, and
              unforgettable journeys. Ready to fly? Let's make it happen!
            </p>
            <div className="carousel-item active" data-bs-interval="1000">
              <img
                src="https://s1.1zoom.me/big3/366/421441-svetik.jpg"
                className="d-block w-100"
                alt="newyork"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img
                src="https://th.bing.com/th/id/R.8f75b102ddfb07e4c7e2827b2c3e8a61?rik=R7vlHReqLF65zg&riu=http%3a%2f%2fwww.hdwallpapers.in%2fwalls%2fburj_khalifa_tower_dubai-wide.jpg&ehk=7%2fTg7asqtMUYjH3su7qOakr2LWACOsHzs8%2bP6%2frllHM%3d&risl=&pid=ImgRaw&r=0"
                className="d-block w-100"
                alt="dubai"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3500">
              <img
                src="https://cdn.goseetravel.com/public/Destinations/Australia/Sydney/Sydney-Sydney-Opera-House.jpg"
                className="d-block w-100"
                alt="australia"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
