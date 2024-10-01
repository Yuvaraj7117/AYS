import './Header.css'
import menu from "../assets/ll.png";
import { IoIosContact } from "react-icons/io";
import { BiLogInCircle } from "react-icons/bi";


function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src="./logo2.png" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className='menu'>
              <img src={menu} alt="menu" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-3 ">
            
            
            
            
              {/* ----------------------------------------------- */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  BOOK
                </a>
                <ul className="dropdown-menu book" aria-labelledby="navbarDropdown">
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Flight Schedules</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Featured fares</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Special Offers</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Best Fare Finder</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Book a Hotel</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Tours and activities</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Book a holiday</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Meet & Greet</a></li>
                  <li><a className="dropdown-item text-dark" href="#">India Connect</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Airport Transfer</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Book A Partner</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Airlines Partners</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item  text-dark" href="#">Something else here</a></li>
                  </span>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MANAGE
                </a>
                <ul className="dropdown-menu book" aria-labelledby="navbarDropdown">
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Cancel your Booking</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Change your Booking</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Choose Your Seat</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Choose your flight</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Manage chauffeur-drive</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Book Accessible travel</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Guide to dangerous goods</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Rules and Notices</a></li>
                  <li><a className="dropdown-item text-dark" href="#">GST Invoice</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Medical Information Form(MEDIF)</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Dietary information</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Banned substances in India</a></li>
                  </span>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EXPERIENCE
                </a>
                <ul className="dropdown-menu book" aria-labelledby="navbarDropdown">
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Unaccompanied minors</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Pregnancy</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Baggage allowances</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Child and infant fare rules</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Car seats and bassinets</a></li>
                  <li><a className="dropdown-item text-dark" href="#">On board</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Travelling with children</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Travelling with infants</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Infant baggage allowance</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Child and infant meals</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Fun for kids</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Children’s entertainment</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item  text-dark" href="#">Activities for kids</a></li>
                  </span>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  WHERE WE FLY
                </a>
                <ul className="dropdown-menu book" aria-labelledby="navbarDropdown">
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Asia and Pacific</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Americas</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Africa</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Europe</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Middle East</a></li>
                  <li><a className="dropdown-item text-dark" href="#">San Francisco</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Toronto</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">London</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Dallas</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Paris</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Adelaide</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Edinburgh</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item  text-dark" href="#">Madagascar</a></li>
                  </span>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LOYALTY
                </a>
                <ul className="dropdown-menu book" aria-labelledby="navbarDropdown">
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Membership tiers</a></li>
                  <li><a className="dropdown-item text-dark" href="#">flydubai</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Cash+Miles</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Digital membership card</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">My family</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Spend Miles</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Claim Miles</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Buy Miles</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Earn Miles</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Skywards Skysurfers</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Skywards Exclusives</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Our Partners</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item  text-dark" href="#">Skywards Miles Mall</a></li>
                  <li><a className="dropdown-item  text-dark" href="#">Miles Calculator</a></li>
                  <li><a className="dropdown-item  text-dark" href="#">Skywards+</a></li>
                  </span>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  HELP
                </a>
                <ul className="dropdown-menu book" aria-labelledby="navbarDropdown">
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Changing or cancelling</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Visa and passport help</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Feedback and complaints</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Delayed or damage baggage support</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Lost property</a></li>
                  <li><a className="dropdown-item text-dark" href="#">
                  Recent travel updates</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Check your flight status</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Special assistance</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Accessible travel with India</a></li>
                  </span>
                  <span>
                  <li><a className="dropdown-item text-dark" href="#">Special assistance and requests</a></li>
                  </span>
                </ul>
              </li>
             
            </ul>
            <form className="d-flex m-3 p-3">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="auth">
              <a className="btn btn-outline-light"><BiLogInCircle />
              LOGIN</a>
              <a className="btn btn-outline-light mx-2"><IoIosContact /> SIGN UP</a>
            </div>
            
          </div>
        </div>
      </nav>

    </>
  )
}
export default Header;