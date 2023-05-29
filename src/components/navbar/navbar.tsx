import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import { useState } from "react";

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className={styles.navbar}>
      {isLoggedIn && (
        <ul>
          <li>
            <Link to="/professionals">Professionals</Link>
          </li>
          <li>
            <Link to="/professionals/add">Add professional</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

//  import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.scss";

// function Navbar() {
//   const [isMobile, setIsMobile] = useState(false);
//   return (
//     <>
//       <nav className="navbar">
//         <ul
//           className={isMobile ? "nav-links-mobile" : "nav-links"}
//           onClick={() => setIsMobile(false)}
//         >
//           <Link to="/login" className="login" />
//           <li>Login</li>

//           <Link to="/professionals/add" className="add" />
//           <li>Add professional</li>

//           <Link to="/professionals" className="professionals" />
//           <li>All professionals</li>
//         </ul>
//       </nav>
//       <button
//         className="mobile-menu-icon"
//         onClick={() => setIsMobile(!isMobile)}
//       >
//         {isMobile ? (
//           <i className="fas fa-times"></i>
//         ) : (
//           <i className="fas fa-times"></i>
//         )}
//       </button>
//     </>
//   );
// }

// export default Navbar;
