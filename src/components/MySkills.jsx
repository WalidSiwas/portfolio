import React from "react";

function MySkills() {
    return (
        <div className="container py-5 my-5">
            <h1 className="text">My Skills:</h1>
            <img className="coding-icon rounded float-right" src="./images/programmer.png"/>
            <div className="d-flex flex-row mb-3">
                <div className="p-2 text">HTML:</div>
                <div className="p-2 star-div">
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star.svg" />
                </div>
            </div>

            <div className="d-flex flex-row mb-3">
                <div className="p-2 text">CSS:</div>
                <div className="p-2 star-div">
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-half.svg" />
                    <img src="./images/star.svg" />
                </div>
            </div>

            <div className="d-flex flex-row mb-3">
                <div className="p-2 text">JavaScript:</div>
                <div className="p-2 star-div">
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-half.svg" />
                    <img src="./images/star.svg" />
                </div>
            </div>
            
            <div className="d-flex flex-row mb-3">
                <div className="p-2 text">React:</div>
                <div className="p-2 star-div">
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-half.svg" />
                    <img src="./images/star.svg" />
                </div>
            </div>

            <div className="d-flex flex-row mb-3">
                <div className="p-2 text">Node.js:</div>
                <div className="p-2 star-div">
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-half.svg" />
                    <img src="./images/star.svg" />
                    <img src="./images/star.svg" />
                </div>
            </div>

            <div className="d-flex flex-row mb-3">
                <div className="p-2 text">Express:</div>
                <div className="p-2 star-div">
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-fill.svg" />
                    <img src="./images/star-half.svg" />
                    <img src="./images/star.svg" />
                    <img src="./images/star.svg" />
                </div>
            </div>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
               <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "65%"}}></div>
            </div>

        </div>
    );
}


export default MySkills;