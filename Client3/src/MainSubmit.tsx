import { useState, useEffect } from 'react';
import brief from './assets/Brief.jpg';
import detective from './assets/Detective.jpg';
import plus from './assets/Plus Math.jpg';
import Summariser from './Summariser';
import './CrossCheck.css';
import './MainPage.css';
import WhiteLogo from './assets/WhiteLogo.png';
import CrossCheck from './CrossCheck';
import AddNote from './AddNote';
import ViewNote from './ViewNote';
import MainPage from './MainPage'; // Import your MainPage component
import globalVariable from './LinkGlobalVar';

function MainSubmit() {
    const [showSummariser, setShowSummariser] = useState(false);
    const [showCrossCheck, setShowCrossCheck] = useState(false);
    const [showMainPage, setShowMainPage] = useState(false);
    const [showAddNote, setAddNote] = useState(false);
    const [showViewNote, setViewNote] = useState(false);
    const [loading, setLoading] = useState(true);
    const [title1, setTitle] = useState('');

    const link = globalVariable.value;
    let prediction = "";
    let title = "";
    let predictionText = "";

    useEffect(() => {
        if (link !== "") {
            //POST request to the server to send the article link and get the article content
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "link": link })
            };
            fetch('http://localhost:3000/articles/getArticle', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    prediction = data.prediction;
                    title = data.title;
                    console.log(title);
                    setTitle(title);
                    setLoading(false);
                });
        }
    }, [link]);

    const handlePrediction = () => {
        const predictionNumber = Number(prediction);
        if (predictionNumber === 0) {
            predictionText = "agree";
        } else if (predictionNumber === 1) {
            predictionText = "disagree";
        } else if (predictionNumber === 2) {
            predictionText = "discuss";
        } else {
            predictionText = "unrelated";
        }
    }

    const handleViewNote = () => {
        setViewNote(true);
    };

    if (showViewNote) {
        return <ViewNote />;
    }

    const handleAddNote = () => {
        setAddNote(true);
    };

    if (showAddNote) {
        return <AddNote />;
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

    handlePrediction();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={WhiteLogo} className="companyLogo" alt="Company Logo" />
            <div className="article-heading">
                <h2>{title1}</h2>
            </div>
            <div className="text-boxes">
                <div id="textbox" >The headline {predictionText} to the content</div>
                <div className="textbox">
                    Feature Note
                </div>
            </div>
            <div className="cross-check-button">
                <button className='check' onClick={handleAddNote}>Add note</button>
                <button className='check' onClick={handleViewNote}>View Add note</button>
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

export default MainSubmit;
