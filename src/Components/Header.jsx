import './Header.css'
function Header(){
    return (
        <>
         <div id="header" className="container-fluid w-100 h-100  text-light d-flex justify-content-between align-baseline position-sticky">
          <div className="navbar-brand">
            <img src="/logo2.png" alt="logo" style={{width:"100px",height:"100px"}}/>
          </div>
          <ul className="navbar d-flex flex-wrap  gap-4 user-select-all">
            <li className='nav-link'>Home</li>
            <li className='nav-link'>Booking</li>
            <li className='nav-link'>Flights</li>
            <li className='nav-link'>Help</li>
            <li style={{listStyleType:"none"}} className="d-none d-lg-block">
              <input type="search" style={{height:"2.5rem"}} className="rounded p-2 form-control d-none d-lg-block" placeholder="What are you looking for?"/>
            </li>
            <li style={{listStyleType:"none"}}>
              <button className="btn btn-primary submitButton d-none d-lg-block">Search</button>
            </li>
          </ul>
          
       </div>
        
        </>
    )
}
export default Header;