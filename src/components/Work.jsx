import React from 'react'

export default function Work() {
  return (
    <section className="work" id="work" >
    <div className="row">
        <h2>My Work</h2>
        <div className="work__boxes">
            <div className="work__box">
                <div className="work__text">
                    <h3>Movie Watch-List</h3>
                    <p>
                        Keep track of all the movies you want to watch
                    </p>
                    <ul className="work__list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Tailwind</li>
                    </ul>
                    <div className="work__links">
                        <a href="https://movie-watchlist-official.netlify.app/" target="_blank" className="link__text">
                            Visit Site <span>&rarr;</span>
                        </a>
                        <a href="https://github.com/lakindu62/movie-watchlist" title="View Source Code" target="_blank">
                            <img src="/images/github.svg" className="work__code" alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="work__image-box">
                    <img src="/images/move-watchlist.png" className="work__image" alt="Project 1" />
                </div>
            </div>
            <div className="work__box">
                <div className="work__text">
                    <h3>Graphic Designer Sample Portfolio</h3>
                    <p>
                        Based on one of my friend's requirements, I have created a fully functional design
                        portfolio which showcases his various artworks, allowing potential clients to reach out to him.
                    </p>
                    <ul className="work__list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwind</li>
                        <li>React</li>
                    </ul>
                    <div className="work__links">
                        <a href="#" className="link__text">
                            Visit Site <span>&rarr;</span>
                        </a>
                        <a href="#">
                            <img src="/images/github.svg" className="work__code" title="View Source Code" alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="work__image-box">
                    <div className="imgHolder">
                        <img className="portfolioA" src="/images/portfolioHero.jpg" alt="" />
                        <video className="portfolioA" autoPlay loop muted src="/images/videos/portfolioProjects.mov" />
                    </div>
                </div>
            </div>
            <div className="work__box">
                <div className="work__text">
                    <h3>Quizzical App</h3>
                    <p>
                        Quiz app to test your Knowledge
                    </p>
                    <ul className="work__list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Tailwind</li>
                    </ul>
                    <div className="work__links">
                        <a href="https://quizzical-official.netlify.app/" className="link__text" target="_blank" >
                            Visit Site <span>&rarr;</span>
                        </a>
                        <a href="https://github.com/lakindu62/Quizzical" target="_blank">
                            <img src="/images/github.svg" className="work__code" title="View Source Code" alt="GitHub" />
                        </a>
                    </div>
                </div>
                
                <div className="work__image-box">
                    <img src="/images/quiz.jpg" className="work__image" alt="Project 3" />
                </div>
                
            </div>
        </div>
    </div>
</section>
  )
}
