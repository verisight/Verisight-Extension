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
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function GetStartedPage({ onGetStartedClick }: { onGetStartedClick: () => void }) {
  return (
    <div>
      <img src={blueTickLogo} className="bigLogo" alt="Blue Tick logo" />
      <h2>Don't trust whatever you see</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sem vel felis egestas
        lobortis.
      </p>
      {/* <ProductCarousel images={[blueTickLogo, "https://via.placeholder.com/150", "https://via.placeholder.com/150"]} title="Title" description="Description" /> */}
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
