// MainPage.tsx
import { useState } from 'react';
import companyLogo from './assets/company-logo.jpg';
import './MainPage.css';

function MainPage() {
  const [urlInput, setUrlInput] = useState('');

  const handleFetchLink = () => {
    // Perform logic to fetch link based on the current site or URL
    // For now, let's just log the URL to the console
    console.log('Fetching link for:', urlInput);
  };

  return (
    <div>
      <img src={companyLogo} className="companyLogo" alt="Company Logo" />
      <button onClick={handleFetchLink}>Fetch Link of Current site</button>
      <div className="orLine">
        <div className="line"></div>
        <div className="orText">or</div>
        <div className="line"></div>
      </div>
      <div className="urlInputContainer">
        <input
          type="text"
          className="urlInputButton" // Apply a specific class for styling
          placeholder="Enter your URL"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
      </div>
      <button onClick={handleFetchLink}>Submit</button>
      {/* <div className="actionButtons">
        <button className="circleButton">Summariser</button>
        <button className="circleButton plusButton">+</button>
        <button className="circleButton">Cross-checking</button>
      </div> */}
      <div className="actionButtons">
        <div className="buttonContainer">
          <button className="summariserButton">Summariser</button>
        </div>
        <div className="buttonContainer">
          <button className="circleButton plusButton">+</button>
        </div>
        <div className="buttonContainer">
          <button className="crossCheckingButton">Cross-Checking</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
