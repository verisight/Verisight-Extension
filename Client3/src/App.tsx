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
import { useState, useEffect } from 'react';
import blueTickLogo from './assets/Bluetick.png'; // Import your blue tick logo
import CompanyLoginSignupPage from './CompanyLoginSignupPage'; // Import the new component
import './App.css';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Button } from "@/components/ui/button"

import verisightLogo from './assets/WhiteLogo.png';



function GetStartedPage({ onGetStartedClick }: { onGetStartedClick: () => void }) {
  return (
    // <div className='startPage'>
    //   <img src={blueTickLogo} className="bigLogo" alt="Blue Tick logo" />
    //   <h2>Don't trust whatever you see</h2>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sem vel felis egestas
    //     lobortis.
    //   </p>
    //   {/* <ProductCarousel images={[blueTickLogo, "https://via.placeholder.com/150", "https://via.placeholder.com/150"]} title="Title" description="Description" /> */}
    //   <button onClick={onGetStartedClick}>Get Started</button>
    // </div>
    <div className="extension-get">
      <div className="div">
        <img className="image" alt="Image" src={blueTickLogo} />
        <p className="text-wrapper">Don’t trust whatever you see</p>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat
        </p>
        <div onClick={onGetStartedClick} className="overlap-group">
          <button className="rectangle">Get Started</button>
          {/* <div className="text-wrapper-2">Get Started</div> */}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showGetStarted, setShowGetStarted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching resources, initializing)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    // Simulate progress increase
    const interval = setInterval(() => {
      setProgressWidth(prevWidth => prevWidth + 10); // Increase width by 10px
    }, 200); // Adjust the interval time as needed

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleGetStartedClick = () => {
    setShowGetStarted(false);
  };

  return (
    <>
    <div className='container'>
      {loading ? (
        // Display loading indicator
        // <div className="loading">
        //   {/* Display your company logo here */}
        //   <img src={verisightLogo} alt="Company Logo" />
        //   {/* Display a progress bar loading sign here */}
        //   <div className="progress-bar"></div>
        // </div>
            <div className="loading-get">
            <div className="div">
              <img className="image" alt="Image" src={verisightLogo} />
              <div className={`progress-bar ${!loading && 'green'}`} style={{ width: `${progressWidth}px` }}></div>
            </div>
          </div>
      ) : showGetStarted ? (
        <GetStartedPage onGetStartedClick={handleGetStartedClick} />
      ) : (
        <CompanyLoginSignupPage />
      )}
    </div>

    </>
  );
}

// interface ICarouselProps {
//   images : string[];
//   title: string;
//   description: string;
// }

// const ProductCarousel: React.FC<ICarouselProps> = ({ images, title, description }) => {
//   return (
//       <div>
//           <Carousel autoPlay showArrows={false} interval={2000}>
//             {images.map((image, index) => (
//                     <div key={index}>
//                         <img src={image} alt="" />
//                         <p className="legend">{title}</p>
//                     </div>
//             ))}
//           </Carousel>
//           <p>{description}</p>
//       </div>
//   );
// };

export default App;
