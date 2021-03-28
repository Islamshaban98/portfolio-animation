// import { Power3 } from "gsap/all";
// import { TweenMax } from "gsap/gsap-core";
// import React, { useEffect, useRef } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Coursor } from "../component/Cursor/Coursor";

// const NavPage = () => {
//   let intro = useRef();
//   useEffect(() => {
//     console.log(intro);
//     TweenMax.fromTo(
//       intro.current,
//       2,
//       {
//         opacity: 0.5,
//       },
//       { opacity: 1, y: -50, ease: Power3.easeOut, delay: 0, duration: 0.2 }
//     );
//   }, []);

//   return (
//     <div className="mobile-menu-div" ref={intro}>
//       <Coursor />
//       <ul>
//         <li>
//           <NavLink to="/">WORKS</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Manifest">MANIFEST</NavLink>
//         </li>
//         <li>
//           <NavLink to="Contact">CONTACT</NavLink>
//         </li>
//         <li>
//           <Link className="green-lang">English</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default NavPage;
