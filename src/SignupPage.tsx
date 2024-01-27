// SignupPage.tsx
import companyLogo from './assets/company-logo.jpg';
import './SignupPage.css';

function SignupPage() {
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
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm your password" />
        <div className="termsCheckbox">
          <input type="checkbox" id="termsCheckbox" />
          <label htmlFor="termsCheckbox">I agree to the terms and conditions</label>
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

export default SignupPage;



// // LoginSignupPage.tsx
// import companyLogo from './assets/company-logo.jpg'; // Import your company logo
// import './SignupPage.css';

// function SignupPage() {
//   return (
//     <div>
//       <img src={companyLogo} className="companyLogo" alt="Company Logo" />
//       {/* <div className="loginSignupButtons">
//         <div className="combinedButton">
//           <button>Login</button>
//           <button>Signup</button>
//         </div>
//       </div> */}
//       <div className="inputSection">
//         <label>Email Address</label>
//         <input type="email" placeholder="Enter your email" />
//         <label>Password</label>
//         <input type="password" placeholder="Enter your password" />
//         <div className="forgotPassword">Forgot Password?</div>
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

// export default SignupPage;
