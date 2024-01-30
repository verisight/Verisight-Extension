// // MainPage.tsx
// import { useState } from 'react';
// import companyLogo from './assets/company-logo.jpg';
// import './MainPage.css';

// function MainPage() {
//   const [urlInput, setUrlInput] = useState('');

//   const handleFetchLink = () => {
//     // Perform logic to fetch link based on the current site or URL
//     // For now, let's just log the URL to the console
//     console.log('Fetching link for:', urlInput);
//   };

//   return (
//     <div>
//       <img src={companyLogo} className="companyLogo" alt="Company Logo" />
//       <button onClick={handleFetchLink}>Fetch Link of Current site</button>
//       <div className="orLine">
//         <div className="line"></div>
//         <div className="orText">or</div>
//         <div className="line"></div>
//       </div>
//       <div className="urlInputContainer">
//         <input
//           type="text"
//           className="urlInputButton" // Apply a specific class for styling
//           placeholder="Enter your URL"
//           value={urlInput}
//           onChange={(e) => setUrlInput(e.target.value)}
//         />
//       </div>
//       <button onClick={handleFetchLink}>Submit</button>
//       {/* <div className="actionButtons">
//         <button className="circleButton">Summariser</button>
//         <button className="circleButton plusButton">+</button>
//         <button className="circleButton">Cross-checking</button>
//       </div> */}
//       {/* <div className="actionButtons">
//         <div className="buttonContainer">
//           <button className="summariserButton">Summariser</button>
//         </div>
//         <div className="buttonContainer">
//           <button className="circleButton plusButton">+</button>
//         </div>
//         <div className="buttonContainer">
//           <button className="crossCheckingButton">Cross-Checking</button>
//         </div>
//       </div> */}
//       {/* <div className="btn-group">
//         <button>Summariser</button>
//         <button className='plus'>+</button>
//         <button>Cross-Checking</button>
//       </div>  */}
//       {/* <div className="btn-group">
//         <button className="left-btn">Summariser</button>
//         <button className="middle-btn">+</button>
//         <button className="right-btn">Cross-Checking</button>
//       </div> */}
//       <div className="box">
//       <div className="menu">
//         <div className="overlap-group">
//           <div>
//             <button className="rectangle"></button>
//           </div>
//           <div>
//             <button className="ellipse"></button>
//           </div>
//           <img className="plus-math" alt="Plus math" src="./assets/Plus-Math.jpg" />
//           <div className="text-wrapper">Summariser</div>
//           <div className="div">Cross-checking</div>
//           <img className="brief" alt="Brief" src="./assets/Brief.jpg" />
//           <img className="detective" alt="Detective" src="Detective.jpg" />
//         </div>
//       </div>
//     </div>


//     </div>
//   );
// }

// export default MainPage;








// // MainPage.tsx
// import { useState } from 'react';
// import companyLogo from './assets/company-logo.jpg';
// import brief from './assets/Brief.jpg';
// import detective from './assets/Detective.jpg';
// import plus from './assets/Plus Math.jpg';

// import './MainPage.css';

// function MainPage() {
//   const [urlInput, setUrlInput] = useState('');

//   const handleFetchLink = () => {
//     // Perform logic to fetch link based on the current site or URL
//     // For now, let's just log the URL to the console
//     console.log('Fetching link for:', urlInput);
//   };

//   return (
//     <div>
//       <img src={companyLogo} className="companyLogo" alt="Company Logo" />
//       {/* <button onClick={handleFetchLink} className='fetchButton'>Fetch Link of Current site</button> */}
//       <div className="Button">
//           <button onClick={handleFetchLink}>Fetch Link of Current site</button>
//         </div>
//       <div className="orLine">
//         <div className="line"></div>
//         <div className="orText">or</div>
//         <div className="line"></div>
//       </div>
//       <div className="urlInputContainer">
//         <input
//           type="text"
//           className="urlInputButton" // Apply a specific class for styling
//           placeholder="Enter your URL"
//           value={urlInput}
//           onChange={(e) => setUrlInput(e.target.value)}
//         />
//       </div>
//       <button onClick={handleFetchLink}>Submit</button>

//       <div className="box">
//         <div className="menu">
//           <div className="overlap-group">
//             <button className="rectangle summariser"></button>
//             <button className="rectangle cross-checking"></button>
//             <button className="ellipse"></button>
//             {/* <img className="plus-math" alt="Plus math" src="./assets/Plus-Math.jpg" /> */}
//             <img src={plus} className="plus-math" alt="Plus math" />
//             <div className="text-wrapper">Summariser</div>
//             <div className="div">Cross-checking</div>
//             {/* <img className="brief" alt="Brief" src=""/> */}
//             <img src={brief} className="brief" alt="Brief" />
//             {/* <img className="detective" alt="Detective" src="Detective.jpg" /> */}
//             <img src={detective} className="detective" alt="Detective" />

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainPage;





















import { useState } from 'react';
import companyLogo from './assets/company-logo.jpg';
import brief from './assets/Brief.jpg';
import detective from './assets/Detective.jpg';
import plus from './assets/Plus Math.jpg';

import './MainPage.css';

// Import the Summariser component
import Summariser from './Summariser';

function MainPage() {
  const [urlInput, setUrlInput] = useState('');
  const [showSummariser, setShowSummariser] = useState(false); // State to control the visibility of Summariser

  const handleFetchLink = () => {
    // Perform logic to fetch link based on the current site or URL
    // For now, let's just log the URL to the console
    console.log('Fetching link for:', urlInput);
  };

  const handleSummariserClick = () => {
    setShowSummariser(true); // Show Summariser component when the button is clicked
  };

  // Render the Summariser component if showSummariser is true
  if (showSummariser) {
    return <Summariser />;
  }

  return (
    <div>
      <img src={companyLogo} className="companyLogo" alt="Company Logo" />
      <div className="Button">
        <button onClick={handleFetchLink}>Fetch Link of Current site</button>
      </div>
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

      <div className="box">
        <div className="menu">
          <div className="overlap-group">
            <button className="rectangle summariser" onClick={handleSummariserClick}></button>
            <button className="rectangle cross-checking"></button>
            <button className="ellipse"></button>
            <img src={plus} className="plus-math" alt="Plus math" />
            <div className="text-wrapper">Summariser</div>
            <div className="div">Cross-checking</div>
            <img src={brief} className="brief" alt="Brief" />
            <img src={detective} className="detective" alt="Detective" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
