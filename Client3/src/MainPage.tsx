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
import WhiteLogo from './assets/WhiteLogo.png';
import brief from './assets/Brief.jpg';
import detective from './assets/Detective.jpg';
import plus from './assets/Plus Math.jpg';
import UserProfileIcon from './assets/profileIcon.jpg';

// import link from './assets/link.jpg';
import { Readability } from '@mozilla/readability';
import './MainPage.css';
// Import the Summariser component
import Summariser from './Summariser';
import CrossCheck from './CrossCheck';
import MainSubmit from './MainSubmit';
import globalVariable from './LinkGlobalVar';

// import openai from './Summariser';



function MainPage() {
  const [urlInput, setUrlInput] = useState('');
  const [showSummariser, setShowSummariser] = useState(false); // State to control the visibility of Summariser
  const [showCrossCheck, setShowCrossCheck] = useState(false); // State to control the visibility of CrossCheck
  const [showMainSubmit, setMainSubmit] = useState(false); // State to control the visibility of CrossCheck

  const fetchUrl = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
      console.log(tabs[0]?.url);
      if (tabs[0]?.url) {
        setUrlInput(tabs[0]?.url);
      }
    });
    handleFetchLink();
  }

  const handleFetchLink = () => {
    // Perform logic to fetch link based on the current site or URL
    // For now, let's just log the URL to the console
    console.log('Fetching link for:', urlInput);

    if (urlInput === '') {
      console.log('Please enter a valid URL');
      return;
    } else {
      async function fetchAndExtractContent(urlInput: string) {
        const response = await fetch(urlInput);
        const html = await response.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const reader = new Readability(doc);
        const article = reader.parse();
        const link = urlInput.toString();
        const title = article?.title ? article.title : null;
        //Make the date in 2021-08-01 format
        const date = new Date().toISOString().split('T')[0];
        const author = article?.byline ? article.byline : null;
        const tempElement = document.createElement('div');
        tempElement.innerHTML = article?.content ? article.content.replace(/'/g, "\\'") : '';
        const plainText = tempElement.textContent;
        globalVariable.value = link
        if (article && isNewsWebsite(html)) {
          console.log('URL:', link);
          console.log('Title:', article.title);
          console.log('Excerpt:', article.excerpt);
          console.log('Byline:', article.byline);
          console.log('Length:', article.length);
          console.log('Site Name:', article.siteName);
          console.log('Publication Date:', date);
          console.log('Author:', author);
          console.log('Direction:', article.dir);
          console.log('Content:', plainText);
          //Make a POST request to the server to send the lin, title, content and date
          const response = await fetch('http://localhost:3000/articles', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "link": link,
              "title": title,
              "content": plainText,
              "datePublished": date
            }),
          });

          if (!response.ok) {
            // Handle non-OK status codes
            console.error(`Request failed with status ${response.status}`);
            return null;
          }

          try {
            //console log the contents of JSON file
            const data = response;
            console.log('Success:', data);
            handleMainSubmit();
            globalVariable.value = link; // Update the type of globalVariable to include a value property
            return link;
          } catch (error) {
            console.error('Error parsing JSON:', error);
            handleMainSubmit();
            return null;
          }
        } else if (!isNewsWebsite(html)) {
          console.log('The provided URL does not appear to be a news website.');
          return null;
        }
        return null;
      }
      fetchAndExtractContent(urlInput)
        .then((content) => {
          if (content) {
            const articleContent = document.getElementById('article-content');
            if (articleContent) {
              articleContent.innerHTML = content;
            }
          }
        })
        .catch((error) => {
          console.error('Error fetching and extracting content:', error);
        });
    }

    function isNewsWebsite(content: string) {
      // Convert HTML content string to a DOM element
      const tempElement = document.createElement('div');
      tempElement.innerHTML = content;

      // Analyze the DOM structure and content to identify common patterns
      const articleElements = tempElement.querySelectorAll('article, .article, .news, .story, .headline, [role="article"]');
      const headlineElements = tempElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const paragraphElements = tempElement.querySelectorAll('p');

      // Check if the page contains elements commonly found on news websites
      // Adjust these conditions based on the characteristics of news websites you want to detect
      const hasArticle = articleElements.length > 0;
      const hasHeadlines = headlineElements.length > 0;
      const hasParagraphs = paragraphElements.length > 0;

      // Determine if the webpage appears to be a news website based on the presence of common elements
      return hasArticle && hasHeadlines && hasParagraphs;
    }
  };

  const handleSummariserClick = () => {
    setShowSummariser(true); // Show Summariser component when the button is clicked
  };

  // Render the Summariser component if showSummariser is true
  if (showSummariser) {
    return <Summariser />;
  }

  const handleCrossCheckClick = () => {
    setShowCrossCheck(true); // Show CrossCheck component when the button is clicked
  };

  const handleMainSubmit = () => {
    setMainSubmit(true); // Show CrossCheck component when the button is clicked
  };


  // Render the CrossCheck component if showCrossCheck is true
  if (showCrossCheck) {
    return <CrossCheck />;
  }

  if (showMainSubmit) {
    return <MainSubmit />;
  }
  return (
    <div>
      <div className='container'>
        {/* <img src={WhiteLogo} className="companyLogo" alt="Company Logo" /> */}
        <div className='row'>
          <div className="leftSide">
            <img src={WhiteLogo} className="companyLogo" alt="Company Logo" />
          </div>
          <div className="rightSide">
            <img src={UserProfileIcon} className="userProfileIcon" alt="User Profile Icon" />
          </div>
        </div>
        
        <div className="Button">
          <button className='fetchButton' onClick={fetchUrl}>Fetch Link of Current site</button>
        </div>
        <div className="orLineMain">
          <div className="lineMain"></div>
          <div className="orTextMain">or</div>
          <div className="lineMain"></div>
        </div>
        {/* <div className="urlInputContainer">
        <input
          type="text"
          className="urlInputButton" // Apply a specific class for styling
          placeholder="Enter your URL"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
      </div> */}

        <div className="urlInputContainer">
          <div className="urlInputWrapper">
            {/* <img src={link} className="linkIcon" alt="Link Icon" /> */}
            <input
              type="text"
              className="urlInputButton" // Apply a specific class for styling
              placeholder="Enter your URL"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
            />
          </div>
        </div>
        <button className='submitButton' onClick={handleFetchLink}>SUBMIT</button>
        <div id="article-content"></div>
      </div>


      <div className="box">
        <div className="menu">
          <div className="overlap-group">
            <button className="rectangle summariser" onClick={handleSummariserClick}></button>
            <button className="rectangle cross-checking" onClick={handleCrossCheckClick}></button>
            <button className="ellipse"></button>
            <img src={plus} className="plus-math" alt="Plus math" />
            <div className="text-wrapper">Summariser</div>
            <div className="text-wrapper2">Cross-checking</div>
            {/* <a href="/Summariser">
              <img src={brief} className="brief" alt="Brief" />
            </a>
            <a href='/CrossCheck'>
              <img src={detective} className="detective" alt="Detective" />
            </a> */}
            <img src={brief} className="brief" alt="Brief" />
            <img src={detective} className="detective" alt="Detective" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
