import { useState } from 'react';
import brief from './assets/Brief.jpg';
import detective from './assets/Detective.jpg';
import plus from './assets/Plus Math.jpg';


import Summariser from './Summariser';

function CrossCheck() {
  const [showSummariser, setShowSummariser] = useState(false);
  const [showCrossCheck, setShowCrossCheck] = useState(false);

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

  return (
    <div>
      <h1>Cross Check Page</h1>
      {/* Add your Cross Check content here */}
      <div className="box">
        <div className="menu">
          <div className="overlap-group">
            <button className="rectangle summariser" onClick={handleSummariserClick}></button>
            <button className="rectangle cross-checking" onClick={handleCrossCheckClick}></button>
            <button className="ellipse"></button>
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
