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
          <li className="list-item">About AR Lines</li>
          <li className="list-item">Corporate Information</li>
          <li className="list-item">Press</li>
          <li className="list-item">Tenders</li>
          <li className="list-item">Careers</li>
        </ul>

        <ul>
          <li>
            <span>BOOK & MANAGE</span>
          </li>
          <br />
          <li  className="list-item">Search Flights</li>
          <li  className="list-item">Manage Booking</li>
          <li  className="list-item">Flight Schedule</li>
          <li  className="list-item">Cargo</li>
        </ul>

        <ul>
          <li>
            <span>WHERE WE FLY</span>
          </li>
          <br />
          <li  className="list-item">Route Map</li>
          <li  className="list-item">Nonstop Flights</li>
          <li  className="list-item">Popular Flights</li>
          <li  className="list-item">Partner Airlines</li>
        </ul>

        <ul>
          <li>
            <span>PREPARE TO TRAVEL</span>
          </li>
          <br />
          <li  className="list-item">Baggage Guidelines</li>
          <li  className="list-item">Airport Information</li>
          <li  className="list-item">First-time Travellers,Children and Pets</li>
          <li  className="list-item">Visas,Documents and Travel Tips</li>
          <li  className="list-item">Health and Medical Assistance</li>
        </ul>
      </div>
      <hr />
      <div className="second">
        <ul>
          <li>
            <span>AR LINES EXPERIENCE</span>
          </li>
          <br />
          <li  className="list-item">At The Airport</li>
          <li  className="list-item">In The Air</li>
          <li  className="list-item">Transforming Experiences</li>
          <li  className="list-item">Our Fleet</li>
        </ul>
        <ul>
          <li>
            <span>LOYALTY</span>
          </li>
          <br />
          <li  className="list-item">About Flying Returns</li>
          <li  className="list-item">Points Calculator</li>
          <li  className="list-item">Earn Points</li>
          <li  className="list-item">Spend Points</li>
          <li  className="list-item">Flying Return FAQ</li>
        </ul>
        <ul>
          <li>
            <span>SUPPORT</span>
          </li>
          <br />
          <li  className="list-item">Contact</li>
          <li  className="list-item">Frequently Asked Questions</li>
          <li  className="list-item">Grievance Resolution</li>
        </ul>
        <ul>
          <li>
            <span>AR LINES APP</span>
          </li>
          <br />
          <li  className="list-item">Download The App To Book And Manage Your Flights On The Go.<a href="#">Learn More</a></li>
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
          <li  className="list-item">Sitemap</li>
          <li  className="list-item">Terms & Conditions</li>
          <li  className="list-item">Privacy Policy</li>
          <li  className="list-item">Accessiblity Plan and Feedback Process</li>
        </ul>
        <ul>
          <li className="list-item">Cookie Policy</li>
          <li className="list-item">Cookie Settings</li>
          <li className="list-item">Conditions of Carriage</li>
          <li className="list-item">Domestic Fares</li>
        </ul>
        <ul>
          <li className="list-item">Travel Agents</li>
          <li className="list-item">GST</li>
          <li className="list-item">Passenger Rights</li>
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
      <p className="list-item">Copyright &copy; 2024 AR Airlines Ltd. All rights reserved.</p>
      <p className="list-item">
        Use this website indicates your compliance with our Privacy
        poilcy.Conditions of Carriage,Terms ans Conditions.
      </p>
    </div>
  );
}

export default Footer;
