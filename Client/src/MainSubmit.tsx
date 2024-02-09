import { useState } from 'react';
import brief from './assets/Brief.jpg';
import detective from './assets/Detective.jpg';
import plus from './assets/Plus Math.jpg';
import Summariser from './Summariser';
import './CrossCheck.css';
import CrossCheck from './CrossCheck';
import AddNote from './AddNote';
import MainPage from './MainPage' // Import your MainPage component
import globalVariable from './LinkGlobalVar';

function MainSubmit() {
    const [showSummariser, setShowSummariser] = useState(false);
    const [showCrossCheck, setShowCrossCheck] = useState(false);
    const [showMainPage, setShowMainPage] = useState(false);
    const [showAddNote, setAddNote] = useState(false);

    const link = globalVariable.value;
    let prediction = "";
    let title = "";
    let predictionText = "";

    if (link != "") {
        //POST request to the server to send the article link and get the article content
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "link": link })
        };
        fetch('http://localhost:3000/getArticle', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                prediction = data.prediction;
                title = data.title;
                handlePrediction();
            });
    }

    

    const handlePrediction = () => {
        if (prediction === "0") {
            predictionText = "agree";
        }
        else if (prediction === "1") {
            predictionText = "disagree";
        }
        else if (prediction === "2") {
            predictionText = "discuss";
        } else {
            predictionText = "unrelated";
        }
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
            <div className="article-heading">
                {/* Add your article heading here */}
                <h2>{title}</h2>
            </div>
            <div className="text-boxes">
                {/* Add your textboxes here */}
                <div id="textbox" >The headline {predictionText} to the content</div>
                <div className="textbox">
                    Feature Note
                </div>
            </div>
            <div className="cross-check-button">
                {/* Add your cross-check button here */}
                <button className='check' onClick={handleAddNote}>Add note</button>
                <button className='check' onClick={handleAddNote}>View Add note</button>
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