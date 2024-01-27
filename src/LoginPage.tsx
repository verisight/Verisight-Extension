// LoginSignupPage.tsx
import companyLogo from './assets/company-logo.jpg'; // Import your company logo
import './LoginPage.css';

function LoginPage() {
  return (
    <div>
      <img src={companyLogo} className="companyLogo" alt="Company Logo" />
      {/* <div className="loginSignupButtons">
        <div className="combinedButton">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div> */}
      <div className="inputSection">
        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <div className="forgotPassword">Forgot Password?</div>
        <div className="loginButton">
          <button>Login</button>
        </div>
      </div>
      <div className="orLine">
        <div className="line"></div>
        <div className="orText">or</div>
        <div className="line"></div>
      </div>
      <div className="socialButtons">
        <button>Continue with Google</button>
        <button>Continue with Facebook</button>
      </div>
    </div>
  );
}

export default LoginPage;
