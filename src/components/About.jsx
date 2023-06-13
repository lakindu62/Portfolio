import React from 'react'

export default function About() {
  return (
    <section className="about" id="about">
    <div className="row">
        <h2>About Me</h2>
        <div className="about__content flex flex-col justify-center items-center">
            <div className="about__text">
                <p>
                    As a self-taught front-end web developer and aspiring minimalist web designer,
                    I am committed to pushing the boundaries of my craft. My name is Lakindu, and I
                    recently completed my advanced level education. While waiting for my results to
                    pursue a degree in computer science, I am currently pursuing a higher diploma in
                    IT (BSC) to expand my knowledge and skills.
                </p>
                <p>
                    I am dedicated to staying up-to-date with the latest industry trends and technologies,
                    and I am passionate about creating clean, user-friendly designs that engage and delight users.
                </p>
                <p>
                    With a strong attention to detail and a commitment to excellence, I am confident that
                    I have the skills and expertise to deliver outstanding results for any project.
                </p>
                <a href="#" className="btn">My Resume</a>
            </div>
            <div className="about__photo-container">
                <img className="about__photo" src="/images/lakindu.jpg" alt="" />
            </div>
        </div>
    </div>
</section>
  )
}
