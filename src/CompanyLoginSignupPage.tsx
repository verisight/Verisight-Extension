// // CompanyLoginSignupPage.tsx
// import companyLogo from './assets/company-logo.jpg'; // Import your company logo
// import './CompanyLoginSignupPage.css';

// function CompanyLoginSignupPage() {
//   return (
//     <div>
//       <img src={companyLogo} className="companyLogo" alt="Company Logo" />
//       <div className="loginSignupButtons">
//         <div className="combinedButton">
//           <button>Login</button>
//           <button>Signup</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CompanyLoginSignupPage;



// // CompanyLoginSignupPage.tsx
// import { useState } from 'react';
// import companyLogo from './assets/company-logo.jpg';
// import LoginPage from './LoginPage';
// import './CompanyLoginSignupPage.css';

// function CompanyLoginSignupPage() {
//   const [showLoginPage, setShowLoginPage] = useState(false);

//   const handleLoginClick = () => {
//     setShowLoginPage(true);
//   };

//   return (
//     <div>
//       {showLoginPage ? (
//         <LoginPage />
//       ) : (
//         <div>
//           <img src={companyLogo} className="companyLogo" alt="Company Logo" />
//           <div className="loginSignupButtons">
//             <div className="combinedButton">
//               <button onClick={handleLoginClick}>Login</button>
//               <button>Signup</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CompanyLoginSignupPage;



// // CompanyLoginSignupPage.tsx
// import { useState } from 'react';
// import companyLogo from './assets/company-logo.jpg';
// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage'; // Import SignupPage
// import './CompanyLoginSignupPage.css';

// function CompanyLoginSignupPage() {
//   const [showLoginPage, setShowLoginPage] = useState(false);
//   const [showSignupPage, setShowSignupPage] = useState(false);

//   const handleLoginClick = () => {
//     setShowLoginPage(true);
//     setShowSignupPage(false); // Ensure signup page is hidden when switching to login
//   };

//   const handleSignupClick = () => {
//     setShowLoginPage(false);
//     setShowSignupPage(true);
//   };

//   return (
//     <div>
//       {showLoginPage ? (
//         <LoginPage />
//       ) : (
//         <div>
//           <img src={companyLogo} className="companyLogo" alt="Company Logo" />
//           <div className="loginSignupButtons">
//             <div className="combinedButton">
//               <button onClick={handleLoginClick}>Login</button>
//               <button onClick={handleSignupClick}>Signup</button>
//             </div>
//           </div>
//           {/* Conditionally render the SignupPage based on the state */}
//           {showSignupPage && <SignupPage />}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CompanyLoginSignupPage;




// CompanyLoginSignupPage.tsx
import { useState } from 'react';
import companyLogo from './assets/company-logo.jpg';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage'; // Import SignupPage
import './CompanyLoginSignupPage.css';

function CompanyLoginSignupPage() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignupPage, setShowSignupPage] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPage(true);
    setShowSignupPage(false); // Ensure signup is hidden when showing login
  };

  const handleSignupClick = () => {
    setShowLoginPage(false); // Ensure login is hidden when showing signup
    setShowSignupPage(true);
  };

  return (
    <div>
      {showLoginPage ? (
        <LoginPage />
      ) : showSignupPage ? (
        <SignupPage />
      ) : (
        <div>
          <img src={companyLogo} className="companyLogo" alt="Company Logo" />
          <div className="loginSignupButtons">
            <div className="combinedButton">
              <button onClick={handleLoginClick}>Login</button>
              <button onClick={handleSignupClick}>Signup</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyLoginSignupPage;



