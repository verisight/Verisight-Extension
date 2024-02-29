// // LoginSignupPage.tsx
// import companyLogo from './assets/company-logo.jpg'; // Import your company logo
// import './LoginPage.css';

// function LoginPage() {
//   return (
//     <div>
//       <img src={companyLogo} className="companyLogo" alt="Company Logo" />
//       <div className="inputSection">
//         <label>Email Address</label>
//         <input type="email" placeholder="Enter your email" />
//         <label>Password</label>
//         <input type="password" placeholder="Enter your password" />
//         <div className="forgotPassword">Forgot Password?</div>
//         <div className="loginButton">
//           <button>Login</button>
//         </div>
//       </div>
//       <div className="orLine">
//         <div className="line"></div>
//         <div className="orText">or</div>
//         <div className="line"></div>
//       </div>
//       <div className="socialButtons">
//         <button>Continue with Google</button>
//         <button>Continue with Facebook</button>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;


// LoginPage.tsx
import { useState } from 'react';
import WhiteLogo from './assets/WhiteLogo.png';
import './LoginPage.css';
import MainPage from './MainPage' // Import your MainPage component
import { Button } from "@/components/ui/button"


function LoginPage() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic if needed
    // For now, let's simulate a successful login
    // and update the state to indicate that the user is logged in
    setLoggedIn(true);
  };

  // Redirect to the main page if the user is logged in
  if (isLoggedIn) {
    return <MainPage />;
  }

  return (
    <div className='container'>
      <img src={WhiteLogo} className="companyLogo" alt="Company Logo" />
      <div className="inputSection">
        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <div className="forgotPassword">Forgot Password?</div>
        <div className="loginButton">
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
      <div className="orLine">
        <div className="line"></div>
        <div className="orText">or</div>
        <div className="line"></div>
      </div>
      <div className="socialButtons">
        <Button>Continue with Google</Button>
        <Button>Continue with Facebook</Button>
      </div>
    </div>
  );
}

export default LoginPage;
