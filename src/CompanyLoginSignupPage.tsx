// CompanyLoginSignupPage.tsx
import { useState } from 'react';
// import companyLogo from './assets/company-logo.jpg';
import verisightLogo from './assets/WhiteLogo.png';
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
    <div className='page'>
      {showLoginPage ? (
        <LoginPage />
      ) : showSignupPage ? (
        <SignupPage />
      ) : (
        <div>
          <img src={verisightLogo} className="companyLogo" alt="Company Logo"/>
          <div className="loginSignupButtons">
            <div className="combinedButton">
              <button onClick={handleLoginClick}>helllo</button>
              <button onClick={handleSignupClick}>Signup</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyLoginSignupPage;



