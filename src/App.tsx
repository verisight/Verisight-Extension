// // App.tsx
// import { useState } from 'react';
// import blueTickLogo from './assets/blue-tick.jpg';
// import LoginSignupPage from './LoginSignupPage'; // Import the new component
// import './App.css';

// function GetStartedPage({ onGetStartedClick }: { onGetStartedClick: () => void }) {
//   return (
//     <div>
//       <img src={blueTickLogo} className="bigLogo" alt="Blue Tick logo" />
//       <h2>Don’t trust whatever you see</h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sem vel felis egestas
//         lobortis.
//       </p>
//       <button onClick={onGetStartedClick}>Get Started</button>
//     </div>
//   );
// }

// function App() {
//   const [showGetStarted, setShowGetStarted] = useState(true);

//   const handleGetStartedClick = () => {
//     setShowGetStarted(false);
//   };

//   return (
//     <>
//       {showGetStarted ? (
//         <GetStartedPage onGetStartedClick={handleGetStartedClick} />
//       ) : (
//         <LoginSignupPage />
//       )}
//     </>
//   );
// }

// export default App;


// App.tsx
import { useState } from 'react';
import blueTickLogo from './assets/blue-tick.jpg'; // Import your blue tick logo
import CompanyLoginSignupPage from './CompanyLoginSignupPage'; // Import the new component
import './App.css';

function GetStartedPage({ onGetStartedClick }: { onGetStartedClick: () => void }) {
  return (
    <div>
      <img src={blueTickLogo} className="bigLogo" alt="Blue Tick logo" />
      <h2>Don't trust whatever you see</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sem vel felis egestas
        lobortis.
      </p>
      <button onClick={onGetStartedClick}>Get Started</button>
    </div>
  );
}

function App() {
  const [showGetStarted, setShowGetStarted] = useState(true);

  const handleGetStartedClick = () => {
    setShowGetStarted(false);
  };

  return (
    <>
      {showGetStarted ? (
        <GetStartedPage onGetStartedClick={handleGetStartedClick} />
      ) : (
        <CompanyLoginSignupPage />
      )}
    </>
  );
}

export default App;
