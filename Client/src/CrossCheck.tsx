// import { useState } from 'react';
// import brief from './assets/Brief.jpg';
// import detective from './assets/Detective.jpg';
// import plus from './assets/Plus Math.jpg';


// import Summariser from './Summariser';

// function CrossCheck() {
//   const [showSummariser, setShowSummariser] = useState(false);
//   const [showCrossCheck, setShowCrossCheck] = useState(false);

//   const handleSummariserClick = () => {
//     setShowSummariser(true);
//   };

//   if (showSummariser) {
//     return <Summariser />;
//   }

//   const handleCrossCheckClick = () => {
//     setShowCrossCheck(true);
//   };

//   if (showCrossCheck) {
//     return <CrossCheck />;
//   }

//   return (
//     <div>
//       <h1>Cross Check Page</h1>
//       <div className="box">
//         <div className="menu">
//           <div className="overlap-group">
//             <button className="rectangle summariser" onClick={handleSummariserClick}></button>
//             <button className="rectangle cross-checking" onClick={handleCrossCheckClick}></button>
//             <button className="ellipse"></button>
//             <img src={plus} className="plus-math" alt="Plus math" />
//             <div className="text-wrapper">Summariser</div>
//             <div className="text-wrapper2">Cross-checking</div>
//             <img src={brief} className="brief" alt="Brief" />
//             <img src={detective} className="detective" alt="Detective" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CrossCheck;




import { useState } from 'react';
import brief from './assets/Brief.jpg';
import detective from './assets/Detective.jpg';
import plus from './assets/Plus Math.jpg';
import './MainPage.css';
import WhiteLogo from './assets/WhiteLogo.png';

import Summariser from './Summariser';
import './CrossCheck.css';

import MainPage from './MainPage' // Import your MainPage component


function CrossCheck() {
  const [showSummariser, setShowSummariser] = useState(false);
  const [showCrossCheck, setShowCrossCheck] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);

  const handleSummariserClick = () => {
    setShowSummariser(true);
  };

  if (showSummariser) {
    return <Summariser />;
  }

  const handleCrossCheckClick = () => {
    setShowCrossCheck(true);
  };

  if (showCrossCheck) {
    return <CrossCheck />;
  }

  const handleMainPage = () => {
    // Perform login logic if needed
    // For now, let's simulate a successful login
    // and update the state to indicate that the user is logged in
    setShowMainPage(true);
  };

  // Redirect to the main page if the user is logged in
  if (showMainPage) {
    return <MainPage />;
  }

  return (
    <div>
      <img src={WhiteLogo} className="companyLogo" alt="Company Logo" />

      <div className="article-heading">
        {/* Add your article heading here */}
        <h2>Article Heading</h2>
      </div>
      <div className="text-boxes">
        {/* Add your textboxes here */}
        <textarea className="textbox" placeholder="Cross Reference Report"></textarea>
        <textarea className="textbox" placeholder="Report References"></textarea>
      </div>
      <div className="cross-check-button">
        {/* Add your cross-check button here */}
        <button className='check' onClick={handleCrossCheckClick}>Cross Check</button>
      </div>
      <div className="box">
        <div className="menu">
          <div className="overlap-group">
            <button className="rectangle summariser" onClick={handleSummariserClick}></button>
            <button className="rectangle cross-checking" onClick={handleCrossCheckClick}></button>
            <button className="ellipse" onClick={handleMainPage}></button>
            <img src={plus} className="plus-math" alt="Plus math" />
            <div className="text-wrapper">Summariser</div>
            <div className="text-wrapper2">Cross-checking</div>
            <img src={brief} className="brief" alt="Brief" />
            <img src={detective} className="detective" alt="Detective" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrossCheck;

