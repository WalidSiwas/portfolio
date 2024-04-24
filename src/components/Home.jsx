import React from "react";

function Home() {
    return (
        
        <div className="row align-items-center p-5 m-5 " id="home" >
                    {/* change col-lg in css */}
            <div className="col-lg-7 text-center">
                <h1 className="display-3 mb-3 text ">Walid Siwas</h1>
                <p className="mb-3 text"><span style={{color:"red"}}>Junior</span> Full Stack Developer.</p>
            </div>
            <div>
                <img className="profile " src="./images/me.jpg" alt="Me" />
            </div>
        </div>
    );
}

export default Home;