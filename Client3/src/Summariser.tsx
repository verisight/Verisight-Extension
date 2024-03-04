// import { useState } from 'react';
// import brief from './assets/Brief.jpg';
// import detective from './assets/Detective.jpg';
// import plus from './assets/Plus Math.jpg';

// import './MainPage.css';
// import './Summariser.css';
// import CrossCheck from './CrossCheck';




// function Summariser() {

//     const [showSummariser, setShowSummariser] = useState(false); // State to control the visibility of Summariser
//     const [showCrossCheck, setShowCrossCheck] = useState(false); // State to control the visibility of CrossCheck


//     const handleSummariserClick = () => {
//         setShowSummariser(true); // Show Summariser component when the button is clicked
//     };

//     // Render the Summariser component if showSummariser is true
//     if (showSummariser) {
//       return <Summariser />;
//     }

//     const handleCrossCheckClick = () => {
//       setShowCrossCheck(true); // Show CrossCheck component when the button is clicked
//     };


//     // Render the CrossCheck component if showCrossCheck is true
//     if (showCrossCheck) {
//       return <CrossCheck />;
//     }


//     return (
//         <div className="extension-summariser">
//           <div className="div">
//             <div className="overlap">
//               <div className="text-wrapper">Article Headline</div>
//             </div>
//             <div className="text-wrapper-2">LOGO</div>
//             <div className="overlap-group">
//               <p className="lorem-ipsum-dolor">
//                 Lorem ipsum dolor sit amet consectetur. Semper enim a ipsum elit eu at. Eu urna laoreet faucibus nunc cras
//                 sagittis eu. Urna sed aliquam purus lacus eget facilisi feugiat commodo dolor. Quam aliquam tempor aliquam
//                 sollicitudin lectus. Semper tortor non mauris vulputate.
//                 <br />
//                 Proin pellentesque vel dignissim urna et commodo consectetur feugiat. Dapibus porttitor turpis tristique
//                 cras neque cras fusce eu. Amet tortor ut fusce sodales vitae praesent molestie amet tincidunt. Sodales
//                 faucibus morbi sodales vulputate viverra nulla in volutpat. Dis mi ac aenean purus dolor. Vel risus turpis
//                 sit gravida in.
//               </p>
//               <img className="vector" alt="Vector" src="vector.svg" />
//             </div>
//             <div className="div-wrapper">
//               <div className="text-wrapper-3">Get Summary</div>
//             </div>
//             {/* <div className="menu">
//               <div className="overlap-group-2">
//                 <div className="rectangle" />
//                 <div className="ellipse" />
//                 <img className="plus-math" alt="Plus math" src="plus-math.png" />
//                 <div className="text-wrapper-4">Summariser</div>
//                 <div className="text-wrapper-5">Cross-checking</div>
//                 <img className="brief" alt="Brief" src="brief.png" />
//                 <img className="detective" alt="Detective" src="detective.png" />
//               </div>
//             </div> */}
//             <div className="box">
//                 <div className="menu">
//                     <div className="overlap-group">
//                         <button className="rectangle summariser" onClick={handleSummariserClick}></button>
//                         <button className="rectangle cross-checking" onClick={handleCrossCheckClick}></button>
//                         <button className="ellipse"></button>
//                         <img src={plus} className="plus-math" alt="Plus math" />
//                         <div className="text-wrapper">Summariser</div>
//                         <div className="div">Cross-checking</div>
//                         <img src={brief} className="brief" alt="Brief" />
//                         <img src={detective} className="detective" alt="Detective" />
//                     </div>
//                 </div>
//             </div>
//           </div>
//         </div>
//     );
// }

// export default Summariser;






// import { useState } from 'react';
// import brief from './assets/Brief.jpg';
// import detective from './assets/Detective.jpg';
// import plus from './assets/Plus Math.jpg';
// import copyIcon from './assets/copy-icon.jpg'; // Add the path to your copy icon

// import CrossCheck from './CrossCheck';
// import './Summariser.css';

// import MainPage from './MainPage' // Import your MainPage component


// function Summariser() {
//   const [showSummariser, setShowSummariser] = useState(false);
//   const [showCrossCheck, setShowCrossCheck] = useState(false);
//   const [showMainPage, setShowMainPage] = useState(false);


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


//   const handleMainPage = () => {
//     // Perform login logic if needed
//     // For now, let's simulate a successful login
//     // and update the state to indicate that the user is logged in
//     setShowMainPage(true);
//   };

//   // Redirect to the main page if the user is logged in
//   if (showMainPage) {
//     return <MainPage />;
//   }



//   // State for the article content
//   const [articleContent, setArticleContent] = useState('');

//   // State to store whether the content is copied
//   const [isCopied, setIsCopied] = useState(false);

//   // Function to handle copying the article content
//   const handleCopyContent = () => {
//     navigator.clipboard.writeText(articleContent);
//     setIsCopied(true);
//   };

//   // Function to handle getting the summary
//   const handleGetSummary = () => {
//     // Implement logic to get the summary based on the articleContent
//     // For now, let's just log the content to the console
//     console.log('Article Content:', articleContent);
//   };

