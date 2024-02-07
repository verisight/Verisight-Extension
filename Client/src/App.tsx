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
import blueTickLogo from './assets/Bluetick.png'; // Import your blue tick logo
import CompanyLoginSignupPage from './CompanyLoginSignupPage'; // Import the new component
import './App.css';
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
