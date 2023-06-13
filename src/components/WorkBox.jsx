import React from 'react'

export default function WorkBox({
    name , 
    imgSrc , 
    description ,
    siteHref,
    githubHref,
    skills
}) {
    return (
        <div className='w-[85%]'>
            <div className=" flex flex-col gap-5 bg-[#1C1C1E] py-24 shadow-2xl px-36 mt-20 mx-10 rounded-[80px] items-center justify-center">
                <div className="">
                    <h3>{name}</h3>
                    <div className="">
                        <img src={`${imgSrc}`} className="work__image" alt="Project 3" />
                    </div>
                    <p>
                        {description}
                    </p>
                    <ul className="list-disc ml-10">
                        {skills.map((skill=>{
                            return <li>{skill}</li>
                        }))}
                    </ul>
                    <div className="work__links mt-10">
                        <a href={`${siteHref}`} className="link__text hover:bg-slate-600 hover:rounded-3xl " target="_blank" >
                            <span>Visit Site</span> <span>&rarr;</span>
                        </a>
                        <a href={`${githubHref}`} target="_blank">
                            <img src="/images/github.svg" className="work__code" title="View Source Code" alt="GitHub" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
