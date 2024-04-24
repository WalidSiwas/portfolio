import React from "react";

function Projects() {
    return (
        <div className="container py-5 my-5" id="projects">

            <div className="py-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="text" >My Projects:</h1>
                    <p className="lead text">These are some of the projects, exercises, and challenges that I worked on through online courses. </p>
                </div>
            </div>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        <div className="col my-1">
                            <div className="card shadow-sm">
                                <a href="https://walidsiwas.github.io/theSimonGame/" target="_blank"><img src="./images/simon.png" className="card-img-top" width="100%" height="225" /> </a>
                                <div className="card-body">
                                    <p className="text">The Simon Game.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-1">
                            <div className="card shadow-sm">
                                <a href="https://walidsiwas.github.io/durm.kit./" target="_blank"><img src="./images/drum-kit.png" className="card-img-top" width="100%" height="225" /> </a>
                                <div className="card-body">
                                    <p className="text">Drum Kit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-1">
                            <div className="card shadow-sm">
                                <a href="https://walidsiwas.github.io/emojis-game/" target="_blank"><img src="./images/emoji.png" className="card-img-top" width="100%" height="225" /> </a>
                                <div className="card-body">
                                    <p className="text">Rock-paper-scissros Game.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col my-1">
                            <div className="card shadow-sm">
                                <a href="https://walidsiwas.github.io/ToDoList/" target="_blank"><img src="./images/toDoList.jpg" className="card-img-top" width="100%" height="225" /> </a>
                                <div className="card-body">
                                    <p className="text">To Do List.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-1">
                            <div className="card shadow-sm">
                                <a href="https://github.com/WalidSiwas/Kind-moive" target="_blank"><img src="./images/KindMovies.png" className="card-img-top" width="100%" height="225" /> </a>
                                <div className="card-body">
                                    <p className="text">Kind Moives</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-1">
                            <div className="card shadow-sm">
                                <a href="https://www.google.com/" target="_blank"><img src="./images/coming-soon.jpg" className="card-img-top" width="100%" height="225" /> </a>
                                <div className="card-body">
                                    <p className="text">Coming Soon ...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}



export default Projects;