//   return (
//     <div className="extension-summariser">
//       <div className="article-heading">
//         <h2>Article Heading</h2>
//       </div>
// <div className="article-content-container">
//   <textarea
//     className="article-content"
//     placeholder="Paste your article content here..."
//     value={articleContent}
//     onChange={(e) => setArticleContent(e.target.value)}
//   />
//   <div className="copy-icon" onClick={handleCopyContent}>
//     <img src={copyIcon} alt="Copy Icon" />
//   </div>
// </div>
// {isCopied && <div className="copy-success">Content copied!</div>}
// <button className="get-summary-button" onClick={handleGetSummary}>
//   Get Summary
// </button>

//       <div className="box">
//         <div className="menu">
//           <div className="overlap-group">
//             <button className="rectangle summariser" onClick={handleSummariserClick}></button>
//             <button className="rectangle cross-checking" onClick={handleCrossCheckClick}></button>
//             <button className="ellipse" onClick={handleMainPage}></button>
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









// // export default Summariser;
// import { useState } from 'react';
// import brief from './assets/Brief.jpg';
// import detective from './assets/Detective.jpg';
// import plus from './assets/Plus Math.jpg';
// import copyIcon from './assets/copy-icon.jpg'; // Import the copy icon

// import CrossCheck from './CrossCheck';
// import './Summariser.css';

// import MainPage from './MainPage'; // Import your MainPage component

// function Summariser() {
//   const [showSummariser, setShowSummariser] = useState(false);
//   const [showCrossCheck, setShowCrossCheck] = useState(false);
//   const [showMainPage, setShowMainPage] = useState(false);
//   const [articleContent, setArticleContent] = useState(''); // State to hold the article content

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

//   const handleMainPage = () => {
//     setShowMainPage(true);
//   };

//   if (showMainPage) {
//     return <MainPage />;
//   }

//   const handleCopyArticle = () => {
//     // Copy the content of the textarea to the clipboard
//     navigator.clipboard.writeText(articleContent);
//   };

//   return (
//     <div className="extension-summariser">
//       <div className="box">
//         <div className="menu">
//           {/* Article Heading */}
//           <h2>Article</h2>
// {/* Textarea for Article */}
// <div className="article-content-container">
//   <textarea
//     className="article-content"
//     placeholder="Paste your article content here..."
//     value={articleContent}
//     onChange={(e) => setArticleContent(e.target.value)}
//   />
//   <div className="copy-icon" onClick={handleCopyArticle}>
//     <img src={copyIcon} alt="Copy Icon" />
//   </div>
// </div>


//           <div className="overlap-group">
//             <button className="rectangle summariser" onClick={handleSummariserClick}></button>
//             <button className="rectangle cross-checking" onClick={handleCrossCheckClick}></button>
//             <button className="ellipse" onClick={handleMainPage}></button>
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

// export default Summariser;











import { useState, useEffect } from 'react';
import brief from './assets/Brief.jpg';
import detective from './assets/Detective.jpg';
import plus from './assets/Plus Math.jpg';
import WhiteLogo from './assets/WhiteLogo.png';
import './MainPage.css'
import copyIcon from './assets/copy-icon.jpg'; // Import the copy icon
// import {OpenAIClient, AzureKeyCredential} from '@azure/openai';

import CrossCheck from './CrossCheck';
import './Summariser.css';
import globalVariable from './LinkGlobalVar';


import MainPage from './MainPage'; // Import your MainPage component

function Summariser() {
  const [showSummariser, setShowSummariser] = useState(false);
  const [showCrossCheck, setShowCrossCheck] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);
  const [articleContent, setArticleContent] = useState(''); // State to hold the article content
  // const [summary, setSummary] = useState(''); // State to hold the summary
  const [loading, setLoading] = useState(true);


  const link = globalVariable.value;

  useEffect(() => {
    if (link !== "") {
        //POST request to the server to send the article link and get the article content
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "link": link })
        };
        fetch('http://localhost:3000/summary', requestOptions)
        //the response is a string so dont convert to json
            .then(response => response.text())
            .then(data => {
                console.log(data);
                setArticleContent(data);
                setLoading(false);
            });
    }
  }, [link]);

  if (loading){
    return <div>Loading...</div>
  }

  
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
    setShowMainPage(true);
  };

  if (showMainPage) {
    return <MainPage />;
  }

  const handleCopyArticle = () => {
    // Copy the content of the textarea to the clipboard
    navigator.clipboard.writeText(articleContent);
  };

  const handleGetSummary = () => {
    // Here you can implement the logic to generate the summary
    // For now, let's just set a placeholder summary
    // setSummary('This is a placeholder summary.');  //LATER BACKEND
  };

  return (
    <div className="extension-summariser">
      <div className="box">
        <img src={WhiteLogo} className="companyLogo" alt="Company Logo" />
        <div className="menu">
          {/* Article Heading */}
          <h2>Article</h2>
          {/* Textarea for Article */}
          <div className="article-content-container">
            <textarea
              className="article-content"
              placeholder="Paste your article content here..."
              value={articleContent}
              onChange={(e) => setArticleContent(e.target.value)}
            />
            <div className="copy-icon" onClick={handleCopyArticle}>
              <img src={copyIcon} alt="Copy Icon" />
            </div>
          </div>
          {/* Get Summary Button */}
          <button className="get-summary-button" onClick={handleGetSummary}>Get Summary</button>
          {/* Display Summary */}
          {/* {summary && (
            <div className="summary">
              <h3>Summary:</h3>
              <p>{summary}</p>
            </div>
          )} */}
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

export default Summariser;