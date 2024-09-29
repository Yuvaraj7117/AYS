import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="first">
        <ul>
          <li>
            <span>ABOUT US</span>
          </li>
          <br />
          <li>About AR Lines</li>
          <li>Corporate Information</li>
          <li>Press</li>
          <li>Tenders</li>
          <li>Careers</li>
        </ul>

        <ul>
          <li>
            <span>BOOK & MANAGE</span>
          </li>
          <br />
          <li>Search Flights</li>
          <li>Manage Booking</li>
          <li>Flight Schedule</li>
          <li>Cargo</li>
        </ul>

        <ul>
          <li>
            <span>WHERE WE FLY</span>
          </li>
          <br />
          <li>Route Map</li>
          <li>Nonstop Flights</li>
          <li>Popular Flights</li>
          <li>Partner Airlines</li>
        </ul>

        <ul>
          <li>
            <span>PREPARE TO TRAVEL</span>
          </li>
          <br />
          <li>Baggage Guidelines</li>
          <li>Airport Information</li>
          <li>First-time Travellers,Children and Pets</li>
          <li>Visas,Documents and Travel Tips</li>
          <li>Health and Medical Assistance</li>
        </ul>
      </div>
      <hr />
      <div className="second">
        <ul>
          <li>
            <span>AR LINES EXPERIENCE</span>
          </li>
          <br />
          <li>At The Airport</li>
          <li>In The Air</li>
          <li>Transforming Experiences</li>
          <li>Our Fleet</li>
        </ul>
        <ul>
          <li>
            <span>LOYALTY</span>
          </li>
          <br />
          <li>About Flying Returns</li>
          <li>Points Calculator</li>
          <li>Earn Points</li>
          <li>Spend Points</li>
          <li>Flying Return FAQ</li>
        </ul>
        <ul>
          <li>
            <span>SUPPORT</span>
          </li>
          <br />
          <li>Contact</li>
          <li>Frequently Asked Questions</li>
          <li>Grievance Resolution</li>
        </ul>
        <ul>
          <li>
            <span>AR LINES APP</span>
          </li>
          <br />
          <li>Download The App To Book And Manage Your Flights On The Go.<a href="#">Learn More</a></li>
           <br />
          <li>
            <img
              src="https://www.airindia.com/content/dam/air-india/home-page/footer/Appstore.svg"
              alt="appstore"
            />
            &nbsp;&nbsp;
            <img
              src="https://www.airindia.com/content/dam/air-india/home-page/footer/google-play.svg"
              alt="playstore"
            />
          </li>
        </ul>
      </div>
      <hr />
      <div className="third1">
        <ul>
          <li>Sitemap</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Accessiblity Plan and Feedback Process</li>
        </ul>
        <ul>
          <li>Cookie Policy</li>
          <li>Cookie Settings</li>
          <li>Conditions of Carriage</li>
          <li>Domestic Fares</li>
        </ul>
        <ul>
          <li>Travel Agents</li>
          <li>GST</li>
          <li>Passenger Rights</li>
        </ul>
        <ul>
        <strong>FOLLOW US ON</strong>
        <span className="ii">
          <li>
            <FaLinkedinIn />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaXTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebookF />
          </li>
          </span>
        </ul>
      </div>
      <hr />
      <div className="fourth">
        <img src="./logo2.png" alt="logo" />
        <p>AR Airlines
          <br />
          <p style={{fontSize:"10px"}}>Fly with ours</p>
        </p>
      </div>
      <hr />
      <p>Copyright &copy; 2024 AR Airlines Ltd. All rights reserved.</p>
      <p>
        Use this website indicates your compliance with our Privacy
        poilcy.Conditions of Carriage,Terms ans Conditions.
      </p>
    </div>
  );
}

export default Footer;
